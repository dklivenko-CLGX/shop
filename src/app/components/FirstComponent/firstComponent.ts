import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './firstComponent.html',
  styleUrls: ['./firstComponent.css']
})
export class FirstComponent implements OnInit {
  name!: string;

  ngOnInit(): void {
    this.name = 'Geek Dreams';
  }
}
