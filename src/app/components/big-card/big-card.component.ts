import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() id: string = '';
  constructor() {}
  
  ngOnInit(): void {}

}
