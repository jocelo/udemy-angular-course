import { Recipe } from "../models/recipe.model";
import { Ingredient } from '../models/ingredient.model';
import { Subject } from "rxjs";

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipeSelected() {
    return this.recipes[this.recipeSelected];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.notifyChanges();
  }

  updateRecipe(idx: number, updatedRecipe: Recipe) {
    this.recipes[idx] = updatedRecipe;
    this.notifyChanges();
  }

  deleteRecipe(idx: number) {
    this.recipes.splice(idx,1);
    this.notifyChanges();
  }

  private notifyChanges() {
    this.recipeChanged.next(this.recipes.slice());
  }
}