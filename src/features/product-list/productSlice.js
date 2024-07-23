import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    _id: 1,
    title: "Unknown horizon",
    oldPrice: "400",
    price: 350,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    size: "xl",
  },

  {
    _id: 2,
    title: "Jacket with wollen hat",
    oldPrice: "70",
    price: 65,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph",
    rating: 3.8,
    size: "s",
  },
  {
    _id: 3,
    title: "Champion Men's Powerblend Fleece Pullover Hoodie",
    oldPrice: 50,
    price: 39.99,
    description:
      "50% Cotton, 50% Polyester, Imported, Pull On closure, Machine Wash, Reduced pilling and shrinkage for a great fit wash after wash. Wider ribbed cuffs and waistband stay flat and keep the chill out.",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/816W0H5g26L._AC_UY1100_.jpg",
    rating: 4.7,
    size: "xl",
  },
  {
    _id: 4,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    oldPrice: 100,
    price: 56.99,
    description:
      "Note:The Jackets is US standard size.Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Hooded Softshell Jacket: Detachable hood and adjustable cuff, inside phone&wallet zipper pocket, adjustable hem, soft and comfortable wear, waterproof, windproof. Liner Fabric: Warm Fleece - The inner jacket is thicker fleece material, effectively keeping your body warm. Stand collar liner jacket, anti-static snatch, lightweight and comfortable",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: 2/1,
    size: "s",
  },

  {
    _id: 5,
    title: "Skirts with full setup",
    oldPrice: "800",
    price: 695,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/curly-woman-elegant-hat-looking-camera-studio-shot-fascinating-blonde-girl-striped-shirt_197531-13243.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=ais",
    rating: 5,
    size: "xll",
  },
  {
    _id: 6,
    title: "Yellow Hoody",
    oldPrice: "200",
    price: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    size: "l",
  },
  {
    _id: 7,
    title: "Mens Cotton Jacket",
    oldPrice: 60,
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4.4,
    size: "xl",
  },

  {
    _id: 8,
    title: "Gouwn with Red velvet",
    oldPrice: "500",
    price: 350,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.7,
    size: "s",
  },
  {
    _id: 9,
    title: "Pink beauty",
    oldPrice: "150",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3,
    size: "xl",
  },
  {
    _id: 10,
    title: "Opna Women's Short Sleeve Moisture",
    oldPrice: 20,
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a great fit Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away from your body. Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: 4.1,
    size: "xll",
  },

  {
    _id: 11,
    title: "Round neck t-shirt",
    oldPrice: "1000",
    price: 800,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/premium-photo/woman-yellow-shirt-with-word-love-it_873925-155207.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=ais",
    rating: 4.8,
    size: "xll",
  },
  {
    _id: 12,
    title: "Black Jacket",
    oldPrice: "200",
    price: 140,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.2,
    size: "s",
  },
  {
    _id: 13,
    title: "Black top with jeans",
    oldPrice: "130",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    size: "l",
  },
  {
    _id: 14,
    title: "Yellow top for kids",
    oldPrice: "80",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "kids",
    image:
      "https://img.freepik.com/free-photo/small-girl-stands-near-table_8353-5344.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=ais",
    rating: 2.4,
    size: "",
  },
  {
    _id: 15,
    title: "Stylish jeans in lightblue",
    oldPrice: "120",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2738792/pexels-photo-2738792.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.1,
    size: "s",
  },
  {
    _id: 16,
    title: "Long sleeve Jacket",
    oldPrice: "200",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    rating: 2.9,
    size: "l",
  },
  {
    _id: 17,
    title: "Light tops",
    oldPrice: "140",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2010925/pexels-photo-2010925.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 1,
    size: "xll",
  },
  {
    _id: 18,
    title: "Khakhi jeans",
    oldPrice: "250",
    price: 190,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 1.9,
    size: "s",
  },
  {
    _id: 19,
    title: "Black full sleeve",
    oldPrice: "180",
    price: 170,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.3,
    size: "l",
  },
  {
    _id: 20,
    title: "Formal for Men",
    oldPrice: "500",
    price: 490,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    size: "xl",
  },
  {
    _id: 21,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    oldPrice: 25,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 1.1,
    size: "l",
  },
  {
    _id: 22,
    title: "Black t-shirt for women",
    oldPrice: "60",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 2.2,
    size: "m",
  },
  {
    _id: 23,
    title: "Mens Casual Slim Fit",
    oldPrice: 20,
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: 2.6,
    size: "xll",
  },

  {
    _id: 24,
    title: "Blue jins",
    oldPrice: "70",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2429.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    rating: 3.1,
    size: "xl",
  },
  {
    _id: 25,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    oldPrice: 65,
    price: 29.95,
    description:
      "100% POLYURETHANE (shell) 100% POLYESTER (liner) Imported Zipper closure Hand Wash Only Removable hooded faux leather moto jacket. Soft lining, and adjustable cuffs. Adjustable and detachable hooded with drawstring. Two side pockets for secure storage",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: 3.4,
    size: "m",
  },
  {
    _id: 26,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    oldPrice: 50,
    price: 39.99,
    description:
      "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and the Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: 2.8,
    size: "l",
  },
  {
    _id: 27,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    oldPrice: 10,
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: 2.6,
    size: "xl",
  },
  {
    _id: 28,
    title: "Jean's stylish Jacket",
    oldPrice: "250",
    price: 245,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    size: "m",
  },
  {
    _id: 29,
    title: "Hanes Men's Long Sleeve Beefy-T Shirt",
    oldPrice: 25,
    price: 15.99,
    description:
      "100% Cotton, Imported, Pull On closure, Machine Wash, Heavyweight and durable, our classic long-sleeve Beefy-T is made to last. Relaxed fit for added comfort.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: 4.5,
    size: "l",
  },
  {
    _id: 30,
    title: "Amazon Essentials Women's Solid Tank",
    oldPrice: 18,
    price: 12.99,
    description:
      "95% Cotton, 5% Spandex, Imported, Machine Wash, Sleeveless design with a smooth, close-to-body fit, versatile and perfect for layering.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61-NXn+SL2L._AC_UY1100_.jpg",
    rating: 4.2,
    size: "m",
  },
  {
    _id: 31,
    title: "Compact fashion t-shirt",
    oldPrice: "70",
    price: 55.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://img.freepik.com/free-photo/young-woman-fluffy-jacket-red-sunglasses-looking-into-camera_197531-15044.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph",
    rating: 3.6,
    size: "m",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products,
  },
  // reducers:{
  //     getData:(state)=>{
  //         state.product.push(products);
  //     }
  // }
});

export const { getData } = productSlice.actions;

export default productSlice.reducer;