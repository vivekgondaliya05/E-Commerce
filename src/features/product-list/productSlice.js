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
    title: "Men's Pullover Hoodie",
    oldPrice: 50,
    price: 39.99,
    description:
      "50% Cotton, 50% Polyester, Imported, Pull On closure, Machine Wash, Reduced pilling and shrinkage for a great fit wash after wash. Wider ribbed cuffs and waistband stay flat and keep the chill out.",
    category: "men",
    image: "https://images.pexels.com/photos/6311316/pexels-photo-6311316.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    size: "xl",
  },
  {
    _id: 4,
    title: "Women's Snowboard Jacket",
    oldPrice: 100,
    price: 56.99,
    description:
      "Note:The Jackets is US standard size.Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Hooded Softshell Jacket: Detachable hood and adjustable cuff, inside phone&wallet zipper pocket, adjustable hem, soft and comfortable wear, waterproof, windproof. Liner Fabric: Warm Fleece - The inner jacket is thicker fleece material, effectively keeping your body warm. Stand collar liner jacket, anti-static snatch, lightweight and comfortable",
    category: "women",
    image: "https://images.pexels.com/photos/6699264/pexels-photo-6699264.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    category: "men",
    image: "https://images.pexels.com/photos/27333766/pexels-photo-27333766/free-photo-of-a-man-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    title: "Women's Short Sleeve shirt",
    oldPrice: 20,
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a great fit Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away from your body. Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women",
    image: "https://images.pexels.com/photos/24233151/pexels-photo-24233151/free-photo-of-woman-in-mini-skirt-and-short-sleeve-shirt-sitting-on-rock.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    size: "xll",
  },

  {
    _id: 11,
    title: "Men's Round neck t-shirt",
    oldPrice: "1000",
    price: 800,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/19618359/pexels-photo-19618359/free-photo-of-man-in-round-eyeglasses-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    size: "xll",
  },
  {
    _id: 12,
    title: "Woman's Black top",
    oldPrice: "200",
    price: 140,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "women",
    image:
      "https://images.pexels.com/photos/10392363/pexels-photo-10392363.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    title: "Men's Blue Jacket",
    oldPrice: "80",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    category: "men",
    image:
      "https://images.pexels.com/photos/11859358/pexels-photo-11859358.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    title: "Mens Casual T-Shirts",
    oldPrice: 25,
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men",
    image:
      "https://images.pexels.com/photos/24446344/pexels-photo-24446344/free-photo-of-young-man-in-polo-shirt-sitting-on-rock-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    category: "men",
    image: "https://images.pexels.com/photos/5369439/pexels-photo-5369439.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      "Women's Leather Biker Jacket",
    oldPrice: 65,
    price: 29.95,
    description:
      "100% POLYURETHANE (shell) 100% POLYESTER (liner) Imported Zipper closure Hand Wash Only Removable hooded faux leather moto jacket. Soft lining, and adjustable cuffs. Adjustable and detachable hooded with drawstring. Two side pockets for secure storage",
    category: "women",
    image: "https://images.pexels.com/photos/4355355/pexels-photo-4355355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 3.4,
    size: "m",
  },
  {
    _id: 26,
    title: "Women's Rain Jacket",
    oldPrice: 50,
    price: 39.99,
    description:
      "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and the Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women",
    image: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 2.8,
    size: "l",
  },
  {
    _id: 27,
    title: "Women's Short Sleeve Neck V",
    oldPrice: 10,
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women",
    image: "https://images.pexels.com/photos/19096104/pexels-photo-19096104/free-photo-of-model-in-a-black-short-sleeved-v-neck-dress-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    title: "Men's White T-Shirt",
    oldPrice: 25,
    price: 15.99,
    description:
      "100% Cotton, Imported, Pull On closure, Machine Wash, Heavyweight and durable, our classic long-sleeve Beefy-T is made to last. Relaxed fit for added comfort.",
    category: "men",
    image: "https://images.pexels.com/photos/27334187/pexels-photo-27334187/free-photo-of-portrait-of-a-man-crouching.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    size: "l",
  },
  {
    _id: 30,
    title: "Women's White Pant",
    oldPrice: 18,
    price: 12.99,
    description:
      "95% Cotton, 5% Spandex, Imported, Machine Wash, Sleeveless design with a smooth, close-to-body fit, versatile and perfect for layering.",
    category: "women",
    image: "https://images.pexels.com/photos/24516431/pexels-photo-24516431/free-photo-of-woman-in-knitted-turtleneck-sweater-vest-standing-in-gate.jpeg?auto=compress&cs=tinysrgb&w=600",
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
  {
    _id: 32,
    title: "Elegant Evening Dress",
    oldPrice: 120,
    price: 99.99,
    description: "Stunning evening dress perfect for formal events.",
    category: "women",
    image: "https://brownliving.in/cdn/shop/products/primrose-elegant-evening-dress-verified-sustainable-products-on-brown-living-782242_1024x.jpg?v=1697807711",
    rating: 4.5,
    size: "m",
  },
  {
    _id: 33,
    title: "Casual Men's Shirt",
    oldPrice: 40,
    price: 35,
    description: "Comfortable casual shirt for everyday wear.",
    category: "men",
    image: "https://www.jiomart.com/images/product/500x630/rvtdvtuhds/coloured-collar-t-shirt-for-men-casual-regular-fit-t-shirt-pure-cotton-lightweight-comfortable-classic-t-shirt-classic-vertical-stripes-medium-green-product-images-rvtdvtuhds-0-202209090825.jpg",
    rating: 4.2,
    size: "l",
  },
  {
    _id: 34,
    title: "Women's Floral Dress",
    oldPrice: 80,
    price: 70,
    description: "Beautiful floral dress for a summery look.",
    category: "women",
    image: "https://images.pexels.com/photos/10544108/pexels-photo-10544108.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    size: "s",
  },
  {
    _id: 35,
    title: "Men's Denim Jacket",
    oldPrice: 100,
    price: 85,
    description: "Classic denim jacket for a rugged look.",
    category: "men",
    image: "https://images.pexels.com/photos/18867252/pexels-photo-18867252/free-photo-of-man-in-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    size: "xl",
  },
  {
    _id: 36,
    title: "Women's Leather Jacket",
    oldPrice: 150,
    price: 130,
    description: "Stylish leather jacket for a chic look.",
    category: "women",
    image: "https://images.pexels.com/photos/6533837/pexels-photo-6533837.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    size: "m",
  },
  {
    _id: 37,
    title: "Men's Check Shirt",
    oldPrice: 60,
    price: 55,
    description: "Comfortable sneakers for casual outings.",
    category: "men",
    image: "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    size: "l",
  },
  {
    _id: 38,
    title: "Women's Home wear",
    oldPrice: 90,
    price: 75,
    description: "High-performance running shoes for women.",
    category: "women",
    image: "https://images.pexels.com/photos/6001444/pexels-photo-6001444.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    size: "s",
  },
  {
    _id: 39,
    title: "Men's Jogging Outfit",
    oldPrice: 200,
    price: 180,
    description: "Durable sports watch for active men.",
    category: "men",
    image: "https://images.pexels.com/photos/5696892/pexels-photo-5696892.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    size: "m",
  },
  {
    _id: 40,
    title: "Women's Party Dress",
    oldPrice: 120,
    price: 100,
    description: "Elegant handbag for a sophisticated look.",
    category: "women",
    image: "https://images.pexels.com/photos/3419652/pexels-photo-3419652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    size: "m",
  },
  {
    _id: 41,
    title: "Men's Formal Shirt",
    oldPrice: 140,
    price: 125,
    description: "Stylish formal shoes for men.",
    category: "men",
    image: "https://images.pexels.com/photos/4560136/pexels-photo-4560136.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    size: "l",
  },
  {
    _id: 42,
    title: "Women's Grey Pant",
    oldPrice: 50,
    price: 40,
    description: "Elegant scarf for a fashionable look.",
    category: "women",
    image: "https://images.pexels.com/photos/5556656/pexels-photo-5556656.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    size: "m",
  },
  {
    _id: 43,
    title: "Men's Casual Shorts",
    oldPrice: 30,
    price: 25,
    description: "Comfortable shorts for casual wear.",
    category: "men",
    image: "https://images.pexels.com/photos/24284411/pexels-photo-24284411/free-photo-of-candid-photo-of-a-man-walking-on-a-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    size: "xl",
  },
  {
    _id: 44,
    title: "Women's Black suits",
    oldPrice: 60,
    price: 50,
    description: "Stylish sunglasses for women.",
    category: "women",
    image: "https://images.pexels.com/photos/1624205/pexels-photo-1624205.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    size: "m",
  },
  {
    _id: 45,
    title: "Men's Baseball cloth",
    oldPrice: 25,
    price: 20,
    description: "Classic baseball cap for men.",
    category: "men",
    image: "https://images.pexels.com/photos/20399731/pexels-photo-20399731/free-photo-of-baseball-player-running-on-field.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    size: "l",
  },
  {
    _id: 46,
    title: "Women's Winter Coat",
    oldPrice: 180,
    price: 160,
    description: "Warm and stylish winter coat for women.",
    category: "women",
    image: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    size: "m",
  },
  {
    _id: 47,
    title: "Men's Wool Sweater",
    oldPrice: 70,
    price: 60,
    description: "Cozy wool sweater for men.",
    category: "men",
    image: "https://images.pexels.com/photos/6626075/pexels-photo-6626075.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    size: "xl",
  },
  {
    _id: 48,
    title: "Women's Sports pant",
    oldPrice: 40,
    price: 30,
    description: "Comfortable and supportive sports pant.",
    category: "women",
    image: "https://images.pexels.com/photos/6999241/pexels-photo-6999241.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    size: "s",
  },
  {
    _id: 49,
    title: "Men's Gray Blazer",
    oldPrice: 50,
    price: 40,
    description: "Durable leather wallet for men.",
    category: "men",
    image: "https://images.pexels.com/photos/17927122/pexels-photo-17927122/free-photo-of-brunette-man-posing-in-grey-blazer-and-blue-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    size: "m",
  },
  {
    _id: 50,
    title: "Men's Black Suits",
    oldPrice: 70,
    price: 60,
    description: "Elegant necklace for women.",
    category: "men",
    image: "https://images.pexels.com/photos/15561794/pexels-photo-15561794/free-photo-of-well-dressed-man-standing-next-to-a-luxury-black-car.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
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