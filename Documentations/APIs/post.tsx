//post ki request product ko ya kisi cheez ko add karny k liye use ki jati hai agar admin ko koi product add karwani hogi to hum post ki api ka use karegy....
// Example of POST API to add new products on a fashion website
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Extracting product data from the request body (from form submission)
        const { name, description, price, category } = req.body;
  
        // Creating a new product object (in real case, you would store this in a database)
        const newProduct = { 
          id: Math.random(), 
          name, 
          description, 
          price, 
          category 
        };
  
        // Returning the newly added product in the response
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ error: 'Error saving product' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }