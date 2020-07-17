import { Component } from '@angular/core';
import { faGlobeAmericas, faPeace, faFistRaised } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ppp-ui';
  faGlobeAmericas = faGlobeAmericas;
  faPeace = faPeace;
  faFistRaised = faFistRaised

  isNavbarCollapsed = true;
}
