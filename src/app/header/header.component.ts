import { Component } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { DataStorageService } from '../shared/services/data.storage.service';

import { Response } from '@angular/http';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private recipeSrv: RecipeService,
    private persistSrv: DataStorageService,
    private authSrv: AuthService ) { }

  onSave() {
    const allRecipes = this.recipeSrv.getRecipes();
    console.log( '>', allRecipes );
    this.persistSrv.saveRecipe(allRecipes).subscribe(
      (response: Response) => { console.log('SAVED RECIPES> ', response); }
    );
  }

  onGet() {
    this.persistSrv.getRecipes().subscribe(
      (response: Response) => { 
        console.log('these are the recipes from the server:', response.json());
        this.recipeSrv.setRecipes(response.json());
      }
    )
  }

  onLogOff() {
    this.authSrv.logoutUser();

    console.log('I will log of');
  }

  // Not needed due implementation of routers 
  /*
  onSelect(url: string) {
    this.featureSelected.emit(url);
  }
  */

}
