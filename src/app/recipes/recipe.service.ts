import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // subject is added to make the getRecipes() method updatable, coz it returns only slicec
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Dosa', 'Nice dosa', 'https://img.grouponcdn.com/deal/fndYqd3FYJpV1ip78C86/tR-1762x1057/v1/c700x420.jpg', [
      new Ingredient('First', 1),
      new Ingredient('Third', 3)
    ]),
    new Recipe('Idli', 'Very tasty idli', 'http://www.indobase.com/recipes/rec-images/idli.jpg', [
      new Ingredient('Second', 2)
    ])
  ];
  // recipeSelected = new EventEmitter<Recipe>();

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) { }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
