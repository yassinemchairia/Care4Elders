import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Attendance } from '../models/Attendance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Cuisinier } from '../models/Cuisinier';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  id!: number;
  startAttendanceSuccess: boolean = false;
  stopAttendanceSuccess: boolean = false;
  timerActive: boolean = false;
  startTime!: number;
  timerInterval: any;
  formattedTime: string = '00:00:00';
  userId!: number;
  attendanceId: number | undefined;
  attendance = new Attendance();
  timerSubscription!: Subscription;

  constructor(private attendanceService: AttendanceService) { }
  cuisinier_Connecter!: Cuisinier;

  ngOnInit(): void {
    const UserConnected_String = localStorage.getItem('CUISINIER');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    console.log(UserConnected)
    if (UserConnected) {
      this.cuisinier_Connecter = {
        idC: UserConnected.idC,
        user: UserConnected.user,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        dateAjout: UserConnected.dateAjout,
        salaire: UserConnected.salaire,
        disponiblee: UserConnected.disponiblee,
        sexe: UserConnected.sexe
      }
      
      console.log(this.cuisinier_Connecter.idC);
    }
    const storedStartTime = this.attendanceService.getStartTime();
    if (storedStartTime) {
      this.startTime = storedStartTime;
      this.startTimer();
    }
    window.addEventListener('beforeunload', this.saveStartTimeBeforeUnload.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('beforeunload', this.saveStartTimeBeforeUnload.bind(this));
    this.clearTimer();
  }

  private saveStartTimeBeforeUnload(): void {
    if (this.timerActive) {
      this.attendanceService.setStartTime(this.startTime);
    }
  }

  startAttendance(): void {
    this.startTime = Date.now();
    this.startTimer();
    this.timerActive = true;

    this.attendance = new Attendance();
    this.attendance.presence = true;
    this.attendance.start = new Date();

   

    this.attendance.cuisinier = this.cuisinier_Connecter;

    this.attendanceService.startAttendance(this.cuisinier_Connecter.idC).subscribe(
      (response: number) => {
        console.log('Attendance started successfully.');
        this.startAttendanceSuccess = true; // Set to true on success
        this.stopAttendanceSuccess = false; // Set to false on failure

        this.attendanceId = response;
        console.log('Attendance ID:', this.attendanceId);
      },
      (error) => {
        console.error('Failed to start attendance:', error);
        this.startAttendanceSuccess = false; // Set to false on failure

      }
    );
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer(): void {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    this.formattedTime = this.formatTime(hours) + ":" + this.formatTime(minutes) + ":" + this.formatTime(seconds);
  }

  formatTime(time: number): string {
    return time < 10 ? "0" + time : time.toString();
  }

  stopTimer(): void {
    if (this.timerActive) {
      clearInterval(this.timerInterval);
      this.timerActive = false;

      if (this.attendanceId !== undefined) {
        this.attendance.end = new Date();
        const elapsedTime = this.attendance.end.getTime() - this.startTime;

        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        this.attendance.workedHours = hours + (minutes / 60) + (seconds / 3600);

        this.attendanceService.updateAttendance(this.attendanceId, this.attendance).subscribe(
          () => {
            console.log('Attendance ended successfully for Attendance ID:', this.attendanceId);
            this.attendanceId = undefined; // Reset attendanceId after successful update
            this.stopAttendanceSuccess = true; // Set to true on success
            this.startAttendanceSuccess = false; // Set to false on failure

          },
          error => {
            console.error('Error ending attendance session: ', error);
            this.stopAttendanceSuccess = false; // Set to false on failure

          }
        );
      } else {
        console.error('Attendance ID is not defined.');
      }
    } else {
      console.warn('Timer is already stopped.');
    }
  }


  clearTimer(): void {
    if (this.timerActive) {
      clearInterval(this.timerInterval);
      this.timerActive = false;
    }
  }
}
