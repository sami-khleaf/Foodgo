export default function handler(req, res) {
  res.status(200).json({
    "chatSession": {
      "sessionId": "chat_session_789456",
      "userId": "user_12345",
      "supportAgentId": "agent_sarah_001",
      "status": "active",
      "startedAt": "2024-01-15T14:20:00Z",
      "lastActivity": "2024-01-15T14:35:00Z",
      "department": "order_support",
      "priority": "medium"
    },
    "messages": [
      {
        "id": "msg_1",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "Hi John! Welcome to FoodGo support. I'm Sarah and I'll be helping you today. How can I assist you?",
        "timestamp": "2024-01-15T14:20:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_2",
        "senderId": "user_12345",
        "senderType": "user",
        "senderName": "John Doe",
        "senderAvatar": "/images/profile-avatar.png",
        "message": "Hi Sarah! I have a question about my recent order ORD-2024-001255. The delivery was supposed to arrive 30 minutes ago but I haven't received it yet.",
        "timestamp": "2024-01-15T14:22:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_3",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "I understand your concern, John. Let me look up your order right away. I can see order ORD-2024-001255 here.",
        "timestamp": "2024-01-15T14:23:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_4",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "I can see that your order is currently with our delivery partner and the driver is running about 15 minutes behind schedule due to traffic. Your order should arrive within the next 10-15 minutes.",
        "timestamp": "2024-01-15T14:25:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_5",
        "senderId": "user_12345",
        "senderType": "user",
        "senderName": "John Doe",
        "senderAvatar": "/images/profile-avatar.png",
        "message": "Thank you for checking! That's helpful to know. Will I receive any compensation for the delay?",
        "timestamp": "2024-01-15T14:27:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_6",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "Absolutely! Since your order is delayed beyond our promised delivery time, I've applied a $5 credit to your account that you can use on your next order. You should see this reflected in your wallet within 5 minutes.",
        "timestamp": "2024-01-15T14:29:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_7",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "I've also sent you a real-time tracking link via SMS so you can monitor your driver's progress: https://track.foodgo.com/driver/live/DRV-456789",
        "timestamp": "2024-01-15T14:30:00Z",
        "type": "text",
        "status": "delivered",
        "attachments": [
          {
            "type": "link",
            "url": "https://track.foodgo.com/driver/live/DRV-456789",
            "title": "Live Driver Tracking",
            "description": "Track your driver in real-time"
          }
        ]
      },
      {
        "id": "msg_8",
        "senderId": "user_12345",
        "senderType": "user",
        "senderName": "John Doe",
        "senderAvatar": "/images/profile-avatar.png",
        "message": "Perfect! Thank you so much for your help Sarah. You've been really helpful.",
        "timestamp": "2024-01-15T14:32:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_9",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "You're very welcome, John! I'm glad I could help resolve this for you. Is there anything else I can assist you with today?",
        "timestamp": "2024-01-15T14:33:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_10",
        "senderId": "user_12345",
        "senderType": "user",
        "senderName": "John Doe",
        "senderAvatar": "/images/profile-avatar.png",
        "message": "No, that's all for now. Thanks again!",
        "timestamp": "2024-01-15T14:34:00Z",
        "type": "text",
        "status": "delivered"
      },
      {
        "id": "msg_11",
        "senderId": "agent_sarah_001",
        "senderType": "agent",
        "senderName": "Sarah Johnson",
        "senderAvatar": "/images/agent-sarah.png",
        "message": "Wonderful! Have a great day and enjoy your meal when it arrives. Feel free to reach out if you need any further assistance. 😊",
        "timestamp": "2024-01-15T14:35:00Z",
        "type": "text",
        "status": "delivered"
      }
    ],
    "quickReplies": [
      "Track my order",
      "Cancel my order",
      "Refund request",
      "Restaurant complaint",
      "Delivery issue",
      "Account help",
      "Payment problem",
      "Speak to manager"
    ],
    "supportInfo": {
      "agentInfo": {
        "name": "Sarah Johnson",
        "title": "Senior Support Specialist",
        "avatar": "/images/agent-sarah.png",
        "rating": 4.9,
        "responseTime": "< 2 minutes",
        "languagesSpoken": ["English", "Spanish"]
      },
      "departmentInfo": {
        "name": "Order Support",
        "hours": "24/7",
        "averageResponseTime": "1-3 minutes",
        "escalationAvailable": true
      }
    },
    "chatFeatures": {
      "typingIndicator": true,
      "fileUpload": true,
      "maxFileSize": "10MB",
      "supportedFileTypes": ["jpg", "png", "pdf", "txt"],
      "emojiSupport": true,
      "voiceMessage": false,
      "videoCall": false,
      "screenShare": false
    }
  });
}
