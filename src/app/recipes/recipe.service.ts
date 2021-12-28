import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe("Chicken curry",
        "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain, and the Caribbean.",
        "https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-1.jpg?fit=1200,9999"
        ,[
            new Ingredient('Chicken', 1),
            new Ingredient('Curry', 1),

        ]),
        new Recipe("Chicken tikka", 
        "Chicken tikka is a chicken dish originating in the Indian subcontinent; the dish is popular in India, Bangladesh and Pakistan.",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tikka-long-1581347468.jpg?crop=1.00xw:0.716xh;0,0.151xh&resize=480:*",
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Rice', 1),
        ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}