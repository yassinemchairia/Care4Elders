import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { BrahmiUploadService } from 'src/app/services/brahmi-upload.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit{
  activity:any ;
  id :any;
  selectedImageFile: File | undefined;
  constructor(private upload:BrahmiUploadService,private act : ActivatedRoute , private _shared : ActivityService, private router :Router){
  
  }
 
 
  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }
  ajouterImage(callback: () => void) {
    if (this.selectedImageFile) {
      this.upload.uploadFile(this.selectedImageFile).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          if (response && response.imageURL) {
            this.activity.image = response.imageURL;
          } else {
            console.error('Error: Image URL not found in response.');
          }
          callback();
        },
        error => {
          console.error('Error uploading image:', error);
          callback();
        }
      );
    } else {
      console.error('No image selected');
      callback();
    }
  }
  update(){
    this.ajouterImage(() => {

    this._shared.updateActivity(this.activity)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/listActivity']);
      },
      err => {
        console.log(err);
      }
    );
  });
  }

  ngOnInit():void {
    this.id = this.act.snapshot.paramMap.get('id');
  
    this._shared.getActivityById(this.id)
    .subscribe(
      res => {
        this.activity = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
