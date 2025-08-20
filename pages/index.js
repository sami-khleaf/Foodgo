import Head from 'next/head'

export default function Home() {
  const endpoints = [
    { path: '/api/products', method: 'GET', description: 'Get all products' },
    { path: '/api/products/[id]', method: 'GET', description: 'Get single product by ID (e.g., /api/products/1)' },
    { path: '/api/cart', method: 'GET', description: 'Get current cart items' },
    { path: '/api/order/summary', method: 'GET', description: 'Get order summary with tax, delivery fees, total' },
    { path: '/api/order/payment-methods', method: 'GET', description: 'Get available payment methods' },
    { path: '/api/order/confirm', method: 'POST', description: 'Confirm order and get success response' },
    { path: '/api/user/profile', method: 'GET', description: 'Get user profile details' },
    { path: '/api/support/messages', method: 'GET', description: 'Get mock chat messages' },
  ]

  return (
    <div>
      <Head>
        <title>FoodGo API - Next.js</title>
        <meta name="description" content="FoodGo API endpoints built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#0070f3', marginBottom: '2rem' }}>🍔 FoodGo API</h1>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
          Welcome to the FoodGo API! This Next.js application provides comprehensive food delivery API endpoints with static JSON responses.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>📍 Available Endpoints</h2>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {endpoints.map((endpoint, index) => (
            <div key={index} style={{
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#fafafa'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <code style={{
                  backgroundColor: endpoint.method === 'GET' ? '#10b981' : '#3b82f6',
                  color: 'white',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  minWidth: '50px',
                  textAlign: 'center'
                }}>
                  {endpoint.method}
                </code>
                <code style={{
                  backgroundColor: '#f3f4f6',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>
                  {endpoint.path}
                </code>
              </div>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                {endpoint.description}
              </p>
              {endpoint.path !== '/api/products/[id]' && (
                <a 
                  href={endpoint.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    color: '#0070f3',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  → Try this endpoint
                </a>
              )}
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>🚀 Getting Started</h2>
        <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Run the development server:</h3>
          <pre style={{ 
            backgroundColor: '#1f2937', 
            color: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            margin: '0'
          }}>
            <code>npm run dev</code>
          </pre>
          <p style={{ marginTop: '1rem', marginBottom: '0', color: '#666' }}>
            Then visit <a href="http://localhost:3000" style={{ color: '#0070f3' }}>http://localhost:3000</a> to see this page and test the API endpoints.
          </p>
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>📖 Example Usage</h2>
        <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Fetch all products:</h3>
          <pre style={{ 
            backgroundColor: '#1f2937', 
            color: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            margin: '0 0 1rem 0'
          }}>
            <code>{`fetch('/api/products')
  .then(res => res.json())
  .then(data => console.log(data))`}</code>
          </pre>
          
          <h3 style={{ marginBottom: '1rem' }}>Get a specific product:</h3>
          <pre style={{ 
            backgroundColor: '#1f2937', 
            color: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            margin: '0'
          }}>
            <code>{`fetch('/api/products/1')
  .then(res => res.json())
  .then(data => console.log(data))`}</code>
          </pre>
        </div>
      </main>
    </div>
  )
}
