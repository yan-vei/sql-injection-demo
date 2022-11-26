import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    username: '',
    password: ''
  });

  onSubmit() {
    this.userService.loginUser(this.loginForm.controls.username.value || '', this.loginForm.controls.password.value || '').subscribe(
      (data) =>
      {
        console.log(data);
        localStorage.setItem('logged_in', 'true');
        this.router.navigate(['/update-profile']);
      }
    )
  }
}
