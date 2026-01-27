import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryApi {
    private categories = ['all', 'Electronics', 'Clothing', 'Sports & Outdoors', 'Bags & Luggage', 'Home & Kitchen', 'Footwear'];

    getCategories(): string[] {
        return this.categories;
    }
}