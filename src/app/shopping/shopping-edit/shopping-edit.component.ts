import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.shopListSrv.add(newIngredient);
  }

}
