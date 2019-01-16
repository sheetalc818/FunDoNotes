import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private httpService: HttpService) { }
    model = {};
    ngOnInit() {
    }

    login() {
        console.log(this.model);
        this.httpService.postService('/user/login', this.model).subscribe(data => {
            console.log(data);
            this.router.navigate(['dash-board'])
        }, err => {
            alert("not a registered")
        })
    }

    registration() {
        this.router.navigate(['registration']);
    }
}



