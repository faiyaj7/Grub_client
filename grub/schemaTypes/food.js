export const food = {
  name: 'Food',
  title: 'Food',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(80),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          {title: 'popular', value: 'popular'},
          {title: 'unpopular', value: 'unpopular'},
        ],
        layout: 'radio',
      },
    },

    {
      name: 'image',
      title: 'Image of the Food',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Asian', value: 'Asian'},

          {title: 'Bangladeshi', value: 'Bangladeshi'},
          {title: 'Beverage', value: 'Beverage'},
          {title: 'Biryani', value: 'Biryani'},
          {title: 'Burgers', value: 'Burgers'},
          {title: 'Cakes', value: 'Cakes'},
          {title: 'Chicken', value: 'Chicken'},
          {title: 'Chinese', value: 'Chinese'},
          {title: 'Dessert', value: 'Dessert'},
          {title: 'Fast Food', value: 'Fast Food'},
          {title: 'Fish', value: 'Fish'},
          {title: 'Fried Chicken', value: 'Fried Chicken'},
          {title: 'Ice Cream', value: 'Ice Cream'},
          {title: 'Indian', value: 'Indian'},
          {title: 'Italian', value: 'Italian'},
          {title: 'Japanese', value: 'Japanese'},
          {title: 'Kebab', value: 'Kebab'},
          {title: 'Khichuri', value: 'Khichuri'},
          {title: 'Meat', value: 'Meat'},
          {title: 'Mediterranean', value: 'Mediterranean'},
          {title: 'Mexican', value: 'Mexican'},
          {title: 'Noodles', value: 'Noodles'},
          {title: 'Pasta', value: 'Pasta'},
          {title: 'Pizza', value: 'Pizza'},
          {title: 'Rice Dishes', value: 'Rice Dishes'},
          {title: 'Seafood', value: 'Seafood'},
          {title: 'Shawarma', value: 'Shawarma'},
          {title: 'Snacks', value: 'Snacks'},
          {title: 'Soups', value: 'Soups'},
          {title: 'Sushi', value: 'Sushi'},
          {title: 'Thai', value: 'Thai'},
          {title: 'Turkish', value: 'Turkish'},
          {title: 'Western', value: 'Western'},
          {title: 'Wraps', value: 'Wraps'},
        ],
      },
    },
  ],
}
