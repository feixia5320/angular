import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aa=false;
  bb=false;
  isCollapsed=false;

  bread = ['home', 'log', 'List', 'about me']

}
