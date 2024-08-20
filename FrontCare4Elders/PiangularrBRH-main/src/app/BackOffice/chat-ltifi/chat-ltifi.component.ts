import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { OrdenanceService } from 'src/app/services/ordenance.service';

@Component({
  selector: 'app-chat-ltifi',
  templateUrl: './chat-ltifi.component.html',
  styleUrls: ['./chat-ltifi.component.css']
})
export class ChatLtifiComponent implements OnInit {

constructor(private chatService:ChatService){}
medecins: any[] = [];


ngOnInit(): void {
  this.chatService.getAllMedecin().subscribe(res => {
    console.log(res);
    this.medecins = res;
  });
}



}
