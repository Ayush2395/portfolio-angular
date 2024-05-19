import { Component } from '@angular/core';
import { fadeInAnimation } from '../../core/common/animation/fadeIn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation]
})
export class HomeComponent { }
