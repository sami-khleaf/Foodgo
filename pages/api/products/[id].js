const products = [
  {
    "id": 1,
    "name": "Cheeseburger Wendy's Burger",
    "description": "Classic fast food burger with fresh ground beef, melted cheese, crispy lettuce, ripe tomatoes, pickles, and our signature sauce on a toasted sesame seed bun.",
    "price": 8.24,
    "rating": 4.5,
    "reviews": 285,
    "image": "/images/product1.png",
    "category": "Burgers",
    "ingredients": ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Pickles", "Sesame Bun"],
    "calories": 540,
    "preparationTime": "8-12 minutes",
    "spicyLevel": 1,
    "vegetarian": false,
    "available": true,
    "nutritionalInfo": {
      "protein": "28g",
      "carbs": "45g",
      "fat": "25g",
      "fiber": "3g",
      "sodium": "980mg"
    },
    "allergens": ["Gluten", "Dairy", "Soy"],
    "restaurant": {
      "name": "Burger Palace",
      "rating": 4.2,
      "deliveryTime": "25-35 min",
      "deliveryFee": 2.99
    }
  },
  {
    "id": 2,
    "name": "Hamburger Veggie Burger",
    "description": "Enjoy our delicious Hamburger Veggie Burger made with a plant-based patty, fresh vegetables, and served on a whole wheat bun. Perfect for vegetarians!",
    "price": 9.99,
    "rating": 4.6,
    "reviews": 312,
    "image": "/images/product2.png",
    "category": "Burgers",
    "ingredients": ["Plant-Based Patty", "Lettuce", "Tomato", "Onion", "Avocado", "Whole Wheat Bun"],
    "calories": 420,
    "preparationTime": "6-10 minutes",
    "spicyLevel": 0,
    "vegetarian": true,
    "available": true,
    "nutritionalInfo": {
      "protein": "22g",
      "carbs": "38g",
      "fat": "18g",
      "fiber": "8g",
      "sodium": "650mg"
    },
    "allergens": ["Gluten"],
    "restaurant": {
      "name": "Green Eats",
      "rating": 4.5,
      "deliveryTime": "20-30 min",
      "deliveryFee": 1.99
    }
  },
  {
    "id": 3,
    "name": "Margherita Pizza",
    "description": "Traditional Italian pizza with fresh mozzarella, tomato sauce, and basil leaves on a thin crust base.",
    "price": 12.50,
    "rating": 4.7,
    "reviews": 456,
    "image": "/images/product3.png",
    "category": "Pizza",
    "ingredients": ["Mozzarella", "Tomato Sauce", "Fresh Basil", "Thin Crust"],
    "calories": 650,
    "preparationTime": "15-20 minutes",
    "spicyLevel": 0,
    "vegetarian": true,
    "available": true,
    "nutritionalInfo": {
      "protein": "25g",
      "carbs": "75g",
      "fat": "22g",
      "fiber": "4g",
      "sodium": "1200mg"
    },
    "allergens": ["Gluten", "Dairy"],
    "restaurant": {
      "name": "Mama's Pizza",
      "rating": 4.6,
      "deliveryTime": "30-40 min",
      "deliveryFee": 3.49
    }
  },
  {
    "id": 4,
    "name": "Grilled Chicken Salad",
    "description": "Fresh mixed greens topped with grilled chicken breast, cherry tomatoes, cucumber, and our house vinaigrette.",
    "price": 11.75,
    "rating": 4.4,
    "reviews": 198,
    "image": "/images/product4.png",
    "category": "Salads",
    "ingredients": ["Grilled Chicken", "Mixed Greens", "Cherry Tomatoes", "Cucumber", "Vinaigrette"],
    "calories": 320,
    "preparationTime": "5-8 minutes",
    "spicyLevel": 0,
    "vegetarian": false,
    "available": true,
    "nutritionalInfo": {
      "protein": "32g",
      "carbs": "12g",
      "fat": "15g",
      "fiber": "6g",
      "sodium": "480mg"
    },
    "allergens": [],
    "restaurant": {
      "name": "Fresh Garden",
      "rating": 4.3,
      "deliveryTime": "15-25 min",
      "deliveryFee": 1.99
    }
  },
  {
    "id": 5,
    "name": "Spicy Buffalo Wings",
    "description": "Crispy chicken wings tossed in our signature spicy buffalo sauce, served with celery sticks and blue cheese dip.",
    "price": 13.99,
    "rating": 4.8,
    "reviews": 524,
    "image": "/images/product5.png",
    "category": "Appetizers",
    "ingredients": ["Chicken Wings", "Buffalo Sauce", "Celery", "Blue Cheese Dip"],
    "calories": 480,
    "preparationTime": "12-15 minutes",
    "spicyLevel": 4,
    "vegetarian": false,
    "available": true,
    "nutritionalInfo": {
      "protein": "26g",
      "carbs": "8g",
      "fat": "35g",
      "fiber": "1g",
      "sodium": "1450mg"
    },
    "allergens": ["Dairy"],
    "restaurant": {
      "name": "Wing Stop Express",
      "rating": 4.4,
      "deliveryTime": "20-30 min",
      "deliveryFee": 2.49
    }
  },
  {
    "id": 6,
    "name": "Fish & Chips",
    "description": "Beer-battered cod served with crispy fries, mushy peas, and tartar sauce. A British classic!",
    "price": 15.25,
    "rating": 4.3,
    "reviews": 267,
    "image": "/images/product6.png",
    "category": "Seafood",
    "ingredients": ["Cod Fish", "Beer Batter", "Fries", "Mushy Peas", "Tartar Sauce"],
    "calories": 720,
    "preparationTime": "15-18 minutes",
    "spicyLevel": 0,
    "vegetarian": false,
    "available": false,
    "nutritionalInfo": {
      "protein": "35g",
      "carbs": "65g",
      "fat": "32g",
      "fiber": "5g",
      "sodium": "980mg"
    },
    "allergens": ["Gluten", "Fish"],
    "restaurant": {
      "name": "The Fish House",
      "rating": 4.1,
      "deliveryTime": "35-45 min",
      "deliveryFee": 3.99
    }
  }
];

export default function handler(req, res) {
  const { id } = req.query;
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.status(200).json(product);
}
