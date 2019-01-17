import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  title = 'generateur';
  header: string = "#ffffff";
  background: string="#ffffff";
  footer: string="#ffffff";
  sidebar: string="#ffffff";
  btn: string="#ffffff";
  constructor() { }

  ngOnInit() {
  }

}
