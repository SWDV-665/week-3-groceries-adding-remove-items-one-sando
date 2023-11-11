import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonLabel, IonItem],
})
export class AboutPage {
  constructor() {}
}
