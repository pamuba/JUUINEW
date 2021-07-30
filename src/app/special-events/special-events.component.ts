import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = []
  constructor(private _eventsService:EventService,
    private router:Router) { }

  ngOnInit(): void {
    this._eventsService.getSpecialEvents()
        .subscribe(
          res => this.specialEvents = res,
          err => {
            if(err instanceof HttpErrorResponse){
              if(err.status === 401){
                  this.router.navigate(['/login'])
              }
            }
          }
        )
  }

}
