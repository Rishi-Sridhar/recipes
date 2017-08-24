import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Ye test hai re bhidu', 'http://indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa.jpg', [
      new Ingredient('First', 1),
      new Ingredient('Third', 3)
    ]),
    new Recipe('Doosra Recipe', 'Ajun ek test', 'http://indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa.jpg', [
      new Ingredient('Second', 2)
    ])
  ];
 // recipeSelected = new EventEmitter<Recipe>();

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

}
