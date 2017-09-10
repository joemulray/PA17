import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';


const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent }];

@NgModule({
  imports: [
    BrowserModule,
    Ng2DropdownModule,
    RouterModule.forRoot(appRoutes)], 
    declarations: [AppComponent, MenuComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
