import { EventEmitter } from '@angular/core';

import { Recipe } from "../models/recipe.model";
import { Ingredient } from '../models/ingredient.model';

export class RecipeService {
  recipeSelectedEvent = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pan de Elote', 
      'Just how to make the elote bread step by step', 
      'https://huevosanjuan.com/uploads/images/pan-de-elote-1251.jpg',
      [
        new Ingredient('Elote', 1),
        new Ingredient('Flour', 2),
        new Ingredient('Milk', 1)
      ]
    ),
    new Recipe(
      'Stuffed tomatos',
      'Tomatos filled with egg white battered with vegetables',
      'https://huevosanjuan.com/uploads/images/0019.jpg', [
        new Ingredient('Tomatos', 10),
        new Ingredient('Eggs', 3),
        new Ingredient('Carrots', 2),
        new Ingredient('Squash', 2)
      ]
    )
  ];
  recipeSelected: number = -1;
  
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipeSelected() {
    return this.recipes[this.recipeSelected];
  }
}