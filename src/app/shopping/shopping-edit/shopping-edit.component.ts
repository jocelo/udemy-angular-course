import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameRef: ElementRef;
  // @ViewChild('amountInput') amountRef: ElementRef;
  shoppingEditForm: FormGroup;

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
    this.shoppingEditForm = new FormGroup({
      'ing_name': new FormControl(null, [Validators.required]),
      'ing_amount': new FormControl(1, [Validators.required, Validators.min(1)])
    });
  }

  onFormSubmit() {
    console.log('form:', this.shoppingEditForm);
    console.log('')
    // const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    // this.shopListSrv.add(newIngredient);
  }

}
