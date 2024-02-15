import { Component, Output } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Recipe } from './recipes/recipe.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 @Output() recipe:Recipe;
  loadedFeature= '';
  onNavigate(feature:string){
this.loadedFeature=feature;
  }
}
