import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { HttpClientModule } from '@angular/common/http'; //pour se connecter au json
import { FormsModule } from '@angular/forms'; //pour utiliser les formulaires;
import { ToastrModule } from 'ngx-toastr'; //pour utiliser les notifications avec le ToastrModule


@NgModule({
  declarations: [
    AppComponent,
    ChaussureComponent,
    AddChaussureComponent,
    EditChaussureComponent,
    HomeComponent,
    MenuComponent,
    ChaussureDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, //pour utiliser les formulaires
    ToastrModule.forRoot(), //pour utiliser les notifications
    HttpClientModule, //pour le back end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
