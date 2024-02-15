import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.Model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})

export class RecipesComponent {
selectedRecipe:Recipe;
}

