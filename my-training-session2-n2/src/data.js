const dummyData = [
    {
      id: 1,
      name: 'Apple',
      price: 2,
      volume: 'per kg',
      images: ['https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg', 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/07/what_to_know_apples_green_red_1296x728_header-1024x575.jpg?w=1155&h=1528', 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'],
    },
    {
      id: 2,
      name: 'Banana',
      price: 1,
      volume: 'per kg',
      images: ['https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg', 'https://hips.hearstapps.com/hmg-prod/images/bananas-royalty-free-image-1702061943.jpg?crop=1.00xw:0.752xh;0,0.178xh&resize=1200:*', 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg'],
    },
    {
      id: 3,
      name: 'Orange',
      price: 3,
      volume: 'per kg',
      images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg', 'https://www.tastingtable.com/img/gallery/are-oranges-named-after-the-color/l-intro-1666984048.jpg', 'https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg'],
    },
    {
      id: 4,
      name: 'Pear',
      price: 3,
      volume: 'per kg',
      images: ['https://extension.illinois.edu/sites/default/files/styles/hero_image/public/paragraphs/hero/2023-11/WEB%20FRUIT%20TREES%20pears%201200x880%20pexels-julia-filirovska-8245622.jpg?h=bb388bbb&itok=6nZv1hjR', 'https://www.health.com/thmb/lE6czhltdK7OsnjWv8QcsveJxkI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pears-9be62bfe42d14047a59efc9f7cde6023.jpg','https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/pears.jpg'],
    },
    {
      id: 5,
      name: 'Peach',
      price: 4,
      volume: 'per kg',
      images: ['https://cdn.pixabay.com/photo/2017/08/02/22/46/peaches-2573836_1280.jpg', 'https://t4.ftcdn.net/jpg/03/54/14/19/360_F_354141949_91l3GhnyQBzN7p0kVBylIlLCOVqY3g82.jpg', 'https://jerseypeaches.com/wp-content/uploads/2020/05/iStock_000006623276XSmall.jpg'],
    },
    {
      id: 6,
      name: 'Strawberry',
      price: 5,
      volume: 'per kg',
      images: ['https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg', 'https://www.health.com/thmb/18xOlsk4Eb84ciGWMo9LVXBkWKk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg', 'https://foodal.com/wp-content/uploads/2015/03/Make-Strawberry-Season-Last-All-Year.jpg'],
    },
    {
      id: 7,
      name: 'Watermelon',
      price: 3,
      volume: 'per kg',
      images: ['https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=WlQcb2Uh', 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/11/watermelon-1296x728-header-1.jpg?w=1155&h=1528','https://static.toiimg.com/thumb/msid-109165284,width-1280,height-720,resizemode-4/109165284.jpg'],
    },
    {
      id: 8,
      name: 'Lemon',
      price: 4,
      volume: 'per kg',
      images: ['https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/lemon-health-benefits-1296x728-feature.jpg?w=1155&h=1528','https://static.toiimg.com/thumb/msid-103846641,width-1280,height-720,resizemode-4/103846641.jpg'],
    },
    {
      id: 9,
      name: 'Grapefruit',
      price: 6,
      volume: 'per kg',
      images: ['https://www.harryanddavid.com/blog/wp-content/uploads/2023/03/grapefruit-hero-2.jpg', 'https://cdn.britannica.com/22/122522-050-6CD1C3E7/Grapefruit.jpg','https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/food-and-nutrition/grapefruit-teaser.png'],
    },
    {
      id: 10,
      name: 'Kiwi',
      price: 8,
      volume: 'per kg',
      images: ['https://www.health.com/thmb/YjD1m861zN2cGF4q9bbeu6now64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Kiwi-a2e9888bfab6474f8d12d2ae0287b356.jpg', 'https://images.seattletimes.com/wp-content/uploads/2018/01/bafe0de4-f002-11e7-ae5a-0e7cb6fd7c60.jpg?d=780x585','https://assets.clevelandclinic.org/transform/0428069b-6772-4c41-b867-1ab8f54cca62/Kiwi-Skin-92185664-770x533-1_jpg'],
    },
    {
      id: 11,
      name: 'Pineapple',
      price: 4,
      volume: 'per kg',
      images: ['https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pineapple.jpg?itok=fkrskTSe', 'https://www.thespruceeats.com/thmb/2Pdkzy-BBOBG74eziXqSj3hwDeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-history-of-the-pineapple-1807645-343418eb3b4c41b1b956d3c702550a07.jpg','https://assets.clevelandclinic.org/transform/8e5f4b64-5210-4bb7-aaeb-402affc17d3d/BenefitsOfPineapple-955346588-770x533-1_jpg'],
    },
  ];
  
  export default dummyData;  