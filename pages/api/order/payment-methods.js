export default function handler(req, res) {
  res.status(200).json({
    "savedPaymentMethods": [
      {
        "id": "pm_1",
        "type": "credit_card",
        "cardType": "Visa",
        "last4": "4242",
        "expiryMonth": 12,
        "expiryYear": 2027,
        "holderName": "John Doe",
        "isDefault": true,
        "nickname": "Personal Visa"
      },
      {
        "id": "pm_2",
        "type": "credit_card",
        "cardType": "Mastercard",
        "last4": "5555",
        "expiryMonth": 8,
        "expiryYear": 2026,
        "holderName": "John Doe",
        "isDefault": false,
        "nickname": "Work Card"
      },
      {
        "id": "pm_3",
        "type": "debit_card",
        "cardType": "Visa Debit",
        "last4": "1234",
        "expiryMonth": 3,
        "expiryYear": 2025,
        "holderName": "John Doe",
        "isDefault": false,
        "nickname": "Checking Account"
      }
    ],
    "digitalWallets": [
      {
        "id": "dw_1",
        "type": "apple_pay",
        "name": "Apple Pay",
        "icon": "/images/apple-pay.png",
        "available": true,
        "setupRequired": false
      },
      {
        "id": "dw_2",
        "type": "google_pay",
        "name": "Google Pay",
        "icon": "/images/google-pay.png",
        "available": true,
        "setupRequired": false
      },
      {
        "id": "dw_3",
        "type": "paypal",
        "name": "PayPal",
        "icon": "/images/paypal.png",
        "available": true,
        "setupRequired": true,
        "email": "john.doe@email.com"
      }
    ],
    "alternativePayments": [
      {
        "id": "alt_1",
        "type": "cash_on_delivery",
        "name": "Cash on Delivery",
        "icon": "/images/cash.png",
        "available": true,
        "fee": 0.00,
        "description": "Pay with cash when your order arrives",
        "maxOrderValue": 100.00
      },
      {
        "id": "alt_2",
        "type": "buy_now_pay_later",
        "name": "Klarna - Buy Now, Pay Later",
        "icon": "/images/klarna.png",
        "available": true,
        "fee": 0.00,
        "description": "Split your payment into 4 interest-free installments",
        "minOrderValue": 25.00
      },
      {
        "id": "alt_3",
        "type": "gift_card",
        "name": "Gift Card",
        "icon": "/images/gift-card.png",
        "available": true,
        "fee": 0.00,
        "description": "Use your FoodGo gift card balance",
        "balance": 15.50
      }
    ],
    "paymentSecurity": {
      "encryption": "256-bit SSL",
      "pciCompliant": true,
      "fraudProtection": true,
      "secureTokenization": true
    },
    "fees": {
      "processingFee": {
        "creditCard": 0.00,
        "debitCard": 0.00,
        "digitalWallet": 0.00,
        "cashOnDelivery": 0.00
      }
    },
    "acceptedCards": ["Visa", "Mastercard", "American Express", "Discover"],
    "minimumOrderValue": 10.00,
    "maximumOrderValue": 500.00
  });
}
