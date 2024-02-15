import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.Model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
@Input() recipe:Recipe;
}
