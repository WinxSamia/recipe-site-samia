import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.Model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
@Output() recipeWasSelected=new EventEmitter<string>();
selectedRecipe:Recipe;
  recipes:Recipe[]=[
    new Recipe('Chicken steak', 'Spicy chilli', 'https://pinchofnom.com/wp-content/uploads/2017/05/BBQ-Chicken-Steaks_12-1.jpg'),
    new Recipe('Kala bhuna', 'extra spices', 'https://www.bongcravings.com/wp-content/uploads/2019/10/IMG_2596-768x1024.jpg')];
    onRecipeSelected(recipe){
     this.recipeWasSelected.emit(recipe);
}
}
