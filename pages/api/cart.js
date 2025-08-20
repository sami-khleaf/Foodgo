export default function handler(req, res) {
  res.status(200).json({
    "items": [
      {
        "id": 1,
        "productId": 1,
        "name": "Cheeseburger Wendy's Burger",
        "price": 8.24,
        "quantity": 2,
        "image": "/images/product1.png",
        "customizations": [
          "Extra cheese",
          "No pickles"
        ],
        "subtotal": 16.48
      },
      {
        "id": 2,
        "productId": 3,
        "name": "Margherita Pizza",
        "price": 12.50,
        "quantity": 1,
        "image": "/images/product3.png",
        "customizations": [
          "Extra basil",
          "Thin crust"
        ],
        "subtotal": 12.50
      },
      {
        "id": 3,
        "productId": 5,
        "name": "Spicy Buffalo Wings",
        "price": 13.99,
        "quantity": 1,
        "image": "/images/product5.png",
        "customizations": [
          "Extra spicy",
          "Extra blue cheese"
        ],
        "subtotal": 13.99
      }
    ],
    "summary": {
      "itemCount": 4,
      "subtotal": 42.97,
      "tax": 3.44,
      "deliveryFee": 2.99,
      "serviceFee": 1.50,
      "discount": 0.00,
      "total": 50.90
    },
    "restaurant": {
      "name": "Mixed Orders",
      "estimatedDeliveryTime": "35-45 min",
      "minimumOrder": 15.00,
      "deliveryRadius": "5 miles"
    },
    "promotions": [
      {
        "id": "FIRST20",
        "title": "20% off first order",
        "description": "Get 20% off your first order with code FIRST20",
        "discount": 8.59,
        "applicable": false,
        "reason": "Already used"
      },
      {
        "id": "FREE_DELIVERY",
        "title": "Free delivery on orders over $50",
        "description": "Free delivery when you spend $50 or more",
        "discount": 2.99,
        "applicable": true,
        "reason": "Order qualifies"
      }
    ]
  });
}
