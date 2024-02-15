import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  onIngredientAdded(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  }
  ingredients:Ingredient[]=[
    new Ingredient("tomato", "5")
  ]
}
