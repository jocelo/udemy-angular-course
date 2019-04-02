import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from 'src/app/shared/services/shopping.list.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouting } from './app-routing.module';
import { RecipeLandingComponent } from './recipe/recipe-landing/recipe-landing.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    PageNotFoundComponent,
    RecipeLandingComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
