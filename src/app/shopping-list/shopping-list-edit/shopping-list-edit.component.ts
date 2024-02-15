import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../recipes/recipe.Model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @Output() ingredietAdded=new EventEmitter<Ingredient>();
onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value;
  const ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient=new Ingredient( ingName,ingAmount,);
  this.ingredietAdded.emit(newIngredient);
}
}
