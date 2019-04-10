import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeLandingComponent } from "./recipe/recipe-landing/recipe-landing.component";
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

import { RootComponent } from './root/root.component';
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const allMyRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes' },
  { path: 'recipes', component: RecipesComponent, children:
    [
      { path: '', component: RecipeLandingComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: SigninComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(allMyRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}