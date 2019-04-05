import { EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Cilantro', 1),
    new Ingredient('Papaya', 1),
    new Ingredient('Melon', 1),
    new Ingredient('Cherries', 1)
  ];
  activeIngredient: number = -1;

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

  saveIngredient(idx: number, ingredient: Ingredient) {
    this.ingredients[idx] = ingredient;
    this.ingredientChange.next(this.ingredients.slice());
  }

  selectIngredient(index: number) {
    this.activeIngredient = index;
  }

  getSelectedIngredientIndex() {
    return this.activeIngredient;
  }

  getIngredient(idx: number) {
    return this.ingredients[idx];
  }

  deleteIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.ingredientChange.next(this.ingredients.slice());
  }
}