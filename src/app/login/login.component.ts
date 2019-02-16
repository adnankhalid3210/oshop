import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
loginFail = false;
  ngOnInit() {
  }

  loginForm = new FormGroup ({

    name: new FormControl(''),
    password: new FormControl('')
    })
  loginUser() {
this.auth.login(this.loginForm.value).subscribe((response: any)=> {
  console.log(response);
window.localStorage.setItem('token', response)
}, error => {
this.loginFail = true;
})
  }

}
