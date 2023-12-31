import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ResultComponent } from './result/result.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonComponent } from './buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ResultComponent,
    ButtonsComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
