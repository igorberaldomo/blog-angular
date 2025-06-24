import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ContentTitleComponent } from '../../components/content-title/content-title.component';
import { ContentTextComponent } from '../../components/content-text/content-text.component';
import { ActivatedRoute } from '@angular/router';
import { Data } from "../../data/data"

@Component({
  selector: 'app-content',
  imports: [HeaderComponent, ContentTitleComponent, ContentTextComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  text: string = '';
  title: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id')
    })
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const array = Data.filter(value => value.id == id)[0]
    this.title = array.title;
    this.text = array.text;
  
  }
}
