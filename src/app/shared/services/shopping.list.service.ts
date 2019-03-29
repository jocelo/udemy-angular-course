import { EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Cilantro', 1)
  ];

  get() {
    return this.ingredients.slice();
  }

  add(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

  addMultiple(moreIng: Ingredient[]) {
    this.ingredients = this.ingredients.concat(moreIng);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}