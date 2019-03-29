import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeSrv: RecipeService, private shopSrv: ShoppingListService) { }

  ngOnInit() {}

  addAllIng() {
    console.log( this.recipe.ingredients );
    this.shopSrv.addMultiple(this.recipe.ingredients);
  }

}
