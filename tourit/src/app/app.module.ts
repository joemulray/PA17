import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent }];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)], 
    declarations: [AppComponent, MenuComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
