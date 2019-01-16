import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  registration() {
    this.router.navigate([' ']);
  }
  cancel() {
    this.router.navigate([' ']);
  }
}
