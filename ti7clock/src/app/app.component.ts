import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
  ) {}
  title = 'ti7clock';
  now: Date;


  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date();
    });
  }

}
