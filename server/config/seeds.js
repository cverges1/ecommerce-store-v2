const db = require("./connection");
const { User, Product, Category, Order } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { categoryName: 'Food', categoryImage: "https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Dog_Cat_Storefront/Dog_Tile_Food_440x440_ENG.jpg" },
    { categoryName: 'Toys', categoryImage: "https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Dog_Cat_Storefront/Dog_Tile_Toys_440x440_ENG.jpg" },
    { categoryName: 'Leashes', categoryImage: "https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Dog_Cat_Storefront/Dog_Tile_Collar_Leashes_440x440_ENG.jpg" },
    { categoryName: 'Beds', categoryImage: "https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Dog_Cat_Storefront/Dog_Tile_Bed_Furniture_440x440_ENG.jpg" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Purina ONE ",
      description: "Chicken and Rice Formula Dry Dog Food - 40 lb. Bag",
      price: 54.99,
      image: "https://m.media-amazon.com/images/I/719YSIMps7L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Blue Buffalo",
      description:
        "Life Protection Formula Natural Adult Dry Dog Food, Chicken and Brown Rice 30-lb.",
      price: 63.99,
      image: "https://m.media-amazon.com/images/I/71gUaaYXmjL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Wellness",
      description:
        "Complete Health Dry Dog Food with Grains, Made in USA with Real Meat & Natural Ingredients, All Breeds, Adult Dogs (Chicken & Oatmeal, 30-lb) – With Nutrients for Immune, Skin, & Coat Support",
      price: 69.98,
      image:
        "https://m.media-amazon.com/images/I/71pUFr37V6L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Blue Buffalo",
      description:
        "Blue Buffalo Life Protection Formula Natural Adult Dry Dog Food, Chicken and Brown Rice 5-lb Trial Size Bag.",
      price: 14.99,
      image:
        "https://m.media-amazon.com/images/I/81qYRubwRpL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Squeaky Carrot Toy",
      description:
        "Dog Squeaky Chew Toys for Aggressive Chewers, Rubber Carrot Dog Toys for Training and Cleaning, Durable Interactive Tough Dog Toy for Puppy Medium Dogs.",
      price: 11.99,
      image: "https://m.media-amazon.com/images/I/61y3+f4n3pL._AC_SX679_.jpg",
      categoryID: categories[1]._id,
        },
    {
      name: "ESYLIF 20 pack Chew Toys",
      description:
        "Puppy Chew Toys for Teething, Interactive Dog Rope Toys with Bin for Small Medium Breed.",
      price: 20.99,
      image:
        "https://m.media-amazon.com/images/I/71GZhJAdpSL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
        },
    {
      name: "SHARLOVY Dog Squeaky Toys",
      description:
        "Squeaky Toys 5 Pack, Pet Toys Crinkle Dog Toy No Stuffing Animals Dog Plush Toy Dog Chew Toy for Large Dogs and Medium Dogs Squeeky Doggie Toys Puppy Toys Squeak.",
      price: 22.99,
      image:"https://m.media-amazon.com/images/I/71jYYOy8pkL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
        },
    {
      name: "Crinkle Duck",
      description:
        "Best Pet Supplies Crinkle Dog Toy for Small, Medium, and Large Breeds, Cute No Stuffing Duck with Soft Squeaker.",
      price: 5.99,
      salePrice: 3.99,
      image: "https://m.media-amazon.com/images/I/61iLNIUwPnL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
        },
    {
      name: "BARKBAY Leash for Large Dogs",
      description:
        "Dog leashes for Large Dogs Rope Leash Heavy Duty Dog Leash with Comfortable Padded Handle and Highly Reflective Threads 5 FT for Small Medium Large Dogs(Orange).",
      price: 25.99,
      image: "https://m.media-amazon.com/images/I/81OElq5BNWL._AC_SX679_.jpg",
      categoryID: categories[2]._id,
        },
    {
      name: "Petmegoo Strong Green Dog Leash",
      description:
        "5ft 1/2in for Large Dogs & Medium Size Dogs - Highly Reflective Heavy Duty Dog Rope Leash with Soft Padded Anti-Slip Handle- for 18-120 lbs Dogs.",
      price: 8.99,
      image: "https://m.media-amazon.com/images/I/71qm9q3z5oL._AC_SX679_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Annalovic Dog Leash",
      description:
        "Quick Release Buckle,Training Dog Leash,Dog's Leash with Rotating Frog Clip, 2 Soft Control Handles,and Reflective Threads. (Black, L).",
      price: 15.99,
      salePrice: 12.99,
      image: "https://m.media-amazon.com/images/I/71piL0mcnCL._AC_SX679_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Petmegoo Strong Purple Dog Leash",
      description:
        "5ft 1/2in for Large Dogs & Medium Size Dogs - Highly Reflective Heavy Duty Dog Rope Leash with Soft Padded Anti-Slip Handle- for 18-120 lbs Dogs.",
      price: 8.99,
      image: "https://m.media-amazon.com/images/I/71E8EEfV+2S._AC_SX679_.jpg",
      categoryID: categories[2]._id,
        },
    {
      name: "pettycare Washable Dog Bed",
      description:
        "Washable Dog Bed for Extra Large Dogs with Waterproof Liner, Shredded Memory Foam XL Dog Crate Bed with Removable Cover, Fit Up to 90 LBs Pet Mat Pillow.",
      price: 39.99,
      salePrice: 25.78,
      image: "https://m.media-amazon.com/images/I/71aiE1rGXdL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "pettycare Washable Dog Bed",
      description:
        "Washable Dog Beds for Large Dogs with Waterproof Liner, Shredded Memory Foam Big Dog Crate Bed with Removable Cover, Fit Up to 75 LBs Pet Mat Pillow.",
      price: 37.99,
      salePrice: 30.99,
      image: "https://m.media-amazon.com/images/I/715x5bU9dWL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "pettycare Washable Dog Bed",
      description:
        "Washable Dog Beds for Medium and Large Dogs with Waterproof Liner Pet Bed, Shredded Memory Foam Dog Crate Bed with Removable Cover, Fit Up to 65 LBs Pet Mat Pillow Orthopedic Beds.",
      price: 29.99,
      image: "https://m.media-amazon.com/images/I/718+VuWUpSL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "MIXJOY Dog Bed",
      description: "Dog Bed for Small Medium Large Dogs.",
      price: 29.99,
      image: "https://m.media-amazon.com/images/I/71YgN8ASz8L._AC_SX679_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Merrick Dry Dog Food",
      description:
        "Dry Dog Food Real Chicken and Sweet Potato Grain Free Dog Food Recipe - 22 lb. Bag.",
      price: 58.99,
      salePrice: 45.99,
      image: "https://m.media-amazon.com/images/I/81gqf05avrL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Merrick Backcountry Raw Infused Grain Free Dog Food",
      description:
        "Great Plains Red Recipe, Freeze Dried Dog Food - 20.0 LB Bag.",
      price: 61.36,
      image: "https://m.media-amazon.com/images/I/81lb5+BvU0L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "JustFoodForDogs Pantry Fresh Dog Food",
      description: "Human Grade Beef & Russet Potato (6 Pack)",
      price: 48.99,
      image: "https://m.media-amazon.com/images/I/71B3wg3i9EL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Hill's Science Diet Adult Small & Toy Breed Dry Dog Food",
      description: "Chicken Meal & Rice Recipe, 15.5 lb. Bag",
      price: 51.99,
      image: "https://m.media-amazon.com/images/I/71U+j7MrRqL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "IAMS Adult Minichunks Small Kibble",
      description: "High Protein Dry Dog Food with Real Chicken, 30 lb. Bag",
      price: 46.98,
      salePrice: 37.67,
      image:  "https://m.media-amazon.com/images/I/81z6zWIAcqL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Hill's Science Diet Dry Dog Food",
      description: "Adult, Small Bites, Chicken & Barley Recipe, 5 lb. Bag",
      price: 18.99,
      image: "https://m.media-amazon.com/images/I/71-W2-dk-dL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Pedigree Complete Nutrition",
      description:
        "Adult Dry Dog Food Grilled Steak & Vegetable Flavor Dog Kibble, 18 lb. Bag",
      price: 16.99,
      image: "https://m.media-amazon.com/images/I/819YhtIT70L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Rachael Ray Nutrish Premium Natural Dry Dog Food",
      description:
        "Real Chicken & Veggies Recipe, 14 Pounds (Packaging May Vary)",
      price: 22.99,
      image: "https://m.media-amazon.com/images/I/81OqkdQO3BL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "ORIJEN Dog Small Breed Recipe",
      description:
        "4lb, High-Protein Grain-Free Dry Dog Food, Packaging May Vary",
      price: 27.91,
      salePrice: 23.67,
      image: "https://m.media-amazon.com/images/I/61sC9qVHdFL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "PEDIGREE CHOPPED GROUND DINNER",
      description:
        "Adult Soft Wet Dog Food 30-Count Variety Pack, 3.5 Ounce (Pack of 30)",
      price: 25.98,
      image: "https://m.media-amazon.com/images/I/81a+4amZXZL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Blue Buffalo Wilderness High Protein Wet Food",
      description:
        "Natural Adult Wet Dog Food, Beef & Chicken Grill 12.5-oz cans (Pack of 12)",
      price: 39.89,
      salePrice: 28.99,
      image: "https://m.media-amazon.com/images/I/71XWcBxbg6L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
        },
    {
      name: "Purina Pro Plan High Protein Dog Food",
      description:
        "Dog Food With Probiotics for Dogs, Shredded Blend Chicken & Rice Formula - 18 lb. Bag",
      price: 61.98,
      salePrice: 53.99,
      image: "https://m.media-amazon.com/images/I/714-0zLvyVL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[0]._id,
    },
    {
      name: "Multipet  Lambchop",
      description: "Plush Dog Toy, 10in, White/Tan, Small",
      price: 12.99,
      image: "https://m.media-amazon.com/images/I/81O7mf19NeL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Outward Hound Dog Tornado",
      description: "Interactive Treat Puzzle Dog Toy",
      price: 15.97,
      image: "https://m.media-amazon.com/images/I/61g9ARDrOuL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Multipet's Original Loofa",
      description: "Jumbo Dog Toy in Assorted Colors, 24-Inch",
      price: 11.98,   
      image: "https://m.media-amazon.com/images/I/81mctuUH+HL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Outward Hound Hide A Squirrel",
      description: "Plush Dog Toy Puzzle, XL",
      price: 20.99,
      image:"https://m.media-amazon.com/images/I/61wmAautqqL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Chuckit! Ultra Ball Dog Toy",
      description: "Medium (2.5 Inch Diameter) Pack of 2, for breeds 20-60 lbs",
      price: 13.99,
      salePrice: 10.99,
      image: "https://m.media-amazon.com/images/I/71B+vl+fAGL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Benebone Wishbone Dog Chew Toy",
      description:
        "Durable Dog Chew Toy for Aggressive Chewers, Made in USA, Small, Real Bacon Flavors",
      price: 11.45,
      image: "https://m.media-amazon.com/images/I/81zhf+sZMTL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Chuckit! Ultra Fetch Stick",
      description: "Outdoor Dog Toy, for All Breed Sizes Medium",
      price: 7.98,
      image: "https://m.media-amazon.com/images/I/41O8BtTdd7L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Outward Hound Activity Matz Garden Game",
      description: "Interactive Plush Dog Puzzle Mat",
      price: 26.99,
      image: "https://m.media-amazon.com/images/I/91tomdrHSJL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    
    },
    {
      name: "CHIWAVA 3 Pack 9in Squeaky Latex Dog Toys Standing Stick Animal Puppy Fetch Interactive Play for Small Medium Dogs",
      description: "Medium (2.5 Inch Diameter) Pack of 2, for breeds 20-60 lbs",
      price: 14.98,
      image: "https://m.media-amazon.com/images/I/51SduLjLHIL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "KONG - Classic Dog Toy",
      description:
        "Durable Natural Rubber- Fun to Chew, Chase and Fetch - for Medium Dogs",
      price: 12.99,      
      image: "https://m.media-amazon.com/images/I/61TlwhGwa0L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Multipet's Globlet Pig Dog Toy, Assorted Colors",
      description: "Polka Dot 9-Inch Latex Pig Dog Toy",
      price: 6.99,
      image: "https://m.media-amazon.com/images/I/61BfiTD29-L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "Petstages Orka Dental Links Dog Chew Toy",
      description: "Dental Links Chew Toy for K-9 dental health",
      price: 5.69,
      image: "https://m.media-amazon.com/images/I/71NXsZlgxLL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[1]._id,
    },
    {
      name: "BARKBAY No Pull Dog Harness",
      description:
        "No Pull Dog Harness Front Clip Heavy Duty Reflective Easy Control Handle for Large Dog Walking(Black,L)",
      price: 36.99,
      image: "https://m.media-amazon.com/images/I/711xJmBkzFL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
        },
    {
      name: "PAWBLEFY Personalized Dog Collars",
      description:
        "Reflective Nylon Collar Customized with Name and Phone Number",
      price: 12.75,
      image: "https://m.media-amazon.com/images/I/91uoXCKBIRL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Puppytie No Pull Small Dog Harness",
      description:
        "Small Dog Harness with Multifunction Dog Leash, Lightweight Soft Adjustable No Choke",
      price: 34.99,
      image: "https://m.media-amazon.com/images/I/81DH70J1sHL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "AMTOR Dog Harness with Leash Set",
      description:
        "No Pull Adjustable Reflective Step-in Puppy Harness with Padded Vest",
      price: 10.76,
      image: "https://m.media-amazon.com/images/I/71dbFVAvn-L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Joytale Reflective Dog Collar",
      description:
        "Soft Neoprene Padded Breathable Nylon Pet Collar Adjustable for Medium Dogs",
      price: 13.99,
      image: "https://m.media-amazon.com/images/I/81ckBYo9vZL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "PUPTECK Adjustable Dog Harness Collar and Leash Set",
      description: "Step in No Pull Pet Harness for Small Medium Dogs",
      price: 19.99,
      salePrice: 13.99,
      image: "https://m.media-amazon.com/images/I/81vOUU+WTBL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Ladoogo Reflective Collar",
      description:
        "Padded with Soft Neoprene Breathable Adjustable Nylon Collars for Small Medium Large Dogs",
      price: 12.67,
      image: "https://m.media-amazon.com/images/I/812KMoIXB5L._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Ruffwear, Front Range Dog Collar",
      description:
        "Durable and Comfortable Collar for Everyday Use, Blue Moon, 11-14in",
      price: 14.75,
      image: "https://m.media-amazon.com/images/I/711tHqbTIOL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Leashboss Patterned Reflective Dog Collar",
      description:
        "Pattern Collection, Colorful Dog Collar with Triple Reflection Threads for Small Dogs",
      price: 9.99,
      image: "https://m.media-amazon.com/images/I/613b1eIRTrL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "rabbitgoo Dog Harness",
      description:
        "No-Pull Pet Harness with 2 Leash Clips, Adjustable Soft Padded Dog Vest, Reflective No-Choke Pet Harness",
      price: 17.98,
      image:"https://m.media-amazon.com/images/I/71QaVHD-ZDL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    
    },
    {
      name: "BAAPET Dog Leash ",
      description:
        "2/4/5/6 FT Dog Leash with Comfortable Padded Handle and Highly Reflective Threads for Small Medium and Large Dogs",
      price: 9.67,
      image: "https://m.media-amazon.com/images/I/71N6-ce56xL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "DAGANXI Tactical Dog Collar",
      description:
        "Adjustable Military Training Nylon Dog Collar with Control Handle and Heavy Metal Buckle for Medium and Large Dogs, with Patches and Airtags Case (L, Black)",
      price: 15.99,
      image:"https://m.media-amazon.com/images/I/81fZnXqQJ4S._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[2]._id,
    },
    {
      name: "Bedsure Dog Bed for Large Dogs",
      description:
        "Big Orthopedic Dog Bed with Removable Washable Cover, Egg Crate Foam Pet Bed Mat, Suitable for Dogs Up to 65 lbs",
      price: 34.99,      
      image: "https://m.media-amazon.com/images/I/81-dZuQVtrL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Carhartt Firm Duck Dog Bed Dark Brown, Large",
      description: "Duck Dog Bed Dark Brown for Large Dogs",
      price: 129.45,
      image: "https://m.media-amazon.com/images/I/81fEhkvQVmL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Bedsure Memory Foam Dog Bed for Large Dogs",
      description:
        "Orthopedic Waterproof Dog Bed for Crate with Removable Washable Cover and Nonskid Bottom - Plush Flannel Fleece Top Pet Bed, Grey",
      price: 45.99,      
      image: "https://m.media-amazon.com/images/I/81maS7Jzu1L._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Washable Dog Bed",
      description:
        "Dog bed for Large Dogs, Anti-Slip Dog Crate Bed for Large Medium Small Dogs, Dog beds & Furniture",
      price: 29.99,
      image: "https://m.media-amazon.com/images/I/81oV1SdKTIL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Calming Dog Bed Fluffy Plush Dog Mat for Furniture Protector ",
      description:
        "Calming Dog Bed and Mat with Removable Washable Cover for Large Medium Small Dogs and Cats (Large(45x37x6), Light Grey)",
      price: 49.99,
      salePrice: 43.99,
      image: "https://m.media-amazon.com/images/I/61-eM8zM53L._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Coolaroo The Original Cooling Elevated Dog Bed",
      description: "Elevated Dog Bed, Indoor and Outdoor, Large, Aquatic Blue",
      price: 30.59,
      image: "https://m.media-amazon.com/images/I/61zNCgxrSyL._AC_UL640_FMwebp_QL65_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Calming Dog & Cat Bed",
      description:
        "Anti-Anxiety Donut Cuddler Warming Cozy Soft Round Bed, Fluffy Faux Fur Plush Cushion bed for Small Medium Dogs and Cats (20in/24in/27in/30in)",
      price: 22.34,
      image: "https://m.media-amazon.com/images/I/81zPcrN6m+L._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "BFPETHOME Dog Beds for Large Dogs",
      description:
        "Orthopedic Dog Bed for Medium Large Dogs, Egg- Foam Dog Crate Bed (L(36 * 27 * 6.5) Inch, Grey)",
      price: 45.32,
      image: "https://m.media-amazon.com/images/I/71xoNcXe-OL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Bedsure Orthopedic Dog Bed for Medium Dogs",
      description:
        "Foam Sofa with Removable Washable Cover, Waterproof Lining and Nonskid Bottom Couch, Pet Bed",
      price: 59.99,
      salePrice: 51.99,
      image: "https://m.media-amazon.com/images/I/71TgLdByn5L._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "Veehoo Original Cooling Elevated Dog Bed",
      description:
        "Outdoor Raised Dog Cots Bed for Large Dogs, Portable Standing Pet Bed with Washable Breathable Mesh, No-Slip Feet for Indoor Outdoor, Large, Black",
      price: 38.43,
      image: "https://m.media-amazon.com/images/I/61oS2S70T0L._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
    {
      name: "DEBANG HOME Dog Mattress",
      description:
        "Large Dog Bed for Large Dogs, Medium Dog Bed, Small Dog Bed,Soft and Comfortable Dog Bed, Washable Plush Dog cage mat",
      price: 32.33,
      image: "https://m.media-amazon.com/images/I/81GuvzgxHDL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    
    },
    {
      name: "KISYYO Dog Beds for Large Dogs",
      description:
        "Fixable Deluxe Cozy Dog Kennel Beds for Crates Washable Dog Bed, 36 x 23 x 3.8 Inches, Grey",
      price: 21.99,
      image: "https://m.media-amazon.com/images/I/71znDowI2KL._AC_SX679_.jpg",
      categoryID: categories[3]._id,
    },
  ]);

  console.log('products seeded');

process.exit();
});
