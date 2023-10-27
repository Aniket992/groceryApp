const PRODUCTS = [
  {
    id: 1,
    name: "complete grocery",
    price: 389,
    image: require("../assets/product_images/image1.png"),
    description:
      "A complete package of 1 month 2 person grocery from top brand.It includes Biscuits,Fruit Jam ",
  },
  {
    id: 2,
    name: "maggi",
    price: 79,
    image: require("../assets/product_images/maggi.jpg"),
    description: [
      "Pack of 8",
      "Masala Noodles With Goodness Of Iron ",
      "Made With Choicest Quality Spices",
      "Diet Type: Vegetarian"
    ],
  },
  
  {
    id: 3,
    name: "Nutella Hazelnut Spread with Cocoa",
    price: 150,
    image: require("../assets/product_images/nutella.jpg"),
    description: [
      "Nutella Hazelnut Spread with Cocoa",
      "Diet: Vegetarian",
      "Nut Seed Type: Hazelnut",
    ],
  }
  ,
  {
    id: 4,
    name: "Tata Salt",
    price: 24,
    image: require("../assets/product_images/salt.jpg"),
    description: [
      "Vacuum Evaporated Iodised Salt",
      "Flavour: Iodised Salt",
      "Brand: Tata Salt",
    ],
  },

  {
    id: 5,
    name: "Lipton Clear & Light Green Tea Bags",
    price: 150,
    image: require("../assets/product_images/tea.jpg"),
    description: [
      "Lipton Clear & Light Green Tea Bags",
      "Item Form: Teabags",
      "Tea Variety: Green",
      "Diet Type: Vegetarian",
    ],
  },
  {
    id: 6,
    name: "Potato Chips",
    price: 50,
    image: require("../assets/product_images/lays.jpg"),
    description: [
      "Potato Chips",
      "Crispy and crunchy texture",
      "4 flavours",
      "Diet: Vegetarian",
    ],
  }
  ,
  {
    id: 7,
    name: "Nongshim Shin Ramyun Noodle Soup",
    price: 75,
    image: require("../assets/product_images/noodles.jpg"),
    description: [
      "Nongshim Shin Ramyun Noodle Soup",
      "Flavour: Spicy",
      "Diet Type: Vegetarian",
    ],
  }
  ,
  {
    id: 8,
    name: " Ashirwaad Wheat Flour 5kg packet",
    price: 300,
    image: require("../assets/product_images/fortune.jpg"),
    description:[
      " Fortune Soybean oil",
      "Brand: Forune ",
      "Flavour: Soybean ",
      "Diet Type: Vegetarian", 
    ]
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
