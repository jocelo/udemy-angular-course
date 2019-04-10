import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  mode = '';
  paramsObs: Subscription;
  editRecipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeSrv: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.paramsObs = this.route.params.subscribe((params: Params)=>{
      this.id = +params.id;
      this.editMode = params['id'] != null;
      this.mode = this.editMode ? 'EDIT' : 'new!!';
      this.populateForm();
    });
  }

  ngOnDestroy() {
    this.paramsObs.unsubscribe();
  }

  onFormSubmit() {
    const newRecipe = new Recipe(
      this.editRecipeForm.value.name,
      this.editRecipeForm.value.description,
      this.editRecipeForm.value.imagePath,
      this.editRecipeForm.value.ingredients
    );
    if (this.editMode) {
      this.recipeSrv.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeSrv.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  private populateForm() {
    let recipeName = '',
      recipeImageUrl = '',
      recipeDesc = '',
      recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeSrv.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imagePath;
      recipeDesc = recipe.description;
      
      if (recipe['ingredients']) {
        for(let ing of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required, Validators.min(1)])
            })
          );
        }
      }
    }

    this.editRecipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImageUrl, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  getControls() {
    return (<FormArray>this.editRecipeForm.get('ingredients')).controls;
  }

  addNewIngredient() {
    (<FormArray>this.editRecipeForm.get('ingredients')).insert(0, new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.min(1)])
    }))
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onRemoveIngredient(idx: number) {
    (<FormArray>this.editRecipeForm.get('ingredients')).removeAt(idx);
  }
}
