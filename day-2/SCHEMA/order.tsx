export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(50),
        description: 'Unique order identifier'
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
        description: 'Reference to the customer who placed the order'
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }],
                description: 'The product that was purchased'
              },
              {
                name: 'size',
                title: 'Size',
                type: 'string',
                options: {
                  list: [
                    { title: 'S', value: 'S' },
                    { title: 'M', value: 'M' },
                    { title: 'L', value: 'L' },
                    { title: 'XL', value: 'XL' },
                    { title: 'XXL', value: 'XXL' }
                  ]
                },
                description: 'Size of the product ordered'
              },
              {
                name: 'color',
                title: 'Color',
                type: 'string',
                options: {
                  list: [
                    { title: 'Red', value: 'red' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Black', value: 'black' },
                    { title: 'White', value: 'white' },
                    { title: 'Green', value: 'green' }
                  ]
                },
                description: 'Color of the product ordered'
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: Rule => Rule.required().min(1),
                description: 'Number of units purchased'
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
                validation: Rule => Rule.required().positive(),
                description: 'Price of the product at the time of purchase'
              }
            ]
          }
        ],
        description: 'List of products in the order, with quantity, size, color, and price'
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        validation: Rule => Rule.required().positive(),
        description: 'Total price of the order'
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        },
        validation: Rule => Rule.required(),
        description: 'Status of the order'
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Paid', value: 'paid' },
            { title: 'Failed', value: 'failed' }
          ]
        },
        description: 'Payment status of the order'
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'addressLine1',
            title: 'Address Line 1',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'addressLine2',
            title: 'Address Line 2',
            type: 'string',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'postalCode',
            title: 'Postal Code',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
            validation: Rule => Rule.required(),
          }
        ],
        description: 'Shipping address for the order'
      },
      {
        name: 'shippingMethod',
        title: 'Shipping Method',
        type: 'string',
        options: {
          list: [
            { title: 'Standard Shipping', value: 'standard' },
            { title: 'Express Shipping', value: 'express' },
            { title: 'Overnight Shipping', value: 'overnight' }
          ]
        },
        description: 'Shipping method selected for the order'
      },
      {
        name: 'voucherCode',
        title: 'Voucher Code',
        type: 'string',
        description: 'Voucher code applied to the order for discounts or special offers'
      },
      {
        name: 'freeDelivery',
        title: 'Free Delivery',
        type: 'boolean',
        description: 'Indicates if free delivery is applied to the order'
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        validation: Rule => Rule.required(),
        description: 'Date and time when the order was placed'
      },
      {
        name: 'returns',
        title: 'Returns',
        type: 'object',
        fields: [
          {
            name: 'isReturned',
            title: 'Is Returned',
            type: 'boolean',
            description: 'Whether the product is returned'
          },
          {
            name: 'returnDate',
            title: 'Return Date',
            type: 'datetime',
            description: 'Date when the product was returned'
          },
          {
            name: 'returnReason',
            title: 'Return Reason',
            type: 'string',
            options: {
              list: [
                { title: 'Size Issue', value: 'size' },
                { title: 'Defective Product', value: 'defective' },
                { title: 'color issue', value: 'color issue' },
                { title: 'recieved other items', value: 'items'}
              ]
            },
            description: 'Reason for the product return'
          }
        ],
        description: 'Return-related details for the order'
      }
    ]
  }
  