import { Component, Input , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-content-title',
  imports: [RouterModule],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.css'
})
export class ContentTitleComponent {
    @Input() title: string = '';

    constructor() {}

    ngOnInit(): void {}

}
