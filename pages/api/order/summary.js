export default function handler(req, res) {
  res.status(200).json({
    "orderId": "ORD-2024-001256",
    "orderDate": "2024-01-15T14:30:00Z",
    "status": "confirmed",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@email.com",
      "phone": "+1 (555) 123-4567"
    },
    "deliveryAddress": {
      "street": "123 Main Street",
      "apartment": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "zipCode": "94102",
      "country": "USA",
      "deliveryInstructions": "Leave at front door, ring doorbell"
    },
    "items": [
      {
        "id": 1,
        "productId": 1,
        "name": "Cheeseburger Wendy's Burger",
        "price": 8.24,
        "quantity": 2,
        "customizations": ["Extra cheese", "No pickles"],
        "subtotal": 16.48
      },
      {
        "id": 2,
        "productId": 3,
        "name": "Margherita Pizza",
        "price": 12.50,
        "quantity": 1,
        "customizations": ["Extra basil", "Thin crust"],
        "subtotal": 12.50
      },
      {
        "id": 3,
        "productId": 5,
        "name": "Spicy Buffalo Wings",
        "price": 13.99,
        "quantity": 1,
        "customizations": ["Extra spicy", "Extra blue cheese"],
        "subtotal": 13.99
      }
    ],
    "pricing": {
      "subtotal": 42.97,
      "tax": {
        "amount": 3.44,
        "rate": 8.0,
        "description": "CA State Tax"
      },
      "fees": {
        "delivery": {
          "amount": 2.99,
          "description": "Standard delivery"
        },
        "service": {
          "amount": 1.50,
          "description": "Service fee"
        },
        "processing": {
          "amount": 0.75,
          "description": "Payment processing"
        }
      },
      "discounts": {
        "promoCode": "FREE_DELIVERY",
        "amount": -2.99,
        "description": "Free delivery on orders over $50"
      },
      "total": 48.66
    },
    "payment": {
      "method": "Credit Card",
      "cardLast4": "4242",
      "cardType": "Visa",
      "transactionId": "txn_1K2L3M4N5O6P7Q8R"
    },
    "delivery": {
      "estimatedTime": "35-45 minutes",
      "deliveryWindow": "2024-01-15T15:05:00Z - 2024-01-15T15:15:00Z",
      "trackingUrl": "https://track.foodgo.com/order/ORD-2024-001256",
      "driverInfo": {
        "name": "Mike Johnson",
        "phone": "+1 (555) 987-6543",
        "rating": 4.8,
        "vehicle": "Red Honda Civic - ABC123"
      }
    },
    "restaurant": {
      "name": "Multiple Restaurants",
      "address": "Various locations in San Francisco",
      "phone": "+1 (555) 246-8135"
    },
    "specialInstructions": "Please ensure food is hot and well-packaged. Ring doorbell upon arrival.",
    "estimatedDelivery": "2024-01-15T15:10:00Z"
  });
}
