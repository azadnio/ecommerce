import { UserReview } from "./user-review";

export type Product = {
    id: string | number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    category: string;
    reviews: UserReview[];
}