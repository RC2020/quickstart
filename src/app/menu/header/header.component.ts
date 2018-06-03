import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navMenu = 'Menu';
  navCoupan ='Coupan';
  navLogin ='Login';
  navSign ='SignUp';
  navLang='English';

  constructor() { }

  ngOnInit() {
  }

}
