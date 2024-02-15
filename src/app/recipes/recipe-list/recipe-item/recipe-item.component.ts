import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.Model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // Assign Recipe instance, not the Recipe class
  @Output() recipeSelected=new EventEmitter<string>();
onSelected(){
this.recipeSelected.emit();
}
}
