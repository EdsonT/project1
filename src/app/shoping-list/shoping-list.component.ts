import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('carrots',4)
  ];
  constructor() { }

  ngOnInit() {
  }
  addToShopingList(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }
}
