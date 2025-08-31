export default function handler(req, res) {
  const { id } = req.query;
  
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Mock user data - in a real application, this would come from a database
  const users = {
    1: {
      "id": 1,
      "firstName": "Sami",
      "lastName": "Khleaf",
      "email": "khleafsami@gmail.com",
      "phoneNumber": "+972592123456",
      "imageUrl": "https://ui-avatars.com/api/?name=Sami+Khleaf&background=0D8ABC&color=fff&size=256"
    },
    2: {
      "id": 2,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@email.com",
      "phoneNumber": "+1-555-123-4567",
      "imageUrl": "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff&size=256"
    },
    3: {
      "id": 3,
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@email.com",
      "phoneNumber": "+1-555-987-6543",
      "imageUrl": "https://ui-avatars.com/api/?name=Jane+Smith&background=0D8ABC&color=fff&size=256"
    }
  };

  // Check if user exists
  if (!users[id]) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Return user details
  res.status(200).json(users[id]);
}
