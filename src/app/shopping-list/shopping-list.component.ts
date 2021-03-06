import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientsSubscription = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients
      }
    )
  }

  ngOnDestroy(): void {
      this.ingredientsSubscription.unsubscribe();
  }
}
