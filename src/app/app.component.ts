import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerAnimation } from './core/common/animation/routeAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routerAnimation]
})
export class AppComponent {
  private routeContext = inject(ChildrenOutletContexts);

  public getAnimationData = () => this.routeContext.getContext('primary')?.route?.snapshot.data['animation'];
}
