import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MorgueService } from 'src/app/services/morgue.service';

@Component({
  selector: 'app-updatemorgue',
  templateUrl: './updatemorgue.component.html',
  styleUrls: ['./updatemorgue.component.css']
})
export class UpdatemorgueComponent implements OnInit {
  constructor(private service: MorgueService, private router: Router, private activatedRoute: ActivatedRoute) {}

  morgue: any;
  id: any;

  routeSub!: Subscription;

  ngOnInit(): void {
    this.morgue = {
      idMorgue: null,
      nbCadavre: null
    };

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.service.getMorgue(this.id).subscribe(p => {
      console.log(p);
      this.morgue = p;
    });
  }

  modifierMorgue() {
    this.service.modifierMorgue(this.morgue).subscribe(
      res => {
        this.morgue = {
          nbCadavre: 0,
        };
        console.log(res);
        this.router.navigate(['/admin/listeMorgue']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
