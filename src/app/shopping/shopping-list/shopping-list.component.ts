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
  selectedItem: number;

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListSrv.get();
    this.ingChangeObs = this.shopListSrv.ingredientChange.subscribe((ingredientsList: Ingredient[])=>{ 
      this.ingredients = ingredientsList; 
      this.selectedItem = -1;
    }) 
    this.selectedItem = -1;
  }

  ngOnDestroy() {
    this.ingChangeObs.unsubscribe();
  }

  onAddedItem(index: number) {
    this.selectedItem = index;
    this.shopListSrv.startedEditing.next(index);
    // this.shopListSrv.selectIngredient(index);
  }
}
