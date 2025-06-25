import { Component, Input , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-content-title',
  imports: [RouterModule, NgStyle],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.css'
})
export class ContentTitleComponent {
    @Input() title: string = '';
    @Input() image: string = '';
    constructor() {}

    ngOnInit(): void {
      this.loadImage();
    }

    loadImage(): void {
      let backgroundImage = window.document.getElementById('image');
      backgroundImage ?.setAttribute('style', 'background-image: url(' + this.image + ')');
    }

}
