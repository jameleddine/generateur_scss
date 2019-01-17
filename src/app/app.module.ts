import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { CssComponent } from './css/css.component';

const RouteApp : Routes = [
  {path:'',component:CssComponent},
  {path:'route',component:RouteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouteApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
