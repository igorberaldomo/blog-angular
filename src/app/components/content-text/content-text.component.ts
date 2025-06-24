import { Component, Input , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-content-text',
  imports: [RouterModule],
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.css'
})
export class ContentTextComponent {

    @Input() text: string = '';

    constructor() {}

    ngOnInit(): void {}

}
