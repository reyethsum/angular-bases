import { appConfig } from './app.config';
import { AppModule } from './app.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: './app.component.html',
  standalone: true,
})
export class AppComponent {
  public title: string = 'App de Angular, llamando el titulo';

}
