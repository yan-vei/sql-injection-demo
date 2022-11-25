import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deleteForm = this.fb.group({
    username: '',
    password: ''
  });

  onSubmit() {
    this.userService.deleteUser(this.deleteForm.controls.username.value || '', this.deleteForm.controls.password.value || '').subscribe(
      (data) =>
      {
        console.log(data);
        localStorage.setItem('logged_in', 'false');
        this.router.navigate(['/']);
      }
    )
  }

}
