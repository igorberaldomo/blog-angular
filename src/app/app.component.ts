import { Component } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, SmallCardComponent, BigCardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogPage';
}
