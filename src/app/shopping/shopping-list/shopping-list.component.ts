import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListSrv.get();
    this.shopListSrv.ingredientChange.subscribe((ingredientsList: Ingredient[])=>{ this.ingredients = ingredientsList; }) 
  }
}
