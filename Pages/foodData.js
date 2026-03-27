// foodData.js - Central data store for all food information
// This file contains data for all foods across breakfast, lunch, dinner, and snack categories
// Each food object includes: id (unique identifier), name, description, image (path), videoUrl (YouTube embed), steps (array of cooking instructions)

const foodData = [
    // Breakfast Foods
    {
        id: 'noodles',
        name: 'Noodles',
        description: 'A quick and flavorful noodle dish tossed with fresh ingredients and savory sauce perfect for your Breakfast',
        image: '../images/noodles.jpg',
        videoUrl: 'https://www.youtube.com/embed/i_5P0vTqqP0?si=gkDWLK_EGAFuA_ff',
        steps: [
            'Boil water in a large pot and add noodles.',
            'Cook noodles according to package instructions until al dente.',
            'Drain noodles and rinse with cold water.',
            'In a pan, heat oil and sauté vegetables and protein.',
            'Add cooked noodles and sauce, toss to combine.',
            'Serve hot with optional toppings.'
        ]
    },
    {
        id: 'plantain',
        name: 'Fried Plantain and Eggs',
        description: 'A classic and satisfying combination of sweet fried plantains and perfectly cooked eggs quick, tasty, and filling.',
        image: '../images/plantainegg.jpg',
        videoUrl: 'https://www.youtube.com/embed/dZ6VkI1UXuY?si=2Cs0Y2Kgwtqzg4rP',
        steps: [
            'Peel and slice plantains into thin pieces.',
            'Heat oil in a frying pan over medium heat.',
            'Fry plantain slices until golden brown on both sides.',
            'In a separate pan, crack and cook eggs to your preference.',
            'Season eggs with salt and pepper.',
            'Serve fried plantains with eggs on the side.'
        ]
    },
    {
        id: 'toasted',
        name: 'Toasted Bread',
        description: 'Perfectly toasted bread with a crunchy exterior and soft center, ideal for pairing with spreads or savory toppings.',
        image: '../images/Toast.jpg',
        videoUrl: 'https://www.youtube.com/embed/W6ern8zb_9A?si=rwR2DWZPad9RMqlU', // Placeholder - replace with actual video ID
        steps: [
            'Slice bread to desired thickness.',
            'Place slices in a toaster or on a hot skillet.',
            'Toast until golden brown on both sides.',
            'Spread butter or your favorite topping.',
            'Add any additional toppings like avocado or jam.',
            'Serve immediately while warm.'
        ]
    },
    {
        id: 'moimoi',
        name: 'Moi Moi',
        description: 'Deliciously smooth moi moi made from seasoned beans, perfectly steamed to create a rich, savory, and satisfying dish.',
        image: '../images/moimoi.jpg',
        videoUrl: 'https://www.youtube.com/embed/YQFKFEdRViI?si=GHjWZktu-xcwNPgV', // Placeholder - replace with actual video ID
        steps: [
            'Soak beans overnight and peel the skin.',
            'Blend beans with onions, peppers, and seasonings.',
            'Add oil, crayfish, and other ingredients to the paste.',
            'Wrap mixture in leaves or foil.',
            'Steam for 45-60 minutes until firm.',
            'Allow to cool slightly before serving.'
        ]
    },
    {
        id: 'eggsauce',
        name: 'Egg Sauce with Bread',
        description: 'Rich and flavorful egg sauce paired with golden bread perfectly balanced for a hearty and delicious breakfast.',
        image: '../images/egg-sauce.jpg',
        videoUrl: 'https://www.youtube.com/embed/VZ_va8TEGic?si=S-CeS_gVYeTvvDVo', // Placeholder - replace with actual video ID
        steps: [
            'Chop onions, tomatoes, and peppers.',
            'Heat oil in a pan and sauté vegetables.',
            'Add spices and simmer to create sauce base.',
            'Crack eggs into the sauce and stir gently.',
            'Cook until eggs are set but still soft.',
            'Serve over toasted bread.'
        ]
    },
    {
        id: 'yam',
        name: 'Yam and Egg sauce',
        description: 'Tender boiled yam served with a rich and savory egg sauce, making a hearty and satisfying breakfast or brunch.',
        image: '../images/yam.jpg',
        videoUrl: 'https://www.youtube.com/embed/qPfdvbf_GkA?si=Obpy4x4aymk3uD7e', // Placeholder - replace with actual video ID
        steps: [
            'Peel and cut yam into chunks.',
            'Boil yam in salted water until tender.',
            'Prepare egg sauce by sautéing vegetables.',
            'Add eggs to the sauce and cook through.',
            'Season sauce with spices and herbs.',
            'Serve boiled yam topped with egg sauce.'
        ]
    },

    // Lunch Foods
    {
        id: 'jollofrice',
        name: 'Jollof Rice',
        description: 'Fragrant long-grain rice bathed in a savory blend of onions, scotch bonnets, and aromatic spices for a deep, soul-warming heat.',
        image: '../images/ricee.jpg',
        videoUrl: 'https://www.youtube.com/embed//EfZEArZcfAY?si=xD2mdSruoNw4H1Ii', // Placeholder - replace with actual video ID
        steps: [
            'Blend tomatoes, peppers, and onions.',
            'Heat oil and fry blended mixture.',
            'Add spices, stock cubes, and water.',
            'Add washed rice and stir well.',
            'Cover and cook on low heat until rice is tender.',
            'Fluff rice and serve hot.'
            
        ]
    },
    {
        id: 'ebaokra',
        name: 'Eba and Okra Soup',
        description: 'Traditional Nigerian dish made with fermented cassava flour and nutritious okra soup.',
        image: '../images/soup.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Prepare eba by mixing garri with hot water.',
            'Stir until smooth and set aside.',
            'For soup: blend okra and cook with palm oil.',
            'Add fish, meat, and seasonings.',
            'Simmer until flavors meld.',
            'Serve eba with okra soup.'
        ]
    },
    {
        id: 'yamporridge',
        name: 'Yam Porridge',
        description: 'Smooth and hearty yam porridge, a comforting staple dish with a rich, creamy texture.',
        image: '../images/yampot.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Peel and dice yam into small pieces.',
            'Boil yam with water and palm oil.',
            'Add onions, peppers, and spices.',
            'Simmer until yam is soft and porridge-like.',
            'Add protein like fish or meat if desired.',
            'Serve hot as a comforting meal.'
        ]
    },
    {
        id: 'jollofspaghetti',
        name: 'Jollof Spaghetti',
        description: 'Delicious lunch option description here.',
        image: '../images/spagg.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Break spaghetti into smaller pieces.',
            'Prepare jollof base with blended tomatoes.',
            'Cook spaghetti in the jollof sauce.',
            'Add spices and seasonings.',
            'Simmer until spaghetti is cooked.',
            'Serve as a flavorful pasta dish.'
        ]
    },
    {
        id: 'catfishsoup',
        name: 'Catfish Pepper Soup',
        description: 'Delicious lunch option description here.',
        image: '../images/fish.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Clean and cut catfish into pieces.',
            'Boil water with spices and herbs.',
            'Add catfish and cook until tender.',
            'Add peppers, onions, and seasonings.',
            'Simmer for additional flavor.',
            'Serve hot as a spicy soup.'
        ]
    },
    {
        id: 'macaroni',
        name: 'Macaroni',
        description: 'Lush, tomato-glazed pasta simmered until every curve is packed with a rich, seasoned reduction and a hint of butter for a silky finish.',
        image: '../images/mac.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Boil macaroni according to package instructions.',
            'Prepare tomato sauce with vegetables.',
            'Cook sauce until thickened.',
            'Drain macaroni and mix with sauce.',
            'Add cheese or other toppings if desired.',
            'Serve warm as a comforting dish.'
        ]
    },

    // Dinner Foods
    {
        id: 'wheatbitter',
        name: 'Wheat and Bitter Leaf Soup',
        description: 'A hearty and nutritious soup made with wheat and bitter leaf, perfect for a satisfying dinner.',
        image: '../images/bitter leaf.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Cook wheat until soft.',
            'Wash and chop bitter leaf.',
            'Prepare soup base with palm oil and spices.',
            'Add cooked wheat and bitter leaf.',
            'Simmer to combine flavors.',
            'Serve as a nutritious dinner soup.'
        ]
    },
    {
        id: 'spaghetticatfish',
        name: 'Spaghetti & Catfish',
        description: 'Hey ya\'ll let\'s make fried catfish and spaghetti and meatballs! This is a classic fish Friday in the South, but we also do it with hushpuppies and friesDelicious dinner option description here.',
        image: '../images/spagfish.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Cook spaghetti according to instructions.',
            'Fry catfish fillets until crispy.',
            'Prepare meatballs with ground meat.',
            'Cook meatballs in sauce.',
            'Combine spaghetti, catfish, and meatballs.',
            'Serve with your favorite sauce.'
        ]
    },
    {
        id: 'agidi',
        name: 'Agidi and Stew',
        description: 'Delicious dinner option description here How to make Agidi and Ofe Akwu.',
        image: '../images/agidi.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Prepare cornmeal dough for agidi.',
            'Steam dough until firm.',
            'Prepare stew with palm oil and vegetables.',
            'Add meat or fish to stew.',
            'Cook until flavors develop.',
            'Serve agidi with hot stew.'
        ]
    },
    {
        id: 'sweetpotatoes',
        name: 'Boiled Sweet Potatoes and Scrambled Eggs',
        description: 'Delicious dinner option description here.',
        image: '../images/fruit.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Boil sweet potatoes until tender.',
            'Scramble eggs in a pan.',
            'Season eggs with salt and pepper.',
            'Drain potatoes and serve.',
            'Top with scrambled eggs.',
            'Enjoy as a simple dinner.'
        ]
    },
    {
        id: 'vegetablepasta',
        name: 'Vegetable Pasta Medley',
        description: 'Delicious dinner option description here Choosing grains is not just good for your health, it can also be delicious.',
        image: '../images/melly.webp',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Cook pasta according to package.',
            'Sauté mixed vegetables in oil.',
            'Add garlic and herbs.',
            'Combine cooked pasta with vegetables.',
            'Toss with olive oil or sauce.',
            'Serve as a healthy pasta dish.'
        ]
    },
    {
        id: 'beansstew',
        name: 'Beans Stew and fried plantains',
        description: 'High in fiber and protein, this hearty stew pairs perfectly with crispy fried plantains for a satisfying dinner.',
        image: '../images/beans.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Cook beans until soft.',
            'Prepare stew base with tomatoes and spices.',
            'Add cooked beans to stew.',
            'Fry plantain slices until golden.',
            'Simmer stew to meld flavors.',
            'Serve beans stew with fried plantains.'
        ]
    },

    // Snack Foods
    {
        id: 'puffpuff',
        name: 'Puff Puff',
        description: 'Join thousands of people who have become better cooks by using my recipes-You can learn how to make unique and delicious recipes by following my simple steps.',
        image: '../images/buff.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Mix flour, sugar, yeast, and water.',
            'Let dough rise for 30 minutes.',
            'Heat oil for deep frying.',
            'Drop spoonfuls of dough into hot oil.',
            'Fry until golden brown.',
            'Drain and serve warm.'
        ]
    },
    {
        id: 'chickenspringrolls',
        name: 'Chicken Springrolls',
        description: 'Crispy and flavorful, these spring rolls are a delightful snack that\'s perfect for any occasion.',
        image: '../images/rolls.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Prepare filling with chicken and vegetables.',
            'Wrap filling in spring roll wrappers.',
            'Seal edges with water or egg.',
            'Heat oil for frying.',
            'Fry rolls until crispy.',
            'Serve with dipping sauce.'
        ]
    },
    {
        id: 'sausagerolls',
        name: 'Mini Sausage Rolls',
        description: 'These mini sausage rolls are a tasty snack that\'s perfect for any occasion.',
        image: '../images/srolls.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Prepare puff pastry sheets.',
            'Wrap sausage pieces in pastry.',
            'Brush with egg wash.',
            'Bake at 200°C until golden.',
            'Cool slightly before serving.',
            'Enjoy as bite-sized snacks.'
        ]
    },
    {
        id: 'chinchin',
        name: 'Chin Chin',
        description: 'These crispy and delicious chin chin are a great snack for any occasion.',
        image: '../images/chin.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Mix flour, butter, sugar, and eggs.',
            'Knead dough until smooth.',
            'Roll out and cut into strips.',
            'Deep fry until crispy.',
            'Drain excess oil.',
            'Cool and store in airtight container.'
        ]
    },
    {
        id: 'fishpie',
        name: 'Fish Pie',
        description: 'These delicious fish pies are a great snack for any occasion.',
        image: '../images/pie.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Prepare fish filling with vegetables.',
            'Make mashed potato topping.',
            'Layer filling in pie dish.',
            'Top with mashed potatoes.',
            'Bake at 180°C until golden.',
            'Serve warm as a savory pie.'
        ]
    },
    {
        id: 'plantainchips',
        name: 'Plantain Chips',
        description: 'These crispy plantain chips are a great snack for any occasion.',
        image: '../images/chips.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video ID
        steps: [
            'Peel and slice plantains thinly.',
            'Soak slices in salted water.',
            'Heat oil for frying.',
            'Fry slices until crispy.',
            'Drain on paper towels.',
            'Season with salt and serve.'
        ]
    }
];

// Function to get food data by ID
// This function searches the foodData array for a food with matching id
// Returns the food object if found, or undefined if not found
function getFoodData(foodId) {
    return foodData.find(food => food.id === foodId);
}