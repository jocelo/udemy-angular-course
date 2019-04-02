import { EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChange = new Subject();
  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Cilantro', 1)
  ];

  get() {
    return this.ingredients.slice();
  }

  add(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addMultiple(moreIng: Ingredient[]) {
    this.ingredients = this.ingredients.concat(moreIng);
    this.ingredientChange.next(this.ingredients.slice());
  }
}