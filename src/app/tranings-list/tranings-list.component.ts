import { Component, OnInit } from '@angular/core';
import { TraningType } from 'src/app/traning-type.model';
import { Traning } from 'src/app/traning.model';
import { TRANINGSFORWEEK } from 'src/app/traningsforweek';



@Component({
  selector: 'app-tranings-list',
  templateUrl: './tranings-list.component.html',
  styleUrls: ['./tranings-list.component.css']
})
export class TraningsListComponent implements OnInit {
  
  traningsforweek = TRANINGSFORWEEK;

  constructor() { }

  ngOnInit(): void {
  }

}
