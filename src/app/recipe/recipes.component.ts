import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeSrv: RecipeService) {}

  ngOnInit(){
    this.recipeSrv.recipeSelectedEvent.subscribe(
      (recipe: Recipe)=>{
        this.recipeSelected = recipe;
      }
    );
  }
}