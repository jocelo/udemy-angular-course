import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(recipeName: string, recipeDesc: string, recipeImagePath: string, ingredients: Ingredient[]) {
    this.name = recipeName;
    this.description = recipeDesc;
    this.imagePath = recipeImagePath; 
    this.ingredients = ingredients;
  }
}