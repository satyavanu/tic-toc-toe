import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardGameComponent } from './components/board-game/board-game.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
