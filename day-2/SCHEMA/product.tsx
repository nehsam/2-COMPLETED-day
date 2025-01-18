export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required().min(6).max(100)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(15).max(500)
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().positive()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'women', value: 'women' },
            { title: 'men', value: 'men' },
            { title: 'kids', value: 'kids' },
            { title: 'formal', value: 'formal' },
            { title: 'summer', value: 'summer' },
            { title: 'winter', value: 'winter' },
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'sizes',
        title: 'Available Sizes',
        type: 'array',
        of: [
          {
            type: 'string',
            title: 'Size',
            options: {
              list: [
                { title: 'S', value: 'S' },
                { title: 'M', value: 'M' },
                { title: 'L', value: 'L' },
                { title: 'XL', value: 'XL' },
                { title: 'XXL', value: 'XXL' }
              ]
            }
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'colors',
        title: 'Available Colors',
        type: 'array',
        of: [
          {
            type: 'string',
            title: 'Color',
            options: {
              list: [
                { title: 'Red', value: 'red' },
                { title: 'Blue', value: 'blue' },
                { title: 'Green', value: 'green' },
                { title: 'Black', value: 'black' },
                { title: 'White', value: 'white' },
                { title: 'Yellow', value: 'yellow' },
                { title: 'Pink', value: 'pink' },
                { title: 'Grey', value: 'grey' }
              ]
            }
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      }
    ]
  }
  