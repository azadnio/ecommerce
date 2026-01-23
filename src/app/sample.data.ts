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
        ,
        reviews: [
            {
                id: "r1",
                productId: "1",
                userName: "John Smith",
                rating: 5,
                comment: "Absolutely amazing headphones! The noise cancellation is top-notch and the battery life exceeds expectations.",
                reviewDate: new Date("2024-01-15"),
                title: "Fantastic Headphones",
                userImageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                id: "r2",
                productId: "1",
                userName: "Sarah Johnson",
                rating: 4,
                comment: "Great sound quality and very comfortable for long listening sessions. Only wish the case was a bit smaller.",
                reviewDate: new Date("2024-01-10"),
                title: "Great Sound, Bulky Case",
                userImageUrl: "https://randomuser.me/api/portraits/women/3.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r3",
                productId: "2",
                userName: "Mike Anderson",
                rating: 5,
                comment: "Perfect for tracking my daily runs and workouts. GPS is accurate and battery lasts for days!",
                reviewDate: new Date("2024-01-20"),
                title: "Best Fitness Watch Ever",
                userImageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
            },
            {
                id: "r4",
                productId: "2",
                userName: "Emily Chen",
                rating: 4,
                comment: "Great features and very comfortable to wear all day. Heart rate monitor is spot on.",
                reviewDate: new Date("2024-01-18"),
                title: "Excellent Tracker",
                userImageUrl: "https://randomuser.me/api/portraits/women/7.jpg"
            },
            {
                id: "r5",
                productId: "2",
                userName: "David Lee",
                rating: 3,
                comment: "Good watch but syncing with phone can be slow sometimes. Otherwise solid product.",
                reviewDate: new Date("2024-01-12"),
                title: "Good but Could Be Better",
                userImageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
            }
        ]
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
        category: "Clothing",
        reviews: [
            {
                id: "r6",
                productId: "3",
                userName: "Lisa Martinez",
                rating: 5,
                comment: "So soft and comfortable! The fabric quality is outstanding and it's eco-friendly too.",
                reviewDate: new Date("2024-01-16"),
                title: "Love This Shirt!",
                userImageUrl: "https://randomuser.me/api/portraits/women/9.jpg"
            },
            {
                id: "r7",
                productId: "3",
                userName: "Tom Wilson",
                rating: 4,
                comment: "Great quality t-shirt. Fits well and breathes nicely. Worth the price.",
                reviewDate: new Date("2024-01-14"),
                title: "High Quality Tee",
                userImageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
            }
        ]
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
        category: "Sports & Outdoors",
        reviews: [
            {
                id: "r8",
                productId: "4",
                userName: "Rachel Green",
                rating: 5,
                comment: "Keeps my water ice cold all day at work. No leaks and easy to clean!",
                reviewDate: new Date("2024-01-21"),
                title: "Perfect Water Bottle",
                userImageUrl: "https://randomuser.me/api/portraits/women/11.jpg"
            },
            {
                id: "r9",
                productId: "4",
                userName: "James Brown",
                rating: 5,
                comment: "The insulation is incredible. Coffee stays hot for hours. Best bottle I've owned.",
                reviewDate: new Date("2024-01-19"),
                title: "Amazing Insulation",
                userImageUrl: "https://randomuser.me/api/portraits/men/12.jpg"
            },
            {
                id: "r10",
                productId: "4",
                userName: "Amanda White",
                rating: 4,
                comment: "Great bottle but a bit heavy when full. Still recommend it though!",
                reviewDate: new Date("2024-01-15"),
                title: "Heavy But Worth It",
                userImageUrl: "https://randomuser.me/api/portraits/women/13.jpg"
            }
        ]
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
        category: "Bags & Luggage",
        reviews: [
            {
                id: "r11",
                productId: "5",
                userName: "Chris Taylor",
                rating: 5,
                comment: "Perfect for my photography trips. Holds all my gear safely and comfortably.",
                reviewDate: new Date("2024-01-17"),
                title: "Photographer's Dream",
                userImageUrl: "https://randomuser.me/api/portraits/men/14.jpg"
            },
            {
                id: "r12",
                productId: "5",
                userName: "Nicole Davis",
                rating: 4,
                comment: "Well-made backpack with good padding. Wish it had one more exterior pocket.",
                reviewDate: new Date("2024-01-13"),
                title: "Great Quality",
                userImageUrl: "https://randomuser.me/api/portraits/women/15.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r13",
                productId: "6",
                userName: "Karen Miller",
                rating: 5,
                comment: "Beautiful mugs that look great in my kitchen. Perfect size and very comfortable to hold.",
                reviewDate: new Date("2024-01-20"),
                title: "Lovely Mugs",
                userImageUrl: "https://randomuser.me/api/portraits/women/16.jpg"
            },
            {
                id: "r14",
                productId: "6",
                userName: "Robert Garcia",
                rating: 4,
                comment: "Nice quality mugs at a good price. They're microwave and dishwasher safe too!",
                reviewDate: new Date("2024-01-11"),
                title: "Good Value",
                userImageUrl: "https://randomuser.me/api/portraits/men/17.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r15",
                productId: "7",
                userName: "Steven Moore",
                rating: 4,
                comment: "Works well and charges my phone quickly. Simple and effective.",
                reviewDate: new Date("2024-01-18"),
                title: "Does the Job",
                userImageUrl: "https://randomuser.me/api/portraits/men/18.jpg"
            },
            {
                id: "r16",
                productId: "7",
                userName: "Jennifer Lopez",
                rating: 4,
                comment: "Great charger for the price. Just place phone and it starts charging.",
                reviewDate: new Date("2024-01-09"),
                title: "Convenient Charging",
                userImageUrl: "https://randomuser.me/api/portraits/women/19.jpg"
            }
        ]
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
        category: "Sports & Outdoors",
        reviews: [
            {
                id: "r17",
                productId: "8",
                userName: "Sophia Martinez",
                rating: 5,
                comment: "Best yoga mat I've ever used! Non-slip surface is perfect and cushioning is excellent.",
                reviewDate: new Date("2024-01-22"),
                title: "Perfect for Yoga",
                userImageUrl: "https://randomuser.me/api/portraits/women/20.jpg"
            },
            {
                id: "r18",
                productId: "8",
                userName: "Daniel Kim",
                rating: 5,
                comment: "Amazing quality mat. The alignment markers really help with my poses.",
                reviewDate: new Date("2024-01-16"),
                title: "Outstanding Quality",
                userImageUrl: "https://randomuser.me/api/portraits/men/21.jpg"
            },
            {
                id: "r19",
                productId: "8",
                userName: "Olivia Brown",
                rating: 4,
                comment: "Great mat overall. Just needs a few uses to fully break in.",
                reviewDate: new Date("2024-01-10"),
                title: "Great After Break-in",
                userImageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r20",
                productId: "9",
                userName: "Alex Thompson",
                rating: 5,
                comment: "Incredible typing experience! The Cherry MX switches feel amazing and RGB looks stunning.",
                reviewDate: new Date("2024-01-19"),
                title: "Gaming and Typing Perfect",
                userImageUrl: "https://randomuser.me/api/portraits/men/23.jpg"
            },
            {
                id: "r21",
                productId: "9",
                userName: "Emma Wilson",
                rating: 4,
                comment: "Great keyboard for programming. Loud but that's what I wanted. RGB customization is fun.",
                reviewDate: new Date("2024-01-14"),
                title: "Programmer's Choice",
                userImageUrl: "https://randomuser.me/api/portraits/women/24.jpg"
            }
        ]
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
        category: "Footwear",
        reviews: [
            {
                id: "r22",
                productId: "10",
                userName: "Marcus Johnson",
                rating: 5,
                comment: "Best running shoes I've owned! Lightweight and the cushioning is perfect for long runs.",
                reviewDate: new Date("2024-01-21"),
                title: "Runner's Dream",
                userImageUrl: "https://randomuser.me/api/portraits/men/25.jpg"
            },
            {
                id: "r23",
                productId: "10",
                userName: "Jessica Taylor",
                rating: 5,
                comment: "So comfortable! No blisters even on my first long run. Highly recommend.",
                reviewDate: new Date("2024-01-17"),
                title: "Comfortable from Day One",
                userImageUrl: "https://randomuser.me/api/portraits/women/26.jpg"
            },
            {
                id: "r24",
                productId: "10",
                userName: "Ryan Clark",
                rating: 4,
                comment: "Great shoes with excellent support. Run true to size.",
                reviewDate: new Date("2024-01-12"),
                title: "Excellent Support",
                userImageUrl: "https://randomuser.me/api/portraits/men/27.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r25",
                productId: "11",
                userName: "Brandon Lee",
                rating: 5,
                comment: "Amazing phone! Camera quality is outstanding and 5G is super fast. Worth every penny.",
                reviewDate: new Date("2024-01-23"),
                title: "Flagship Excellence",
                userImageUrl: "https://randomuser.me/api/portraits/men/28.jpg"
            },
            {
                id: "r26",
                productId: "11",
                userName: "Michelle Davis",
                rating: 5,
                comment: "Best phone I've ever had. Battery lasts all day even with heavy use.",
                reviewDate: new Date("2024-01-20"),
                title: "Battery Life is Incredible",
                userImageUrl: "https://randomuser.me/api/portraits/women/29.jpg"
            },
            {
                id: "r27",
                productId: "11",
                userName: "Kevin White",
                rating: 4,
                comment: "Excellent phone but pricey. Camera is professional grade though.",
                reviewDate: new Date("2024-01-15"),
                title: "Premium but Expensive",
                userImageUrl: "https://randomuser.me/api/portraits/men/30.jpg"
            }
        ]
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
        category: "Bags & Luggage",
        reviews: [
            {
                id: "r28",
                productId: "12",
                userName: "Angela Robinson",
                rating: 4,
                comment: "Very practical backpack for work. USB port is super convenient for charging on the go.",
                reviewDate: new Date("2024-01-18"),
                title: "Great for Commuting",
                userImageUrl: "https://randomuser.me/api/portraits/women/31.jpg"
            },
            {
                id: "r29",
                productId: "12",
                userName: "Patrick Harris",
                rating: 5,
                comment: "Perfect size for my laptop and work essentials. Well-organized compartments.",
                reviewDate: new Date("2024-01-13"),
                title: "Well-Organized",
                userImageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r30",
                productId: "13",
                userName: "Rebecca Martinez",
                rating: 5,
                comment: "Love this air fryer! Food comes out crispy and delicious with minimal oil.",
                reviewDate: new Date("2024-01-22"),
                title: "Healthy and Delicious",
                userImageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
                id: "r31",
                productId: "13",
                userName: "Timothy Green",
                rating: 4,
                comment: "Great air fryer with lots of presets. Easy to use and clean.",
                reviewDate: new Date("2024-01-16"),
                title: "Easy to Use",
                userImageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
            },
            {
                id: "r32",
                productId: "13",
                userName: "Samantha Baker",
                rating: 5,
                comment: "Best kitchen appliance I've bought! XL size is perfect for family meals.",
                reviewDate: new Date("2024-01-11"),
                title: "Family Size Perfect",
                userImageUrl: "https://randomuser.me/api/portraits/women/35.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r33",
                productId: "14",
                userName: "Tyler Scott",
                rating: 5,
                comment: "Perfect for competitive gaming. Precision is spot-on and RGB looks amazing!",
                reviewDate: new Date("2024-01-19"),
                title: "Gamer's Best Friend",
                userImageUrl: "https://randomuser.me/api/portraits/men/36.jpg"
            },
            {
                id: "r34",
                productId: "14",
                userName: "Ashley Turner",
                rating: 4,
                comment: "Great mouse with good customization options. Comfortable for long gaming sessions.",
                reviewDate: new Date("2024-01-14"),
                title: "Comfortable and Precise",
                userImageUrl: "https://randomuser.me/api/portraits/women/37.jpg"
            }
        ]
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
        category: "Clothing",
        reviews: [
            {
                id: "r35",
                productId: "15",
                userName: "Hannah Adams",
                rating: 5,
                comment: "Most comfortable yoga pants ever! They stay in place and the fabric is so soft.",
                reviewDate: new Date("2024-01-21"),
                title: "Perfect Fit",
                userImageUrl: "https://randomuser.me/api/portraits/women/38.jpg"
            },
            {
                id: "r36",
                productId: "15",
                userName: "Victoria Collins",
                rating: 5,
                comment: "Love these pants! Great for yoga and everyday wear. Not see-through at all.",
                reviewDate: new Date("2024-01-17"),
                title: "Versatile and Comfortable",
                userImageUrl: "https://randomuser.me/api/portraits/women/39.jpg"
            },
            {
                id: "r37",
                productId: "15",
                userName: "Grace Phillips",
                rating: 4,
                comment: "Great quality pants. High waist is flattering and they're squat-proof.",
                reviewDate: new Date("2024-01-10"),
                title: "High Quality",
                userImageUrl: "https://randomuser.me/api/portraits/women/40.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r38",
                productId: "16",
                userName: "Matthew Cooper",
                rating: 5,
                comment: "Powerful blender that crushes ice effortlessly. Smoothies come out perfectly smooth.",
                reviewDate: new Date("2024-01-20"),
                title: "Powerful Beast",
                userImageUrl: "https://randomuser.me/api/portraits/men/41.jpg"
            },
            {
                id: "r39",
                productId: "16",
                userName: "Laura Evans",
                rating: 4,
                comment: "Great blender for the price. A bit loud but very effective.",
                reviewDate: new Date("2024-01-15"),
                title: "Effective but Loud",
                userImageUrl: "https://randomuser.me/api/portraits/women/42.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r40",
                productId: "17",
                userName: "Nathan Bell",
                rating: 5,
                comment: "Sound quality is amazing! Noise cancellation works great on flights.",
                reviewDate: new Date("2024-01-22"),
                title: "Excellent Sound Quality",
                userImageUrl: "https://randomuser.me/api/portraits/men/43.jpg"
            },
            {
                id: "r41",
                productId: "17",
                userName: "Catherine Reed",
                rating: 4,
                comment: "Great earbuds with good battery life. Fit comfortably in my ears.",
                reviewDate: new Date("2024-01-18"),
                title: "Comfortable Fit",
                userImageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
                id: "r42",
                productId: "17",
                userName: "Joshua Morgan",
                rating: 4,
                comment: "Really solid earbuds. ANC is good but not the best I've tried.",
                reviewDate: new Date("2024-01-13"),
                title: "Solid Choice",
                userImageUrl: "https://randomuser.me/api/portraits/men/45.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r43",
                productId: "18",
                userName: "Diana Foster",
                rating: 4,
                comment: "Nice lamp with good light adjustment options. Perfect for reading and working.",
                reviewDate: new Date("2024-01-19"),
                title: "Good for Reading",
                userImageUrl: "https://randomuser.me/api/portraits/women/46.jpg"
            },
            {
                id: "r44",
                productId: "18",
                userName: "Andrew Price",
                rating: 4,
                comment: "Adjustable brightness is really useful. Sleek design fits well on my desk.",
                reviewDate: new Date("2024-01-11"),
                title: "Sleek and Functional",
                userImageUrl: "https://randomuser.me/api/portraits/men/47.jpg"
            }
        ]
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
        category: "Clothing",
        reviews: [
            {
                id: "r45",
                productId: "19",
                userName: "William Hughes",
                rating: 5,
                comment: "Incredibly warm and waterproof! Perfect for harsh winter conditions.",
                reviewDate: new Date("2024-01-23"),
                title: "Keeps Me Warm",
                userImageUrl: "https://randomuser.me/api/portraits/men/48.jpg"
            },
            {
                id: "r46",
                productId: "19",
                userName: "Megan Russell",
                rating: 5,
                comment: "Best winter jacket I've owned. Quality is top-notch and has plenty of pockets.",
                reviewDate: new Date("2024-01-20"),
                title: "Top Quality",
                userImageUrl: "https://randomuser.me/api/portraits/women/49.jpg"
            },
            {
                id: "r47",
                productId: "19",
                userName: "Peter Griffin",
                rating: 4,
                comment: "Very warm jacket. A bit bulky but that's expected for winter gear.",
                reviewDate: new Date("2024-01-16"),
                title: "Warm but Bulky",
                userImageUrl: "https://randomuser.me/api/portraits/men/50.jpg"
            }
        ]
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
        category: "Sports & Outdoors",
        reviews: [
            {
                id: "r48",
                productId: "20",
                userName: "Brian Powell",
                rating: 5,
                comment: "Great for home gym! Easy to adjust weights and very durable.",
                reviewDate: new Date("2024-01-21"),
                title: "Home Gym Essential",
                userImageUrl: "https://randomuser.me/api/portraits/men/51.jpg"
            },
            {
                id: "r49",
                productId: "20",
                userName: "Kelly Sanders",
                rating: 4,
                comment: "Solid dumbbells with good weight range. Quick adjustment mechanism works well.",
                reviewDate: new Date("2024-01-17"),
                title: "Versatile Set",
                userImageUrl: "https://randomuser.me/api/portraits/women/52.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r50",
                productId: "21",
                userName: "Sharon Barnes",
                rating: 5,
                comment: "Best coffee maker ever! Built-in grinder is a game changer. Coffee tastes amazing!",
                reviewDate: new Date("2024-01-22"),
                title: "Coffee Perfection",
                userImageUrl: "https://randomuser.me/api/portraits/women/53.jpg"
            },
            {
                id: "r51",
                productId: "21",
                userName: "Dennis Coleman",
                rating: 5,
                comment: "Thermal carafe keeps coffee hot for hours. Programmable feature is very convenient.",
                reviewDate: new Date("2024-01-19"),
                title: "Perfect Morning Brew",
                userImageUrl: "https://randomuser.me/api/portraits/men/54.jpg"
            },
            {
                id: "r52",
                productId: "21",
                userName: "Heather Murphy",
                rating: 4,
                comment: "Great coffee maker. Grinder is a bit loud but coffee quality makes up for it.",
                reviewDate: new Date("2024-01-14"),
                title: "Excellent Quality",
                userImageUrl: "https://randomuser.me/api/portraits/women/55.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r53",
                productId: "22",
                userName: "Frank Patterson",
                rating: 5,
                comment: "Stunning picture quality! 4K HDR looks incredible. Best value for a 55-inch TV.",
                reviewDate: new Date("2024-01-23"),
                title: "Amazing Picture Quality",
                userImageUrl: "https://randomuser.me/api/portraits/men/56.jpg"
            },
            {
                id: "r54",
                productId: "22",
                userName: "Tiffany Ross",
                rating: 5,
                comment: "Love this TV! Smart features work seamlessly and setup was easy.",
                reviewDate: new Date("2024-01-18"),
                title: "Great Smart TV",
                userImageUrl: "https://randomuser.me/api/portraits/women/57.jpg"
            },
            {
                id: "r55",
                productId: "22",
                userName: "Gary Henderson",
                rating: 4,
                comment: "Excellent TV for the price. Picture is sharp and colors are vibrant.",
                reviewDate: new Date("2024-01-12"),
                title: "Great Value",
                userImageUrl: "https://randomuser.me/api/portraits/men/58.jpg"
            }
        ]
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
        category: "Clothing",
        reviews: [
            {
                id: "r56",
                productId: "23",
                userName: "Craig Watson",
                rating: 4,
                comment: "Comfortable shorts for running. Moisture-wicking works well on long runs.",
                reviewDate: new Date("2024-01-20"),
                title: "Good Running Shorts",
                userImageUrl: "https://randomuser.me/api/portraits/men/59.jpg"
            },
            {
                id: "r57",
                productId: "23",
                userName: "Paula Brooks",
                rating: 4,
                comment: "Lightweight and comfortable. Built-in liner is a nice touch.",
                reviewDate: new Date("2024-01-15"),
                title: "Lightweight and Comfy",
                userImageUrl: "https://randomuser.me/api/portraits/women/60.jpg"
            }
        ]
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
        category: "Electronics",
        reviews: [
            {
                id: "r58",
                productId: "24",
                userName: "Roger Kelly",
                rating: 5,
                comment: "Amazing sound quality for such a portable speaker! Waterproof feature is great for pool parties.",
                reviewDate: new Date("2024-01-21"),
                title: "Party Essential",
                userImageUrl: "https://randomuser.me/api/portraits/men/61.jpg"
            },
            {
                id: "r59",
                productId: "24",
                userName: "Christine Perry",
                rating: 4,
                comment: "Great portable speaker with impressive battery life. 360-degree sound is really cool.",
                reviewDate: new Date("2024-01-16"),
                title: "Impressive Sound",
                userImageUrl: "https://randomuser.me/api/portraits/women/62.jpg"
            },
            {
                id: "r60",
                productId: "24",
                userName: "Jerry Howard",
                rating: 4,
                comment: "Good speaker for outdoor use. Battery lasts as advertised.",
                reviewDate: new Date("2024-01-11"),
                title: "Great for Outdoors",
                userImageUrl: "https://randomuser.me/api/portraits/men/63.jpg"
            }
        ]
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
        category: "Home & Kitchen",
        reviews: [
            {
                id: "r61",
                productId: "25",
                userName: "Janet Cox",
                rating: 5,
                comment: "Excellent cookware set! Non-stick coating is fantastic and easy to clean.",
                reviewDate: new Date("2024-01-22"),
                title: "Best Cookware Set",
                userImageUrl: "https://randomuser.me/api/portraits/women/64.jpg"
            },
            {
                id: "r62",
                productId: "25",
                userName: "Keith Richardson",
                rating: 5,
                comment: "High quality pots and pans. Heats evenly and the non-stick works perfectly.",
                reviewDate: new Date("2024-01-18"),
                title: "High Quality Set",
                userImageUrl: "https://randomuser.me/api/portraits/men/65.jpg"
            },
            {
                id: "r63",
                productId: "25",
                userName: "Deborah Simmons",
                rating: 4,
                comment: "Great value for a 10-piece set. Everything I need for my kitchen.",
                reviewDate: new Date("2024-01-13"),
                title: "Complete Set",
                userImageUrl: "https://randomuser.me/api/portraits/women/66.jpg"
            }
        ]
    }
];