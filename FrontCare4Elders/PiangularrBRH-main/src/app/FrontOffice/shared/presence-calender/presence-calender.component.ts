import { Component } from '@angular/core';
import {
  
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { EvennementService } from '../../../serives/eventsService/evennement.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';
import { Cuisinier } from '../../models/Cuisinier';
import { Attendance } from '../../models/Attendance';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-presence-calender',
  templateUrl: './presence-calender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
      .calendar-container {
    border: 20px solid #ccc;
    border-radius: 15px;
    padding:10px;
    margin: 10px;
  }
    `,
  ],})
export class PresenceCalenderComponent {
  colors: Record<string, EventColor> = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    green: {
      primary: '#008000',
      secondary: '#90EE90',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    
  
  ];

  activeDayIsOpen: boolean = true;
evennement: any;
cuisinier_Connecter!: Cuisinier;
attendanceDates: Date[] = []; // Liste des dates de présence

  constructor(private modal: NgbModal, private eventService: EvennementService,private att:AttendanceService, private userAuthServiceService: UserAuthServiceService) {
    this.attendanceDates = [];
  }
  isCuisinier: boolean = false;
  roleNames: string[] = []; 
  


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }



  ngOnInit(): void {
    this.roleNames = this.userAuthServiceService.getRoleNames();
  console.log('Noms des rôles:', this.roleNames);
  this.isCuisinier = this.roleNames.includes('CUISINIER');

  
    if(this.isCuisinier){
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
        this.att.retrievePresence(this.cuisinier_Connecter.idC).subscribe(
          (res: any) => {
            console.log(res);
            this.events = res.map((attendance: any) => {
              return {
                start: startOfDay(new Date(attendance.start)),
                color: { primary: attendance.primaryColor, secondary: attendance.secondaryColor },
              };
            });
          },
          (err) => {
            console.log(err);
          }
        );
    

    }
  } 
 }

 // Définir les couleurs des événements

 // Mettre à jour les couleurs des événements dans le calendrier en fonction des dates de présence
updateEventColors(): void {
  this.events = this.events.map(event => {
    // Vérifier si la date de début de l'événement est présente dans la liste de présence
    if (this.isDatePresent(event.start)) {
      // Si oui, changer la couleur de l'événement en vert
      return {
        ...event,
        color: colors['green'], // Utiliser la couleur verte pour les dates de présence
      };
    } else {
      return event; // Garder la couleur par défaut pour les autres dates
    }
  });
  // Rafraîchir le calendrier pour appliquer les changements de couleur
  this.refresh.next();
}


// Fonction pour vérifier si une date est présente dans la liste de présence
isDatePresent(date: Date): boolean {
  return this.attendanceDates.some(d => isSameDay(date, d));
}
 
}
