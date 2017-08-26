import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private slService: ShoppingListService,
    private auth: AuthService) { }

  storeRecipes() {
    const token = this.auth.getToken();
    return this.http.put('https://ng4-recipebook.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  storeShoppingList() {
    const token = this.auth.getToken();
    return this.http.put('https://ng4-recipebook.firebaseio.com/shopping-list.json?auth=' + token, this.slService.getIngredients());
  }

  getRecipes() {
    const token = this.auth.getToken();
    this.http.get('https://ng4-recipebook.firebaseio.com/recipes.json?auth=' + token)
      .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return recipes;
      }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
      );
  }

  getShoppingList() {
    const token = this.auth.getToken();
    this.http.get('https://ng4-recipebook.firebaseio.com/shopping-list.json?auth=' + token)
      .subscribe(
      (response: Response) => {
        const ingredients: Ingredient[] = response.json();
        this.slService.setIngredients(ingredients);
      }
      );
  }
}
