import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './firstComponent.html',
  styleUrls: ['./firstComponent.css']
})
export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  category!: Array<CategoriesEnum>;
  isAvailable!: boolean;

  ngOnInit(): void {
    this.name = 'Geek Dreams';
    this.description = 'Shop with sweets';
    this.price = 100;
    this.category = [CategoriesEnum.CHOCOLATES, CategoriesEnum.WAFFLES];
    this.isAvailable = true;
  }
}

enum CategoriesEnum {
  CHOCOLATES = "Chocolates",
  CANDIES = "Candies",
  MARSHMALLOW = "Marshmallow",
  WAFFLES = "Waffles"
}
