import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group(
    {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  )

  onSubmit() {
    let data = {
      'username': this.registerForm.controls.username.value || '',
      'first_name': this.registerForm.controls.firstName.value || '',
      'last_name': this.registerForm.controls.lastName.value || '',
      'password': this.registerForm.controls.password.value || '',
      'email': this.registerForm.controls.email.value || '',
    }
    this.userService.registerUser(data).subscribe(
      (data) =>
      {
        console.log(data);
        localStorage.setItem('logged_in', 'true');
        this.router.navigate(['/']);
      }
    )
  }

}
