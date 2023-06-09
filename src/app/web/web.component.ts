import { Component } from '@angular/core';
import { ProjectCardData } from '../projectCardData';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})


export class WebComponent {

  projectCard = ProjectCardData

}
