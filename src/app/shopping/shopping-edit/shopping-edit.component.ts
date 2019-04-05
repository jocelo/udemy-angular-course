import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') ingNameInput: ElementRef;
  // @ViewChild('amountInput') amountRef: ElementRef;
  shoppingEditForm: FormGroup;
  subs: Subscription;
  editMode: boolean = false;
  editIndex: number = -1;
  editedItem: Ingredient;

  constructor(private shopListSrv: ShoppingListService) { }

  ngOnInit() {
    this.shoppingEditForm = new FormGroup({
      'ing_name': new FormControl(null, [Validators.required]),
      'ing_amount': new FormControl(1, [Validators.required, Validators.min(1)])
    });

    this.subs = this.shopListSrv.startedEditing.subscribe(
      (index: number)=> {
        this.editMode = true;
        this.editIndex = index;
        this.editedItem = this.shopListSrv.getIngredient(index);
        console.log('this.editedItem', this.editedItem);
        this.shoppingEditForm.setValue({
          'ing_name': this.editedItem.name,
          'ing_amount': this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onFormSubmit() {
    const newIngredient = new Ingredient(this.shoppingEditForm.get('ing_name').value, this.shoppingEditForm.get('ing_amount').value);

    if (this.editMode) {
      this.shopListSrv.saveIngredient(this.editIndex, newIngredient);
    } else {
      this.shopListSrv.add(newIngredient);
    }

    this.editMode = false;
    this.shoppingEditForm.reset({'ing_amount': 1});
    this.ingNameInput.nativeElement.focus();
  }

  onDeleteIngredient() {
    this.shopListSrv.deleteIngredient(this.editIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.shoppingEditForm.reset({'ing_amount': 1});
  }
}
