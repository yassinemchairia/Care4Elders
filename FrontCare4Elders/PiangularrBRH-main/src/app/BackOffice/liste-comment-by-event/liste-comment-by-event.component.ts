import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EvennementService } from '../../serives/eventsService/evennement.service';

@Component({
  selector: 'app-liste-comment-by-event',
  templateUrl: './liste-comment-by-event.component.html',
  styleUrls: ['./liste-comment-by-event.component.css']
})
export class ListeCommentByEventComponent implements OnInit {
  commentaires: any[] = [];
  commentaire:any; 
  id : any;

  constructor(private http: HttpClient, private route: ActivatedRoute,private evennementService: EvennementService,) { }

  ngOnInit(): void {
   
  this.id = this.route.snapshot.paramMap.get('id');
 console.log("idd",this.id)
 this.loadCommentaires();
    
  }

  loadCommentaires(): void {
    if (this.id) {
      this.http.get<any[]>(`http://localhost:8087/commentaires/evennement/${this.id}`)
        .subscribe((data) => {
          this.commentaires = data;
        });
    }
  }

  delete(id: number) {
    console.log("Suppression de l'événement avec l'ID:", id);
    this.evennementService.supprimerComment(id)
      .subscribe(
        res => {
          console.log(res);
          this.loadCommentaires();
        },
        err => {
          console.log(err);
        }
      ); 
  }





}
