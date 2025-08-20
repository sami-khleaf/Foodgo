# 🍔 FoodGo API - Next.js

A comprehensive food delivery API built with Next.js that provides static JSON responses for all common food delivery app functionality.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the API documentation page.

## 📍 API Endpoints

### Products
- **GET** `/api/products` - Get all products with details
- **GET** `/api/products/[id]` - Get a single product by ID (e.g., `/api/products/1`)

### Cart & Orders
- **GET** `/api/cart` - Get current cart items with summary
- **GET** `/api/order/summary` - Get order summary with tax, delivery fees, total
- **GET** `/api/order/payment-methods` - Get available payment methods
- **POST** `/api/order/confirm` - Confirm order and get success response

### User & Support
- **GET** `/api/user/profile` - Get user profile details
- **GET** `/api/support/messages` - Get mock chat messages

## 📖 Example Usage

### Fetch all products
```javascript
fetch('/api/products')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Get a specific product
```javascript
fetch('/api/products/1')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Get cart items
```javascript
fetch('/api/cart')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Confirm an order
```javascript
fetch('/api/order/confirm', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // order data
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## 📂 Project Structure

```
/my-foodgo-api
  /pages
    index.js                      # API documentation page
    /api
      cart.js                     # Cart items endpoint
      /products
        index.js                  # All products endpoint
        [id].js                   # Single product endpoint
      /order
        summary.js                # Order summary endpoint
        payment-methods.js        # Payment methods endpoint
        confirm.js                # Order confirmation endpoint
      /user
        profile.js                # User profile endpoint
      /support
        messages.js               # Support chat messages endpoint
  package.json
  README.md
```

## 🎯 Features

### Product Data
- Comprehensive product information including name, description, price, rating
- Nutritional information and allergen details
- Restaurant information with delivery times
- Availability status and customization options

### Cart Management
- Detailed cart items with customizations
- Pricing breakdown with taxes and fees
- Available promotions and discounts
- Order minimums and delivery information

### Order Processing
- Complete order summaries with customer details
- Multiple payment method support (cards, digital wallets, cash)
- Real-time order tracking capabilities
- Loyalty points and reward integration

### User Management
- Detailed user profiles with preferences
- Multiple address management
- Order history and statistics
- Subscription and loyalty tier information

### Support System
- Rich chat message history
- Support agent information
- Quick reply options
- File upload capabilities

## 🛠️ Technology Stack

- **Next.js 14** - React framework with API routes
- **Node.js** - JavaScript runtime
- **Static JSON** - No database required, perfect for prototyping

## 📝 Response Examples

All endpoints return comprehensive JSON data. Here's a sample product response:

```json
{
  "id": 1,
  "name": "Cheeseburger Wendy's Burger",
  "description": "Classic fast food burger with fresh ground beef...",
  "price": 8.24,
  "rating": 4.5,
  "reviews": 285,
  "image": "/images/product1.png",
  "category": "Burgers",
  "ingredients": ["Beef Patty", "Cheese", "Lettuce", "Tomato"],
  "calories": 540,
  "preparationTime": "8-12 minutes",
  "available": true
}
```

## 🔧 Development

This API is designed for:
- Frontend development and testing
- Mobile app prototyping
- API documentation examples
- Educational purposes

## 📄 License

This project is for educational and development purposes.
