// get ki request product ko display k liye ki jati hai....
// Example of GET API to fetch products on a fashion website
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        // Fetching clothing products from your database or Sanity CMS
        const products = [
          { id: 1, name: 'Summer T-shirt', price: 20, category: 'Summer Wear' },
          { id: 2, name: 'Stylish Jeans', price: 40, category: 'Denim' }
        ];
  
        // Returning products as a response
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  