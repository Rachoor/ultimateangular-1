import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//refers to index.html
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }} 
    </div>
  `
})
export class AppComponent {

  title: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }

}
