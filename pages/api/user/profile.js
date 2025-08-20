export default function handler(req, res) {
  res.status(200).json({
    "user": {
      "id": "user_12345",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@email.com",
      "phone": "+1 (555) 123-4567",
      "dateOfBirth": "1990-05-15",
      "gender": "male",
      "profilePicture": "/images/profile-avatar.png",
      "memberSince": "2022-03-10T00:00:00Z",
      "verified": {
        "email": true,
        "phone": true,
        "identity": false
      }
    },
    "addresses": [
      {
        "id": "addr_1",
        "type": "home",
        "name": "Home",
        "street": "123 Main Street",
        "apartment": "Apt 4B",
        "city": "San Francisco",
        "state": "CA",
        "zipCode": "94102",
        "country": "USA",
        "isDefault": true,
        "deliveryInstructions": "Leave at front door, ring doorbell"
      },
      {
        "id": "addr_2",
        "type": "work",
        "name": "Office",
        "street": "456 Business Ave",
        "apartment": "Suite 201",
        "city": "San Francisco",
        "state": "CA",
        "zipCode": "94105",
        "country": "USA",
        "isDefault": false,
        "deliveryInstructions": "Call when you arrive, ask for John at reception"
      }
    ],
    "preferences": {
      "dietary": {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "nutAllergy": false,
        "dairyFree": false,
        "lowSodium": true,
        "spicyTolerance": 3
      },
      "notifications": {
        "orderUpdates": true,
        "promotions": true,
        "recommendations": false,
        "newsletter": true,
        "sms": true,
        "push": true
      },
      "language": "en",
      "currency": "USD",
      "timezone": "America/Los_Angeles"
    },
    "orderHistory": {
      "totalOrders": 47,
      "totalSpent": 1247.83,
      "averageOrderValue": 26.55,
      "favoriteRestaurants": [
        "Burger Palace",
        "Mama's Pizza",
        "Green Eats"
      ],
      "mostOrderedItems": [
        "Cheeseburger Wendy's Burger",
        "Margherita Pizza",
        "Grilled Chicken Salad"
      ]
    },
    "loyalty": {
      "tier": "Gold",
      "points": 342,
      "totalPointsEarned": 1247,
      "pointsToNextTier": 658,
      "nextTier": "Platinum",
      "benefits": [
        "Free delivery on orders over $25",
        "Priority customer support",
        "Exclusive menu items access",
        "5% cashback on all orders"
      ]
    },
    "paymentMethods": {
      "defaultPaymentId": "pm_1",
      "totalSavedMethods": 3,
      "autoTopUpEnabled": false
    },
    "socialConnections": {
      "facebook": {
        "connected": true,
        "username": "john.doe.123"
      },
      "google": {
        "connected": true,
        "email": "john.doe@gmail.com"
      },
      "apple": {
        "connected": false
      }
    },
    "accountSecurity": {
      "twoFactorAuth": {
        "enabled": true,
        "method": "sms"
      },
      "lastLogin": "2024-01-15T12:30:00Z",
      "passwordLastChanged": "2023-11-20T10:15:00Z",
      "securityQuestions": {
        "setup": true,
        "count": 3
      }
    },
    "subscription": {
      "type": "premium",
      "status": "active",
      "renewalDate": "2024-02-15T00:00:00Z",
      "price": 9.99,
      "benefits": [
        "Unlimited free delivery",
        "Exclusive discounts",
        "Priority support",
        "Early access to new restaurants"
      ]
    }
  });
}
