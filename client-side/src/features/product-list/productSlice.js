import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    "_id": 1,
    "title": "Men's Gray Shirt",
    "oldPrice": "400",
    "price": 350,
    "description": "This classic men's gray shirt offers both style and comfort. Made from high-quality, breathable fabric, it features a sleek design that's perfect for both casual and formal occasions. The versatile gray color pairs well with any outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.3,
    "ratingCount": 548,
    "highlights": [
      "Classic gray color",
      "High-quality, breathable fabric",
      "Sleek design for any occasion",
      "Versatile and stylish",
      "Comfort and style combined"
    ],
    "material": "Cotton"
  },
  {
    "_id": 2,
    "title": "Jacket with woolen hat",
    "oldPrice": "70",
    "price": 65,
    "description": "This stylish jacket comes with a chic woolen hat, perfect for keeping warm in colder weather. The jacket's design blends classic elegance with modern trends, making it a versatile addition to any wardrobe. Ideal for both casual and semi-formal occasions.",
    "category": "women",
    "image": "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph",
    "rating": 3.8,
    "ratingCount": 478,
    "highlights": [
      "Chic woolen hat included",
      "Warm and stylish",
      "Elegant design",
      "Versatile for casual and semi-formal",
      "Blends classic and modern"
    ],
    "material": "Wool"
  },
  {
    "_id": 3,
    "title": "Men's Pullover Hoodie",
    "oldPrice": 50,
    "price": 39.99,
    "description": "This pullover hoodie is crafted from a blend of cotton and polyester, offering both comfort and durability. The hoodie features wider ribbed cuffs and waistband to keep the chill out and reduce pilling and shrinkage. It's a great choice for casual wear during cooler months.",
    "category": "men",
    "image": "https://images.pexels.com/photos/6311316/pexels-photo-6311316.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.7,
    "ratingCount": 674,
    "highlights": [
      "Comfortable cotton-polyester blend",
      "Wider ribbed cuffs",
      "Durable and stylish",
      "Reduces pilling and shrinkage",
      "Great for cooler months"
    ],
    "material": "Polyester"
  },
  {
    "_id": 4,
    "title": "Women's Snowboard Jacket",
    "oldPrice": 100,
    "price": 56.99,
    "description": "This snowboard jacket is designed for women who enjoy winter sports and outdoor activities. It features a detachable hood, adjustable cuffs, and a warm fleece liner for added comfort. With waterproof and windproof properties, it ensures you stay dry and warm on the slopes.",
    "category": "women",
    "image": "https://images.pexels.com/photos/6699264/pexels-photo-6699264.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.1,
    "ratingCount": 926,
    "highlights": [
      "Detachable hood",
      "Warm fleece liner",
      "Waterproof and windproof",
      "Adjustable cuffs",
      "For winter sports"
    ],
    "material": "Nylon"
  },
  {
    "_id": 5,
    "title": "leather Skirts",
    "oldPrice": "800",
    "price": 695,
    "description": "This elegant skirt set includes a full ensemble perfect for formal events or special occasions. The luxurious fabric and detailed design make it a standout choice. Ideal for creating a sophisticated and stylish look.",
    "category": "women",
    "image": "https://images.pexels.com/photos/24538785/pexels-photo-24538785/free-photo-of-model-in-a-brown-leather-jacket-and-a-denim-skirt-posing-on-a-burgundy-background.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/21939619/pexels-photo-21939619/free-photo-of-woman-in-black-mini-skirt-over-knees-boots-and-shades.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 5,
    "ratingCount": 786,
    "highlights": [
      "Luxurious fabric",
      "Detailed design",
      "Elegant and sophisticated",
      "Full ensemble",
      "Perfect for formal events"
    ],
    "material": "Leather"
  },
  {
    "_id": 6,
    "title": "Yellow Hoody",
    "oldPrice": "200",
    "price": 180,
    "description": "This vibrant yellow hoody is perfect for those who want to make a statement. With its comfortable fit and bright color, it adds a pop of cheer to any outfit. The high-quality fabric ensures durability and comfort for everyday wear.",
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.9,
    "ratingCount": 192,
    "highlights": [
      "Vibrant yellow color",
      "Comfortable fit",
      "Adds a pop of cheer",
      "High-quality fabric",
      "Durable for everyday wear"
    ],
    "material": "Cotton"
  },
  {
    "_id": 7,
    "title": "Men's Cotton Jacket",
    "oldPrice": 60,
    "price": 55.99,
    "description": "This versatile cotton jacket is ideal for various outdoor activities, from hiking to camping. It provides warmth and comfort while being stylish enough for everyday wear. It's a great gift option for those who enjoy the outdoors.",
    "category": "men",
    "image": "https://images.pexels.com/photos/27333766/pexels-photo-27333766/free-photo-of-a-man-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.4,
    "ratingCount": 413,
    "highlights": [
      "Versatile for outdoor activities",
      "Warm and comfortable",
      "Stylish for everyday wear",
      "Great gift option",
      "Ideal for hiking and camping"
    ],
    "material": "Cotton"
  },
  {
    "_id": 8,
    "title": "Gown with Red Velvet",
    "oldPrice": "500",
    "price": 350,
    "description": "This stunning gown features luxurious red velvet fabric, perfect for making a dramatic entrance at any formal event. The elegant design and rich texture offer a sophisticated look, ensuring you'll stand out at any special occasion.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.7,
    "ratingCount": 597,
    "highlights": [
      "Luxurious red velvet",
      "Elegant and dramatic",
      "Sophisticated design",
      "Perfect for formal events",
      "Rich texture"
    ],
    "material": "Cotton"
  },
  {
    "_id": 9,
    "title": "Pink Beauty",
    "oldPrice": "150",
    "price": 100,
    "description": "This charming pink outfit is designed to bring a touch of elegance to your wardrobe. Its flattering design and soft color make it a versatile piece for various occasions, combining style with comfort effortlessly.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3,
    "ratingCount": 814,
    "highlights": [
      "Charming pink color",
      "Flattering design",
      "Soft and comfortable",
      "Versatile for various occasions",
      "Elegant touch"
    ],
    "material": "Cotton"
  },
  {
    "_id": 10,
    "title": "Women's Short Sleeve Shirt",
    "oldPrice": 20,
    "price": 7.95,
    "description": "This short sleeve shirt is made from 100% polyester, offering a lightweight and breathable fit. Its sleek V-neck design provides a flattering silhouette, making it a comfortable and stylish choice for casual wear.",
    "category": "women",
    "image": "https://images.pexels.com/photos/24233151/pexels-photo-24233151/free-photo-of-woman-in-mini-skirt-and-short-sleeve-shirt-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.2,
    "ratingCount": 219,
    "highlights": [
      "Lightweight and breathable",
      "Flattering V-neck design",
      "Comfortable fit",
      "Stylish for casual wear",
      "100% polyester"
    ],
    "material": "Polyester"
  },
  {
    "_id": 11,
    "title": "Men's Round Neck T-Shirt",
    "oldPrice": "1000",
    "price": 800,
    "description": "This round neck t-shirt is crafted for both style and comfort. The high-quality fabric ensures durability and a great fit, while the classic design makes it a versatile piece for any casual outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/19618359/pexels-photo-19618359/free-photo-of-man-in-round-eyeglasses-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.8,
    "ratingCount": 600,
    "highlights": [
      "High-quality fabric",
      "Durable and stylish",
      "Classic round neck",
      "Versatile for casual wear",
      "Great fit"
    ],
    "material": "Cotton"
  },
  {
    "_id": 12,
    "title": "Woman's Black Top",
    "oldPrice": "200",
    "price": 140,
    "description": "This sleek black top is a wardrobe essential, offering both elegance and versatility. Its minimalist design pairs well with various outfits, making it suitable for both casual and formal occasions.",
    "category": "women",
    "image": "https://images.pexels.com/photos/10392363/pexels-photo-10392363.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.2,
    "ratingCount": 348,
    "highlights": [
      "Sleek black color",
      "Wardrobe essential",
      "Elegant and versatile",
      "Minimalist design",
      "Pairs with various outfits"
    ],
    "material": "Polyester"
  },
  {
    "_id": 13,
    "title": "Black Top with Jeans",
    "oldPrice": "130",
    "price": 120,
    "description": "This chic black top paired with jeans offers a classic yet modern look. The top's sleek design complements the jeans, making it a perfect choice for a casual day out or a relaxed evening event.",
    "category": "women",
    "image": "https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.9,
    "ratingCount": 742,
    "highlights": [
      "Chic black top",
      "Paired with jeans",
      "Classic yet modern look",
      "Sleek design",
      "Perfect for casual days"
    ],
    "material": "Wool"
  },
  {
    "_id": 14,
    "title": "Men's Blue Jacket",
    "oldPrice": "80",
    "price": 50,
    "description": "This blue jacket combines functionality with style. Its simple design makes it a versatile piece for various occasions, while its durable fabric ensures long-lasting wear and comfort.",
    "category": "men",
    "image": "https://images.pexels.com/photos/11859358/pexels-photo-11859358.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.4,
    "ratingCount": 163,
    "highlights": [
      "Functional and stylish",
      "Simple design",
      "Versatile for various occasions",
      "Durable fabric",
      "Comfortable wear"
    ],
    "material": "Nylon"
  },
  {
    "_id": 15,
    "title": "Stylish Jeans in Light Blue",
    "oldPrice": "120",
    "price": 100,
    "description": "These light blue jeans are designed for both comfort and style. Their modern cut and color make them a versatile choice for various outfits. Ideal for casual wear, they offer a relaxed fit and a timeless look.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2738792/pexels-photo-2738792.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.1,
    "ratingCount": 303,
    "highlights": [
      "Light blue color",
      "Modern cut",
      "Comfortable and stylish",
      "Versatile for outfits",
      "Relaxed fit"
    ],
    "material": "Leather"
  },
  {
    "_id": 16,
    "title": "Long sleeve Jacket",
    "oldPrice": "200",
    "price": 150,
    "description": "This long sleeve jacket combines classic elegance with modern style. Its tailored fit and premium fabric make it a versatile addition to any wardrobe. Perfect for layering over your favorite outfits during cooler months.",
    "category": "women",
    "image": "https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    "rating": 2.9,
    "ratingCount": 410,
    "highlights": [
      "Classic elegance",
      "Modern style",
      "Tailored fit",
      "Premium fabric",
      "Versatile layering"
    ],
    "material": "Cotton"
  },
  {
    "_id": 17,
    "title": "Light tops",
    "oldPrice": "140",
    "price": 120,
    "description": "These light tops are ideal for warm weather and casual outings. Crafted from breathable fabric, they offer a relaxed fit and stylish design. Ideal for layering or wearing on their own during the summer months.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2010925/pexels-photo-2010925.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 1,
    "ratingCount": 531,
    "highlights": [
      "Ideal for warm weather",
      "Breathable fabric",
      "Relaxed fit",
      "Stylish design",
      "Perfect for summer"
    ],
    "material": "Polyester"
  },
  {
    "_id": 18,
    "title": "Khakhi jeans",
    "oldPrice": "250",
    "price": 190,
    "description": "These khakhi jeans offer a timeless look with their classic cut and durable material. Designed for comfort and style, they are perfect for both casual and semi-formal occasions. The versatile color pairs well with a variety of tops.",
    "category": "women",
    "image": "https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 1.9,
    "ratingCount": 753,
    "highlights": [
      "Timeless look",
      "Classic cut",
      "Durable material",
      "Comfortable and stylish",
      "Versatile color"
    ],
    "material": "Wool"
  },
  {
    "_id": 19,
    "title": "Black full sleeve",
    "oldPrice": "180",
    "price": 170,
    "description": "This black full sleeve shirt is a wardrobe staple with its sleek design and comfortable fit. Ideal for layering or wearing alone, it provides a sophisticated look that works for both casual and dressier occasions.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.3,
    "ratingCount": 603,
    "highlights": [
      "Sleek black design",
      "Comfortable fit",
      "Wardrobe staple",
      "Sophisticated look",
      "Versatile for all occasions"
    ],
    "material": "Nylon"
  },
  {
    "_id": 20,
    "title": "Formal for Men",
    "oldPrice": "500",
    "price": 490,
    "description": "This formal wear for men exudes elegance and refinement. Perfect for special occasions or professional settings, it features high-quality fabric and a tailored fit. This outfit ensures you look polished and sophisticated.",
    "category": "men",
    "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 5,
    "ratingCount": 452,
    "highlights": [
      "Elegant and refined",
      "High-quality fabric",
      "Tailored fit",
      "Polished appearance",
      "Perfect for special occasions"
    ],
    "material": "Cotton"
  },
  {
    "_id": 21,
    "title": "Mens Casual T-Shirts",
    "oldPrice": 25,
    "price": 22.3,
    "description": "These casual t-shirts for men offer a slim fit and stylish contrast raglan sleeves. Made from lightweight and soft fabric, they are designed for comfort and durability. Perfect for everyday wear or casual outings.",
    "category": "men",
    "image": "https://images.pexels.com/photos/24446344/pexels-photo-24446344/free-photo-of-young-man-in-polo-shirt-sitting-on-rock-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 1.1,
    "ratingCount": 257,
    "highlights": [
      "Slim fit for a modern look",
      "Stylish contrast raglan sleeves",
      "Lightweight and soft fabric",
      "Comfortable for everyday wear",
      "Durable and easy to maintain"
    ],
    "material": "Cotton"
  },
  {
    "_id": 22,
    "title": "Black t-shirt for women",
    "oldPrice": 60,
    "price": 20,
    "description": "This black t-shirt for women offers a versatile and classic look. Made from comfortable fabric, it’s perfect for casual wear and easy to pair with any outfit. A must-have staple for any wardrobe.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.2,
    "ratingCount": 569,
    "highlights": [
      "Versatile classic black t-shirt",
      "Comfortable fabric for all-day wear",
      "Easy to pair with outfits",
      "Must-have wardrobe staple",
      "Simple and stylish design"
    ],
    "material": "Polyester"
  },
  {
    "_id": 23,
    "title": "Mens Casual Slim Fit",
    "oldPrice": 20,
    "price": 15.99,
    "description": "These men's casual slim-fit shirts are designed for a modern, tailored look. The soft fabric ensures comfort while the slim fit enhances your silhouette. Great for a stylish yet relaxed appearance.",
    "category": "men",
    "image": "https://images.pexels.com/photos/5369439/pexels-photo-5369439.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.6,
    "ratingCount": 621,
    "highlights": [
      "Modern slim-fit design",
      "Soft and comfortable fabric",
      "Enhances your silhouette",
      "Stylish yet relaxed appearance",
      "Ideal for casual outings"
    ],
    "material": "Wool"
  },
  {
    "_id": 24,
    "title": "Blue jins",
    "oldPrice": 70,
    "price": 50,
    "description": "These blue jeans are perfect for a casual yet chic look. Their comfortable fit and classic design make them a versatile addition to any wardrobe. Ideal for everyday wear or casual outings.",
    "category": "women",
    "image": "https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2429.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    "rating": 3.1,
    "ratingCount": 784,
    "highlights": [
      "Perfect for casual chic look",
      "Comfortable fit for all-day wear",
      "Versatile for any wardrobe",
      "Classic design with modern touch",
      "Ideal for everyday use"
    ],
    "material": "Nylon"
  },
  {
    "_id": 25,
    "title": "Women's Leather Biker Jacket",
    "oldPrice": 65,
    "price": 29.95,
    "description": "This women's leather biker jacket combines style and functionality. With a removable hood and adjustable cuffs, it offers versatility and comfort. The soft lining and secure pockets make it a practical choice for any biker enthusiast.",
    "category": "women",
    "image": "https://images.pexels.com/photos/4355355/pexels-photo-4355355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating": 3.4,
    "ratingCount": 345,
    "highlights": [
      "Stylish leather biker jacket",
      "Removable hood for versatility",
      "Adjustable cuffs for comfort",
      "Soft lining for extra warmth",
      "Secure pockets for essentials"
    ],
    "material": "Leather"
  },
  {
    "_id": 26,
    "title": "Women's Rain Jacket",
    "oldPrice": 50,
    "price": 39.99,
    "description": "This women's rain jacket is perfect for staying dry and stylish in wet weather. Featuring a hood with adjustable drawstrings and a button-zipper closure, it combines functionality with a fashionable design. Ideal for trips or everyday wear.",
    "category": "women",
    "image": "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.8,
    "ratingCount": 512,
    "highlights": [
      "Perfect for wet weather",
      "Adjustable drawstring hood",
      "Button-zipper closure",
      "Functional and fashionable design",
      "Ideal for trips or daily wear"
    ],
    "material": "Leather"
  },
  {
    "_id": 27,
    "title": "Women's Short Sleeve Neck V",
    "oldPrice": 10,
    "price": 9.85,
    "description": "This women's short sleeve V-neck top is made from a comfortable, stretchy fabric. Its lightweight feel and ribbed neckline make it perfect for casual wear. A great addition to any summer wardrobe.",
    "category": "women",
    "image": "https://images.pexels.com/photos/19096104/pexels-photo-19096104/free-photo-of-model-in-a-black-short-sleeved-v-neck-dress-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 2.6,
    "ratingCount": 238,
    "highlights": [
      "Comfortable stretchy fabric",
      "Lightweight and breathable",
      "Ribbed neckline design",
      "Perfect for casual wear",
      "Great for summer wardrobe"
    ],
    "material": "Polyester"
  },
  {
    "_id": 28,
    "title": "Jean's stylish Jacket",
    "oldPrice": 250,
    "price": 245,
    "description": "This stylish jean jacket offers a modern twist on a classic design. Made from high-quality denim, it features a flattering cut and versatile style that works well for any casual outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 5,
    "ratingCount": 900,
    "highlights": [
      "Modern twist on classic design",
      "High-quality denim fabric",
      "Flattering cut and fit",
      "Versatile style for casual outfits",
      "Timeless and stylish piece"
    ],
    "material": "Leather"
  },
  {
    "_id": 29,
    "title": "Men's White T-Shirt",
    "oldPrice": 25,
    "price": 15.99,
    "description": "This classic white t-shirt for men is crafted from durable, heavyweight cotton. Its relaxed fit provides all-day comfort, making it a versatile choice for both casual and semi-formal wear.",
    "category": "men",
    "image": "https://images.pexels.com/photos/27334187/pexels-photo-27334187/free-photo-of-portrait-of-a-man-crouching.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.5,
    "ratingCount": 750,
    "highlights": [
      "Durable heavyweight cotton",
      "Relaxed fit for comfort",
      "Versatile for various occasions",
      "Ideal for casual or semi-formal",
      "Classic white design"
    ],
    "material": "Nylon"
  },
  {
    "_id": 30,
    "title": "Women's White Pant",
    "oldPrice": 18,
    "price": 12.99,
    "description": "These women's white pants offer a sleek, close-to-body fit that's perfect for layering. Made from a comfortable cotton-spandex blend, they are versatile and ideal for a range of casual outfits.",
    "category": "women",
    "image": "https://images.pexels.com/photos/24516431/pexels-photo-24516431/free-photo-of-woman-in-knitted-turtleneck-sweater-vest-standing-in-gate.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 3.8,
    "ratingCount": 650,
    "highlights": [
      "Sleek close-to-body fit",
      "Comfortable cotton-spandex blend",
      "Versatile for casual outfits",
      "Ideal for layering",
      "Modern and stylish look"
    ],
    "material": "Wool"
  },
  {
    "_id": 31,
    "title": "Men's Blue Jeans",
    "oldPrice": 30,
    "price": 25.99,
    "description": "These men's blue jeans are designed for both comfort and style. Featuring a classic cut and made from durable denim, they are perfect for everyday wear. The versatile design makes them a wardrobe staple.",
    "category": "men",
    "image": "https://images.pexels.com/photos/4321046/pexels-photo-4321046.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.2,
    "ratingCount": 500,
    "highlights": [
      "Comfortable and stylish",
      "Durable denim material",
      "Classic cut design",
      "Perfect for everyday wear",
      "Versatile wardrobe staple"
    ],
    "material": "Nylon"
  },
  {
    "_id": 32,
    "title": "Men Woolen Shirt",
    "oldPrice": 45,
    "price": 30,
    "description": "This Men's woolen scarf is perfect for adding a touch of warmth and style to any outfit. Made from high-quality wool, it offers a soft and cozy feel. Ideal for chilly weather and versatile enough for various styles.",
    "category": "men",
    "image": "https://images.pexels.com/photos/27364090/pexels-photo-27364090/free-photo-of-portrait-of-man-in-sunglasses-and-a-black-shirt-against-the-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.7,
    "ratingCount": 200,
    "highlights": [
      "High-quality wool material",
      "Soft and cozy feel",
      "Adds warmth and style",
      "Ideal for chilly weather",
      "Versatile for various styles"
    ],
    "material": "Wool"
  },
  {
    "_id": 33,
    "title": "Men's Leather Jacket",
    "oldPrice": 35,
    "price": 20.99,
    "description": "This men's leather belt is a timeless accessory that combines functionality and style. Made from genuine leather, it features a sleek design and a sturdy buckle. Perfect for both casual and formal wear.",
    "category": "men",
    "image": "https://images.pexels.com/photos/17049701/pexels-photo-17049701/free-photo-of-model-in-leather-jacket-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.8,
    "ratingCount": 300,
    "highlights": [
      "Timeless leather belt",
      "Genuine leather material",
      "Sleek design with sturdy buckle",
      "Perfect for casual and formal wear",
      "Functional and stylish accessory"
    ],
    "material": "Leather"
  },
  {
    "_id": 34,
    "title": "Women's Floral Dress",
    "oldPrice": 80,
    "price": 70,
    "description": "Embrace a summery vibe with this beautiful floral dress. Its vibrant pattern and lightweight fabric make it perfect for warm weather. Whether for a day out or a casual event, this dress will add a touch of charm to your look.",
    "category": "women",
    "image": "https://images.pexels.com/photos/10544108/pexels-photo-10544108.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.7,
    "ratingCount": 730,
    "highlights": [
      "Vibrant floral pattern",
      "Lightweight fabric",
      "Perfect for warm weather",
      "Adds charm to your look",
      "Ideal for casual events"
    ],
    "material": "Cotton"
  },
  {
    "_id": 35,
    "title": "Men's Denim Jacket",
    "oldPrice": 100,
    "price": 85,
    "description": "This classic denim jacket offers a timeless rugged look. Made from durable denim, it's perfect for layering in various weather conditions. The versatile design ensures it pairs well with almost any casual outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/18867252/pexels-photo-18867252/free-photo-of-man-in-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.8,
    "ratingCount": 970,
    "highlights": [
      "Timeless rugged look",
      "Durable denim material",
      "Versatile for layering",
      "Pairs with many outfits",
      "Ideal for various weather conditions"
    ],
    "material": "Cotton"
  },
  {
    "_id": 36,
    "title": "Women's Leather Jacket",
    "oldPrice": 150,
    "price": 130,
    "description": "Elevate your wardrobe with this stylish leather jacket. Designed for a chic look, it features high-quality leather and a flattering cut. Ideal for both casual and more polished outfits, this jacket adds an edge to any ensemble.",
    "category": "women",
    "image": "https://images.pexels.com/photos/6533837/pexels-photo-6533837.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.9,
    "ratingCount": 940,
    "highlights": [
      "Stylish leather design",
      "High-quality leather",
      "Flattering cut",
      "Adds an edge to outfits",
      "Chic look for any ensemble"
    ],
    "material": "Leather"
  },
  {
    "_id": 37,
    "title": "Men's Check Shirt",
    "oldPrice": 60,
    "price": 55,
    "description": "This men's check shirt combines a classic pattern with modern comfort. Perfect for casual outings, it features a soft, breathable fabric and a stylish checkered design. A versatile addition to any man's wardrobe.",
    "category": "men",
    "image": "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.6,
    "ratingCount": 890,
    "highlights": [
      "Classic checkered pattern",
      "Modern comfort",
      "Soft, breathable fabric",
      "Great for casual outings",
      "Versatile wardrobe addition"
    ],
    "material": "Cotton"
  },
  {
    "_id": 38,
    "title": "Women's Home wear",
    "oldPrice": 90,
    "price": 75,
    "description": "Relax in style with this comfortable women's home wear. Designed for both lounging and casual wear, it features a soft fabric and a relaxed fit. Ideal for cozy days at home or casual outings.",
    "category": "women",
    "image": "https://images.pexels.com/photos/6001444/pexels-photo-6001444.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.4,
    "ratingCount": 710,
    "highlights": [
      "Comfortable and cozy",
      "Soft fabric",
      "Relaxed fit",
      "Great for lounging",
      "Perfect for casual outings"
    ],
    "material": "Cotton"
  },
  {
    "_id": 39,
    "title": "Men's Jogging Outfit",
    "oldPrice": 200,
    "price": 180,
    "description": "This men's jogging outfit is perfect for active lifestyles. It includes comfortable, high-performance fabrics designed for exercise and casual wear. Stay stylish and functional with this versatile outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/5696892/pexels-photo-5696892.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.5,
    "ratingCount": 870,
    "highlights": [
      "High-performance fabrics",
      "Designed for exercise",
      "Comfortable and stylish",
      "Versatile for casual wear",
      "Ideal for active lifestyles"
    ],
    "material": "Polyester"
  },
  {
    "_id": 40,
    "title": "Women's Party Dress",
    "oldPrice": 120,
    "price": 100,
    "description": "Shine at your next event with this elegant party dress. Its sophisticated design and high-quality fabric ensure you make a statement. Perfect for formal occasions, it combines style with comfort.",
    "category": "women",
    "image": "https://images.pexels.com/photos/3419652/pexels-photo-3419652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating": 4.7,
    "ratingCount": 920,
    "highlights": [
      "Elegant design",
      "High-quality fabric",
      "Perfect for formal events",
      "Combines style with comfort",
      "Makes a statement"
    ],
    "material": "Polyester"
  },
  {
    "_id": 41,
    "title": "Men's Formal Shirt",
    "oldPrice": 140,
    "price": 125,
    "description": "A sharp men's formal shirt designed for business and special occasions. Featuring a crisp cut and high-quality fabric, it offers a polished look that complements any formal attire. Ideal for a sophisticated appearance.",
    "category": "men",
    "image": "https://images.pexels.com/photos/4560136/pexels-photo-4560136.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.6,
    "ratingCount": 321,
    "highlights": [
      "Sharp design",
      "Business and special occasions",
      "Crisp cut",
      "High-quality fabric",
      "Polished look"
    ],
    "material": "Cotton"
  },
  {
    "_id": 42,
    "title": "Women's Grey Pant",
    "oldPrice": 50,
    "price": 40,
    "description": "These women's grey pants offer a sleek and elegant look. Ideal for both professional and casual settings, they feature a comfortable fit and versatile style. A must-have for a stylish and practical wardrobe.",
    "category": "women",
    "image": "https://images.pexels.com/photos/5556656/pexels-photo-5556656.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.3,
    "ratingCount": 278,
    "highlights": [
      "Sleek and elegant look",
      "Professional and casual settings",
      "Comfortable fit",
      "Versatile style",
      "Must-have wardrobe"
    ],
    "material": "Polyester"
  },
  {
    "_id": 43,
    "title": "Men's Casual Shorts",
    "oldPrice": 30,
    "price": 25,
    "description": "Perfect for casual wear, these men's shorts provide comfort and style. Made from soft, breathable fabric, they are ideal for warm weather and relaxed settings. A versatile addition to any casual wardrobe.",
    "category": "men",
    "image": "https://images.pexels.com/photos/24284411/pexels-photo-24284411/free-photo-of-candid-photo-of-a-man-walking-on-a-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.4,
    "ratingCount": 354,
    "highlights": [
      "Casual wear",
      "Comfort and style",
      "Soft, breathable fabric",
      "Warm weather",
      "Relaxed settings"
    ],
    "material": "Cotton"
  },
  {
    "_id": 44,
    "title": "Women's Black Suits",
    "oldPrice": 60,
    "price": 50,
    "description": "These women's black suits combine sophistication with a modern edge. Perfect for formal occasions, they feature a classic cut and high-quality fabric. A timeless addition to any professional wardrobe.",
    "category": "women",
    "image": "https://images.pexels.com/photos/1624205/pexels-photo-1624205.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.5,
    "ratingCount": 412,
    "highlights": [
      "Sophisticated look",
      "Modern edge",
      "Formal occasions",
      "Classic cut",
      "High-quality fabric"
    ],
    "material": "Polyester"
  },
  {
    "_id": 45,
    "title": "Men's Baseball Cloth",
    "oldPrice": 25,
    "price": 20,
    "description": "This men's baseball cloth is perfect for casual sports enthusiasts. It features a classic design and comfortable fit, ideal for a game or a casual outing. A great choice for a laid-back, sporty look.",
    "category": "men",
    "image": "https://images.pexels.com/photos/20399731/pexels-photo-20399731/free-photo-of-baseball-player-running-on-field.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.3,
    "ratingCount": 198,
    "highlights": [
      "Casual sports",
      "Classic design",
      "Comfortable fit",
      "Game or outing",
      "Sporty look"
    ],
    "material": "Cotton"
  },
  {
    "_id": 46,
    "title": "Women's Winter Coat",
    "oldPrice": 180,
    "price": 160,
    "description": "Stay warm and stylish with this women's winter coat. Designed for both functionality and fashion, it features a high-quality, insulating fabric and a chic silhouette. Perfect for cold weather and urban settings.",
    "category": "women",
    "image": "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.8,
    "ratingCount": 601,
    "highlights": [
      "Warm and stylish",
      "Functional and fashionable",
      "High-quality fabric",
      "Chic silhouette",
      "Cold weather"
    ],
    "material": "Wool"
  },
  {
    "_id": 47,
    "title": "Men's Wool Sweater",
    "oldPrice": 70,
    "price": 60,
    "description": "This cozy men's wool sweater is perfect for colder weather. Made from soft, insulating wool, it offers both warmth and style. Ideal for layering or wearing on its own, it adds a touch of elegance to any outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/6626075/pexels-photo-6626075.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.6,
    "ratingCount": 329,
    "highlights": [
      "Cozy wool sweater",
      "Colder weather",
      "Soft, insulating wool",
      "Warmth and style",
      "Layering or solo"
    ],
    "material": "Wool"
  },
  {
    "_id": 48,
    "title": "Women's Sports Pant",
    "oldPrice": 40,
    "price": 30,
    "description": "Designed for active lifestyles, these women's sports pants offer comfort and support. Ideal for workouts or casual wear, they feature a flexible fit and breathable fabric. A great choice for staying active and stylish.",
    "category": "women",
    "image": "https://images.pexels.com/photos/6999241/pexels-photo-6999241.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.4,
    "ratingCount": 243,
    "highlights": [
      "Active lifestyles",
      "Comfort and support",
      "Workouts or casual",
      "Flexible fit",
      "Breathable fabric"
    ],
    "material": "Polyester"
  },
  {
    "_id": 49,
    "title": "Men's Gray Blazer",
    "oldPrice": 50,
    "price": 40,
    "description": "This men's gray blazer combines sophistication with a modern touch. Perfect for business or semi-formal events, it features a tailored fit and high-quality fabric. A versatile piece that elevates any outfit.",
    "category": "men",
    "image": "https://images.pexels.com/photos/17927122/pexels-photo-17927122/free-photo-of-brunette-man-posing-in-grey-blazer-and-blue-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.7,
    "ratingCount": 415,
    "highlights": [
      "Sophistication",
      "Modern touch",
      "Business or semi-formal",
      "Tailored fit",
      "High-quality fabric"
    ],
    "material": "Polyester"
  },
  {
    "_id": 50,
    "title": "Men's Black Suits",
    "oldPrice": 70,
    "price": 60,
    "description": "These men's black suits are designed for a refined look. Ideal for formal occasions, they feature a classic cut and premium fabric. A timeless addition to any man's wardrobe, offering elegance and versatility.",
    "category": "men",
    "image": "https://images.pexels.com/photos/15561794/pexels-photo-15561794/free-photo-of-well-dressed-man-standing-next-to-a-luxury-black-car.jpeg?auto=compress&cs=tinysrgb&w=600",
    "rating": 4.5,
    "ratingCount": 376,
    "highlights": [
      "Refined look",
      "Formal occasions",
      "Classic cut",
      "Premium fabric",
      "Timeless addition"
    ],
    "material": "Polyester"
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