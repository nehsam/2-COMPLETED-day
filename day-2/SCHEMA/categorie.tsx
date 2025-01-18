export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(50)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(10).max(300)
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
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [
          {
            type: 'string',
            title: 'Category Name',
            options: {
              list: [
                { title: 'Men', value: 'men' },
                { title: 'Women', value: 'women' },
                { title: 'Kids', value: 'kids' },
                { title: 'Formal', value: 'formal' },
                { title: 'Casual', value: 'casual' },
                { title: 'Summer', value: 'summer' },
                { title: 'Winter', value: 'winter' }
              ]
            }
          }
        ],
        description: 'Select the main category for this item (e.g., Men, Women, etc.)'
      },
      {
        name: 'subCategories',
        title: 'Sub Categories',
        type: 'array',
        of: [
          {
            type: 'string',
            title: 'Sub Category',
            options: {
              list: [
                { title: 'Wedding', value: 'wedding' },
                { title: 'Picnic', value: 'picnic' },
                { title: 'Jeans', value: 'jeans' },
                { title: 'T-shirt', value: 't-shirt' },
                { title: 'Shalwar Kameez', value: 'shalwar-kameez' },
                { title: 'Official', value: 'official' },
                { title: 'Festivals', value: 'festivals' },
                { title: 'Party Wear', value: 'party-wear' }
              ]
            }
          }
        ],
        description: 'Select sub-categories for this category (e.g., Wedding, Picnic, etc.)'
      }
    ]
  }
  