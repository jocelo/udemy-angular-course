import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RootComponent } from './root/root.component';

const allMyRoutes = [
  { path: '', component: RootComponent },
  { path: 'recipes', component: RecipesComponent, children:
    [{ path: ':id', component: RecipeDetailComponent }]
  },
  { path: 'shopping', component: ShoppingListComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(allMyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {

}