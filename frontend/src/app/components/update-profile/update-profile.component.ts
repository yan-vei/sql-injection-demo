import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  updateForm = this.fb.group({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  });

  onSubmit() {
    let data = {
      'username': this.updateForm.controls.username.value || '',
      'first_name': this.updateForm.controls.firstName.value || '',
      'last_name': this.updateForm.controls.lastName.value || '',
      'password': this.updateForm.controls.password.value || '',
      'email': this.updateForm.controls.email.value || '',
    }
    this.userService.updateUser(data).subscribe(
      (data) =>
      {
        console.log(data);
        this.router.navigate(['/']);
      }
    )
  }

}
