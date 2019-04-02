import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingChangeObs: Subscription;

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListSrv.get();
    this.ingChangeObs = this.shopListSrv.ingredientChange.subscribe((ingredientsList: Ingredient[])=>{ this.ingredients = ingredientsList; }) 
  }

  ngOnDestroy() {
    this.ingChangeObs.unsubscribe();
  }
}
