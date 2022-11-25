import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecretDataComponent } from './components/secret-data/secret-data.component';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedInService } from './services/logged-in-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SecretDataComponent,
    DeleteProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
