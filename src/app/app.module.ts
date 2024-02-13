import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { CounterModule } from "./counter/counter.module";

@NgModule({
  declarations: [
    HeroComponent

  ],
  imports: [
    BrowserModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
