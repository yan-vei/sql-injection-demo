import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecretDataComponent } from './components/secret-data/secret-data.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { LoggedInService } from './services/logged-in-service.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'secret', component: SecretDataComponent, canActivate: [LoggedInService]},
  {path: 'delete-profile', component: DeleteProfileComponent, canActivate: [LoggedInService]},
  {path: 'update-profile', component: UpdateProfileComponent, canActivate: [LoggedInService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
