import { Component, OnInit } from '@angular/core';
import { IPoema, poemas } from '../poemas';

@Component({
  selector: 'app-poemas',
  templateUrl: './poemas.component.html',
  styleUrls: ['./poemas.component.css']
})
export class PoemasComponent implements OnInit {
  poemas: IPoema[] = poemas;

  constructor() { }

  ngOnInit(): void {
  }

}
