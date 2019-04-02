import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  index: number;
  subscriptionOnParams: Subscription;

  constructor(private recipeSrv: RecipeService, private shopSrv: ShoppingListService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipe = this.recipeSrv.getRecipe( this.route.snapshot.params.id );

    this.subscriptionOnParams = this.route.params.subscribe(
      (params: Params)=>{ 
        this.index = params.id;
        this.recipe = this.recipeSrv.getRecipe(+params.id); 
    });
  }

  ngOnDestroy() {
    this.subscriptionOnParams.unsubscribe();
  }

  addAllIng() {
    console.log( this.recipe.ingredients );
    this.shopSrv.addMultiple(this.recipe.ingredients);
  }

}
