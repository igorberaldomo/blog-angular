import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {ContentTitleComponent} from '../../components/content-title/content-title.component';
import {ContentTextComponent} from '../../components/content-text/content-text.component';

@Component({
  selector: 'app-content',
  imports: [HeaderComponent, ContentTitleComponent, ContentTextComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
