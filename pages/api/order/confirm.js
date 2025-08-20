export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  res.status(200).json({
    "success": true,
    "message": "Order confirmed successfully!",
    "orderId": "ORD-2024-001257",
    "confirmationNumber": "FG-789456123",
    "orderDetails": {
      "status": "confirmed",
      "orderDate": "2024-01-15T14:45:00Z",
      "estimatedDeliveryTime": "35-45 minutes",
      "estimatedDeliveryDateTime": "2024-01-15T15:30:00Z",
      "total": 48.66,
      "paymentStatus": "paid",
      "paymentMethod": "Visa ending in 4242"
    },
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
      "deliveryInstructions": "Leave at front door, ring doorbell"
    },
    "tracking": {
      "trackingUrl": "https://track.foodgo.com/order/ORD-2024-001257",
      "trackingCode": "TRK-789456123",
      "smsNotifications": true,
      "emailNotifications": true
    },
    "nextSteps": [
      {
        "step": 1,
        "title": "Order Processing",
        "description": "Restaurant is preparing your order",
        "status": "in_progress",
        "estimatedTime": "10-15 minutes"
      },
      {
        "step": 2,
        "title": "Out for Delivery",
        "description": "Driver will pick up your order",
        "status": "pending",
        "estimatedTime": "20-25 minutes"
      },
      {
        "step": 3,
        "title": "Delivered",
        "description": "Your order will be delivered",
        "status": "pending",
        "estimatedTime": "35-45 minutes"
      }
    ],
    "support": {
      "phone": "+1 (555) FOODGO-1",
      "email": "support@foodgo.com",
      "chatUrl": "https://foodgo.com/chat",
      "hours": "24/7 support available"
    },
    "receipt": {
      "receiptUrl": "https://receipts.foodgo.com/ORD-2024-001257.pdf",
      "emailSent": true,
      "printable": true
    },
    "loyalty": {
      "pointsEarned": 49,
      "totalPoints": 342,
      "nextRewardAt": 500,
      "rewardProgress": 68.4
    },
    "recommendations": [
      {
        "message": "Based on your order, you might also like:",
        "products": [
          {
            "id": 4,
            "name": "Grilled Chicken Salad",
            "price": 11.75,
            "image": "/images/product4.png"
          },
          {
            "id": 6,
            "name": "Fish & Chips",
            "price": 15.25,
            "image": "/images/product6.png"
          }
        ]
      }
    ]
  });
}
