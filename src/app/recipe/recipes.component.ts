import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(){
  }
}