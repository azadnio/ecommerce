import { Product } from "./models/product";

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviewCount: 1287,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "2",
        name: "Smart Fitness Watch",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and waterproof design for active lifestyles.",
        price: 199.99,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviewCount: 892,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "3",
        name: "Organic Cotton T-Shirt",
        description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors and sizes.",
        price: 24.99,
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviewCount: 456,
        inStock: false,
        category: "Clothing"
    },
    {
        id: "4",
        name: "Stainless Steel Water Bottle",
        description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
        price: 34.99,
        imageUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviewCount: 1203,
        inStock: true,
        category: "Sports & Outdoors"
    },
    {
        id: "5",
        name: "Professional Camera Backpack",
        description: "Durable waterproof backpack with customizable compartments for camera gear and laptop.",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviewCount: 567,
        inStock: true,
        category: "Bags & Luggage"
    },
    {
        id: "6",
        name: "Ceramic Coffee Mug Set",
        description: "Set of 4 elegant ceramic mugs with ergonomic handles and modern minimalist design.",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviewCount: 234,
        inStock: true,
        category: "Home & Kitchen"
    },
    {
        id: "7",
        name: "Wireless Phone Charger",
        description: "Fast-charging wireless pad compatible with all Qi-enabled smartphones and devices.",
        price: 19.99,
        imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.2,
        reviewCount: 1789,
        inStock: false,
        category: "Electronics"
    },
    {
        id: "8",
        name: "Premium Yoga Mat",
        description: "Eco-friendly non-slip yoga mat with superior cushioning and alignment markers for practice.",
        price: 45.99,
        imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.9,
        reviewCount: 678,
        inStock: true,
        category: "Sports & Outdoors"
    },
    {
        id: "9",
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with cherry MX switches and programmable keys.",
        price: 79.99,
        imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviewCount: 945,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "10",
        name: "Running Shoes",
        description: "Lightweight running shoes with breathable mesh and superior cushioning for maximum comfort.",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviewCount: 1123,
        inStock: true,
        category: "Footwear"
    },
    {
        id: "11",
        name: "Smartphone Pro Max",
        description: "Latest flagship smartphone with triple camera system, 5G connectivity, and all-day battery life.",
        price: 999.99,
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviewCount: 2341,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "12",
        name: "Laptop Backpack",
        description: "Water-resistant backpack with dedicated laptop compartment and USB charging port.",
        price: 49.99,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviewCount: 876,
        inStock: true,
        category: "Bags & Luggage"
    },
    {
        id: "13",
        name: "Air Fryer XL",
        description: "Large capacity air fryer with digital display and 8 cooking presets for healthy frying.",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1632236250887-5da29d63bc2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviewCount: 1567,
        inStock: true,
        category: "Home & Kitchen"
    },
    {
        id: "14",
        name: "Gaming Mouse",
        description: "High-precision gaming mouse with RGB lighting and customizable buttons.",
        price: 59.99,
        imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviewCount: 723,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "15",
        name: "Yoga Pants",
        description: "High-waisted yoga pants with four-way stretch and moisture-wicking fabric.",
        price: 39.99,
        imageUrl: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviewCount: 1894,
        inStock: true,
        category: "Clothing"
    },
    {
        id: "16",
        name: "Blender Pro",
        description: "High-speed blender with 1500W motor for smoothies, soups, and food processing.",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviewCount: 945,
        inStock: false,
        category: "Home & Kitchen"
    },
    {
        id: "17",
        name: "Wireless Earbuds",
        description: "True wireless earbuds with active noise cancellation and 20-hour battery case.",
        price: 179.99,
        imageUrl: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviewCount: 2134,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "18",
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness and color temperature settings.",
        price: 34.99,
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.2,
        reviewCount: 567,
        inStock: true,
        category: "Home & Kitchen"
    },
    {
        id: "19",
        name: "Winter Jacket",
        description: "Waterproof winter jacket with thermal insulation and multiple pockets.",
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviewCount: 678,
        inStock: true,
        category: "Clothing"
    },
    {
        id: "20",
        name: "Fitness Dumbbell Set",
        description: "Adjustable dumbbell set with multiple weight options for home workouts.",
        price: 199.99,
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviewCount: 432,
        inStock: true,
        category: "Sports & Outdoors"
    },
    {
        id: "21",
        name: "Coffee Maker",
        description: "Programmable coffee maker with thermal carafe and built-in grinder.",
        price: 119.99,
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviewCount: 1563,
        inStock: true,
        category: "Home & Kitchen"
    },
    {
        id: "22",
        name: "Smart TV 55-inch",
        description: "4K Ultra HD Smart TV with HDR and built-in streaming apps.",
        price: 499.99,
        imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviewCount: 2891,
        inStock: false,
        category: "Electronics"
    },
    {
        id: "23",
        name: "Running Shorts",
        description: "Lightweight running shorts with built-in liner and moisture-wicking fabric.",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviewCount: 834,
        inStock: true,
        category: "Clothing"
    },
    {
        id: "24",
        name: "Portable Speaker",
        description: "Waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.",
        price: 79.99,
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviewCount: 1123,
        inStock: true,
        category: "Electronics"
    },
    {
        id: "25",
        name: "Cookware Set",
        description: "10-piece non-stick cookware set with dishwasher-safe pots and pans.",
        price: 159.99,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviewCount: 745,
        inStock: true,
        category: "Home & Kitchen"
    }
];