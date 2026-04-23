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

     {
        id: 'meatballs',
        name: 'Meatballs',
        description: 'Deliciously juicy meatballs made from seasoned ground meat, perfect for a hearty and satisfying breakfast or brunch.',
        image: '../images/meatballs.jpg',
        videoUrl: 'https://www.youtube.com/embed/3jkGsZSW4yw?si=gFjAOVtCe2a7711q', // Placeholder - replace with actual video ID
        steps: [
            'Mix ground meat with spices and seasonings.',
            'Form the mixture into round balls.',
            'Heat oil in a pan and fry meatballs until golden brown.',
            'Add your favorite sauce and simmer until cooked through.',
            'Serve hot with rice or bread.'
        ]
    },
    {
        id: 'pap',
        name: 'Akamu (Pap) with Milk and Sugar',
        description: 'Smooth and creamy cornmeal pap served with cold milk and sugar for a comforting breakfast.',
        image: '../images/pap.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ku_FCv06S3o?si=PlvcHwyLs7YJmI32',
        steps: [
            'Pour cornmeal into a bowl.',
            'Mix with cold water to avoid lumps.',
            'Boil water and slowly add cornmeal mixture.',
            'Stir continuously to prevent burning.',
            'Cook until smooth and thickened.',
            'Serve hot with cold milk and sugar.'
        ]
    },
    {
        id: 'cereal',
        name: 'Breakfast Cereal with Milk',
        description: 'Crispy breakfast cereal served with cold milk, a quick and nutritious morning meal.',
        image: '../images/cereal.jpg',
        videoUrl: 'https://www.youtube.com/embed/CaEfI9vhFOs?si=eSePgZ78rr6JM4cB',
        steps: [
            'Pour cereal into a bowl.',
            'Add fresh cold milk.',
            'Optionally add honey or sugar.',
            'Mix gently and serve immediately.',
            'Eat while cereal is still crispy.',
            'Enjoy with fresh fruits if desired.'
        ]
    },
    {
        id: 'butterreadtea',
        name: 'Butter Bread with Tea',
        description: 'Soft buttered bread paired with hot tea for a classic and satisfying breakfast.',
        image: '../images/buttertea.jpg',
        videoUrl: 'https://www.youtube.com/embed/JVbDt7r7JcE?si=-W712fwDMRYZgcCU',
        steps: [
            'Boil water for tea.',
            'Brew tea with your favorite tea bags.',
            'Toast bread to desired crispness.',
            'Spread butter generously on warm bread.',
            'Serve hot bread alongside hot tea.',
            'Enjoy as a traditional breakfast.'
        ]
    },
    {
        id: 'boiledeggsveg',
        name: 'Boiled Eggs with Fresh Vegetables',
        description: 'Perfectly boiled eggs served with fresh crisp vegetables for a healthy breakfast.',
        image: '../images/boiledeggs.jpg',
        videoUrl: 'https://www.youtube.com/embed/lkjxSgD_E4I?si=lRQJ34kKkc6vBz-z',
        steps: [
            'Boil water in a pot.',
            'Gently place eggs in boiling water.',
            'Cook for 10-12 minutes for hard boiled.',
            'Remove and cool in ice water.',
            'Peel and slice eggs.',
            'Serve with fresh vegetables like cucumber and tomato.'
        ]
    },
    {
        id: 'oats',
        name: 'Oatmeal with Fruits and Honey',
        description: 'Hearty oatmeal topped with fresh fruits and drizzled with honey for a nutritious breakfast.',
        image: '../images/oats.jpg',
        videoUrl: 'https://www.youtube.com/embed/ws1YdzsAKOw?si=A_h4-6KTHbaAkqlI',
        steps: [
            'Bring water or milk to boil.',
            'Add oats and stir well.',
            'Simmer until oats are cooked and creamy.',
            'Transfer to bowl.',
            'Top with fresh fruits.',
            'Drizzle with honey and serve warm.'
        ]
    },
    {
        id: 'pancakes',
        name: 'Fluffy Pancakes with Syrup',
        description: 'Soft and fluffy pancakes stacked high and drizzled with maple syrup for a delicious breakfast.',
        image: '../images/pancakes.jpg',
        videoUrl: 'https://www.youtube.com/embed/FLd00Bx4tOk?si=YV60Sbqs0tRWu1mA',
        steps: [
            'Mix flour, baking powder, salt, and sugar.',
            'In another bowl, beat eggs with milk.',
            'Combine wet and dry ingredients.',
            'Heat griddle and pour batter.',
            'Cook until golden brown on both sides.',
            'Stack and serve with syrup and butter.'
        ]
    },
    {
        id: 'waffle',
        name: 'Belgian Waffle with Butter',
        description: 'Crispy on the outside and fluffy inside, Belgian waffles served with melted butter.',
        image: '../images/waffle.jpg',
        videoUrl: 'https://www.youtube.com/embed/2A8tg_soUig?si=Vytdq_7pY3p4TYOS',
        steps: [
            'Prepare waffle batter with flour and eggs.',
            'Heat waffle iron.',
            'Pour batter into iron.',
            'Cook until golden brown.',
            'Remove carefully and serve hot.',
            'Top with butter and your favorite toppings.'
        ]
    },
    {
        id: 'beanstoast',
        name: 'Beans on Toast',
        description: 'Hearty baked beans served on warm crispy toast for a quick and satisfying breakfast.',
        image: '../images/beanstoast.jpg',
        videoUrl: 'https://www.youtube.com/embed/jI4J89a1kxY?si=cybM8TEnxx91FHq9',
        steps: [
            'Heat canned or cooked beans in a pan.',
            'Add tomato sauce and seasonings.',
            'Simmer until heated through.',
            'Toast bread until golden.',
            'Spoon beans over toast.',
            'Serve hot and enjoy.'
        ]
    },
    {
        id: 'friedricebreakfast',
        name: 'Breakfast Fried Rice',
        description: 'Savory fried rice with eggs and vegetables, perfect for a hearty breakfast.',
        image: '../images/friedrice.jpg',
        videoUrl: 'https://www.youtube.com/embed/Ql8h49eP-gA?si=C_9rymQBiR79jFLP',
        steps: [
            'Heat oil in a large pan or wok.',
            'Add diced vegetables and cook briefly.',
            'Push vegetables to the side and scramble eggs.',
            'Add cooked rice and stir well.',
            'Season with soy sauce and spices.',
            'Serve hot as a filling breakfast.'
        ]
    },
    {
        id: 'hashbrown',
        name: 'Hash Brown Potatoes',
        description: 'Crispy golden hash brown potatoes perfect for a delicious breakfast.',
        image: '../images/hashbrown.jpg',
        videoUrl: 'https://www.youtube.com/embed/hWUTc9XvsaE?si=2pnddDjgBJ5dddXY',
        steps: [
            'Shred potatoes finely.',
            'Squeeze out excess moisture.',
            'Heat oil in a skillet.',
            'Add potatoes and press gently.',
            'Cook until golden and crispy.',
            'Flip and cook the other side, then serve.'
        ]
    },
    {
        id: 'sausagebreakfast',
        name: 'Breakfast Sausage Links',
        description: 'Juicy breakfast sausage links, perfectly cooked and seasoned for a hearty morning meal.',
        image: '../images/sausage.jpg',
        videoUrl: 'https://www.youtube.com/embed/u4QFcEv-2mM?si=GbEeke-f9tq4Vu36',
        steps: [
            'Remove sausage links from packaging.',
            'Heat a skillet over medium heat.',
            'Add sausages and cook, turning occasionally.',
            'Cook until browned and cooked through.',
            'Drain excess fat if needed.',
            'Serve hot with your favorite breakfast sides.'
        ]
    },
    {
        id: 'granola',
        name: 'Yogurt with Granola and Berries',
        description: 'Creamy yogurt topped with crunchy granola and fresh berries for a healthy breakfast.',
        image: '../images/granola.jpg',
        videoUrl: 'https://www.youtube.com/embed/8jwFwVHTgZc?si=vG5U2NUR7XLsjBCR',
        steps: [
            'Pour yogurt into a bowl.',
            'Sprinkle granola on top.',
            'Add fresh berries.',
            'Drizzle with honey if desired.',
            'Mix gently before eating.',
            'Enjoy as a nutritious breakfast.'
        ]
    },
    {
        id: 'scrambledeggs',
        name: 'Scrambled Eggs with Cheese',
        description: 'Soft and creamy scrambled eggs melted with cheese for a quick breakfast.',
        image: '../images/scrambledeggs.jpg',
        videoUrl: 'https://www.youtube.com/embed/yyi55ZrpJ0E?si=agBa0vNVOKlYj1mt',
        steps: [
            'Crack eggs into a bowl and beat.',
            'Heat butter in a pan.',
            'Pour in eggs and stir gently.',
            'When almost cooked, add shredded cheese.',
            'Cook until cheese melts.',
            'Serve hot on toast or alone.'
        ]
    },
    {
        id: 'frenchtoast',
        name: 'French Toast',
        description: 'Golden French toast soaked in egg and milk mixture, crispy on the outside and soft inside.',
        image: '../images/frenchtoast.jpg',
        videoUrl: 'https://www.youtube.com/embed/QkF7lptTLFs?si=X8M94a7hpSLg_fGi',
        steps: [
            'Beat eggs with milk and cinnamon.',
            'Soak bread slices in the mixture.',
            'Heat butter on a griddle.',
            'Cook bread until golden brown on both sides.',
            'Serve hot with syrup and powdered sugar.',
            'Enjoy with fresh berries.'
        ]
    },
    {
        id: 'bagel',
        name: 'Bagel with Cream Cheese',
        description: 'Warm toasted bagel spread with smooth cream cheese and toppings.',
        image: '../images/bagel.jpg',
        videoUrl: 'https://www.youtube.com/embed/lGzziQ_0B8c?si=eqTsudEfJMNMa25N',
        steps: [
            'Slice bagel in half.',
            'Toast bagel until warm and crispy.',
            'Spread cream cheese on both halves.',
            'Add toppings like lox, cucumber, or tomato.',
            'Combine halves and serve.',
            'Enjoy as a delicious breakfast.'
        ]
    },
    {
        id: 'smoothie',
        name: 'Breakfast Smoothie Bowl',
        description: 'Thick and creamy smoothie topped with granola, coconut, and fresh fruits.',
        image: '../images/smoothie.jpg',
        videoUrl: 'https://www.youtube.com/embed/cIJ4QvI7_q4?si=7kVi2bz58HgXo4EM',
        steps: [
            'Blend fruits with yogurt and milk.',
            'Pour into a bowl.',
            'Top with granola and coconut.',
            'Add fresh berries and nuts.',
            'Drizzle with honey.',
            'Enjoy with a spoon as a smoothie bowl.'
        ]
    },
    {
        id: 'avocadotoast',
        name: 'Avocado Toast',
        description: 'Creamy mashed avocado spread on crispy toast with fresh lemon and seasoning.',
        image: '../images/avocadotoast.jpg',
        videoUrl: 'https://www.youtube.com/embed/Rh4EI4luKAQ?si=p59LOg3BCqSeBjfJ',
        steps: [
            'Toast bread until golden and crispy.',
            'Cut avocado and remove the pit.',
            'Scoop flesh into a bowl.',
            'Mash with lemon juice and salt.',
            'Spread on toast.',
            'Top with red pepper flakes and serve.'
        ]
    },
    {
        id: 'crepes',
        name: 'Crepes with Nutella and Strawberries',
        description: 'Delicate crepes filled with chocolate spread and fresh strawberries.',
        image: '../images/crepes.jpg',
        videoUrl: 'https://www.youtube.com/embed/7S5bic-R5lA?si=6dQCpuIFVAIeB8-0',
        steps: [
            'Prepare crepe batter with flour and eggs.',
            'Heat a non-stick pan.',
            'Pour thin layer of batter and tilt.',
            'Cook until light golden.',
            'Flip and cook briefly.',
            'Fill with Nutella and strawberries, then fold and serve.'
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
        videoUrl: 'https://www.youtube.com/embed/593bjRDhvzw?si=vGV_Yv_lLI7n8ItM', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/WU5XuLlh8EE?si=cc8Yaqs3JgHw0uoH', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/PoNZSSqjRvo?si=kJmwvTI-dB9mze11', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/qSvoUSyyx5k?si=pn4JLHhXDxnwLhlo', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/Fb_IljnhwTo?si=goBm5T6wInllaMDc', // Placeholder - replace with actual video ID
        steps: [
            'Boil macaroni according to package instructions.',
            'Prepare tomato sauce with vegetables.',
            'Cook sauce until thickened.',
            'Drain macaroni and mix with sauce.',
            'Add cheese or other toppings if desired.',
            'Serve warm as a comforting dish.'
        ]
    },
    {
        id: 'coconutrice',
        name: 'Coconut Milk Rice',
        description: 'Fragrant and creamy rice cooked in rich coconut milk with aromatic spices.',
        image: '../images/coconutrice.jpg',
        videoUrl: 'https://www.youtube.com/embed/CHYTUzyhgbE?si=UJefcOjOWvdvemcF',
        steps: [
            'Rinse rice thoroughly.',
            'Heat oil and sauté onions.',
            'Add rice and toast lightly.',
            'Pour in coconut milk and water.',
            'Add seasonings and bring to boil.',
            'Cover and simmer until rice is tender.'
        ]
    },
    {
        id: 'vegetablesoup',
        name: 'Vegetable Soup',
        description: 'Hearty vegetable soup loaded with fresh vegetables and protein for a nutritious lunch.',
        image: '../images/vegsoup.jpg',
        videoUrl: 'https://www.youtube.com/embed/cOYCFfRyS8E?si=sg8XQ6f3XhxIkNrB',
        steps: [
            'Heat oil and sauté onions and garlic.',
            'Add diced vegetables.',
            'Pour in broth or water.',
            'Add meat or chicken if desired.',
            'Simmer until vegetables are tender.',
            'Season and serve hot.'
        ]
    },
    {
        id: 'egusisoup',
        name: 'Egusi Soup with Fufu',
        description: 'Creamy egusi melon seed soup served with smooth pounded fufu.',
        image: '../images/egusi.jpg',
        videoUrl: 'https://www.youtube.com/embed/lVjME9OyIfY?si=m1RUg7NzWHErruBz',
        steps: [
            'Grind egusi seeds.',
            'Heat palm oil and fry egusi.',
            'Add meat, fish, and seasonings.',
            'Cook until flavors develop.',
            'Add stock and bring to boil.',
            'Serve with pounded fufu or rice.'
        ]
    },
    {
        id: 'chickenstew',
        name: 'Chicken Stew with Rice',
        description: 'Tender chicken pieces in a savory tomato-based stew served over fluffy rice.',
        image: '../images/chickenstew.jpg',
        videoUrl: 'https://www.youtube.com/embed/E2eBr1JGAZU?si=MKBF4LrCjQxSb',
        steps: [
            'Season and fry chicken pieces.',
            'Remove chicken and fry onions.',
            'Add blended tomatoes and peppers.',
            'Return chicken and add spices.',
            'Simmer until chicken is tender.',
            'Serve over cooked rice.'
        ]
    },
    {
        id: 'meatpie',
        name: 'Meat Pie',
        description: 'Golden pastry filled with seasoned ground meat and vegetables.',
        image: '../images/meatpie.jpg',
        videoUrl: 'https://www.youtube.com/embed/hZSxQ6AE7d0?si=iUk1EOdm9NB91nwZ',
        steps: [
            'Prepare pastry dough.',
            'Brown ground meat with vegetables.',
            'Season and cool filling.',
            'Roll pastry and fill.',
            'Brush with egg wash.',
            'Bake until golden brown.'
        ]
    },
    {
        id: 'poundedyam',
        name: 'Pounded Yam with Egusi Soup',
        description: 'Smooth and creamy pounded yam paired with rich egusi soup.',
        image: '../images/poundedyam.jpg',
        videoUrl: 'https://www.youtube.com/embed/Kl57yfVNIoE?si=7rw5y4YT-obiljO8',
        steps: [
            'Boil yam until soft.',
            'Pound with butter and warm water.',
            'Continue pounding until smooth.',
            'Prepare egusi soup separately.',
            'Mold pounded yam into shape.',
            'Serve with hot egusi soup.'
        ]
    },
    {
        id: 'afangsoup',
        name: 'Afang Soup',
        description: 'Traditional soup made with afang leaves and waterleaf, rich with meat and fish.',
        image: '../images/afang.jpg',
        videoUrl: 'https://www.youtube.com/embed/wiZyjeTh8cQ?si=7PMenkjX9KZaz3MJ',
        steps: [
            'Blend vegetables and seasonings.',
            'Heat palm oil and fry blend.',
            'Add meat and fish.',
            'Pour in stock and bring to boil.',
            'Add afang and waterleaf.',
            'Simmer until ready and serve.'
        ]
    },
    {
        id: 'beansoup',
        name: 'Bean Soup with Plantain',
        description: 'Creamy bean soup served with boiled plantain for a hearty lunch.',
        image: '../images/beansoup.jpg',
        videoUrl: 'https://www.youtube.com/embed/3M3z8GXNoAw?si=717ecox7exbWDLEF',
        steps: [
            'Cook beans until soft.',
            'Blend some cooked beans.',
            'Heat oil and fry seasonings.',
            'Add blended and whole beans.',
            'Boil plantain separately.',
            'Serve soup with plantain.'
        ]
    },
    {
        id: 'okrasoup',
        name: 'Okra Soup',
        description: 'Silky okra soup with meat and fish in a rich palm oil base.',
        image: '../images/okrasoup.jpg',
        videoUrl: 'https://www.youtube.com/embed/bV2sg6mmSH8?si=HQXvZb3pHJrSqp8d',
        steps: [
            'Heat palm oil.',
            'Add meat and fish.',
            'Blend okra with vegetables.',
            'Add to oil and cook.',
            'Season with spices.',
            'Serve hot over rice or garri.'
        ]
    },
    {
        id: 'peppersoup',
        name: 'Pepper Soup (Mixed Meat)',
        description: 'Spicy and aromatic pepper soup with assorted meat and herbs.',
        image: '../images/peppersoup.jpg',
        videoUrl: 'https://www.youtube.com/embed/CBBj6ibfgSk?si=jjrkSx9X84MgzXD7',
        steps: [
            'Heat oil and fry spices.',
            'Add assorted meat cuts.',
            'Pour in water and bring to boil.',
            'Add herbs and peppers.',
            'Simmer until meat is tender.',
            'Serve hot as a warming soup.'
        ]
    },
    {
        id: 'nigeriansalad',
        name: 'Nigerian Green Salad',
        description: 'Fresh mixed greens with lettuce, tomatoes, cucumbers, and tangy dressing.',
        image: '../images/nigeriansalad.jpg',
        videoUrl: 'https://www.youtube.com/embed/K6sgvvGso8M?si=mB-35dO8FsyqFNsK',
        steps: [
            'Wash and chop fresh vegetables.',
            'Mix lettuce, tomatoes, and cucumbers.',
            'Add onions and other greens.',
            'Prepare dressing with oil and vinegar.',
            'Toss salad with dressing.',
            'Serve chilled as a side dish.'
        ]
    },
    {
        id: 'grilledchicken',
        name: 'Grilled Chicken with Coconut Rice',
        description: 'Juicy grilled chicken served alongside creamy coconut rice.',
        image: '../images/grilledchicken.jpg',
        videoUrl: 'https://www.youtube.com/embed/Okvb_eySHh0?si=GGXuAImWZR0CeAmA',
        steps: [
            'Marinate chicken with spices.',
            'Grill over heat until cooked.',
            'Prepare coconut rice in pot.',
            'Cook rice in coconut milk.',
            'Slice grilled chicken.',
            'Serve alongside rice.'
        ]
    },
    {
        id: 'friedchicken',
        name: 'Fried Chicken',
        description: 'Crispy golden fried chicken, perfectly seasoned and juicy inside.',
        image: '../images/friedchicken.jpg',
        videoUrl: 'https://www.youtube.com/embed/VHM8vb6TicY?si=tE7XTCvvFzGygd1w',
        steps: [
            'Season chicken pieces with spices.',
            'Coat with flour or breadcrumbs.',
            'Heat oil in deep pan.',
            'Fry chicken until golden brown.',
            'Drain on paper towels.',
            'Serve hot as main or side dish.'
        ]
    },
    {
        id: 'fishandchips',
        name: 'Fish and Chips',
        description: 'Crispy battered fish served with golden fried potato chips.',
        image: '../images/fishandchips.jpg',
        videoUrl: 'https://www.youtube.com/embed/auLBC82e3Sw?si=VHBiyGBBmJho-7UA',
        steps: [
            'Cut fish into fillets.',
            'Prepare batter with flour and water.',
            'Dip fish in batter.',
            'Fry in hot oil until golden.',
            'Cut potatoes and fry until crispy.',
            'Serve fish with chips and sauce.'
        ]
    },
    {
        id: 'tomatobasil',
        name: 'Tomato Basil Pasta',
        description: 'Light and fresh pasta with homemade tomato sauce and fragrant basil.',
        image: '../images/tomatopasta.jpg',
        videoUrl: 'https://www.youtube.com/embed/79YUSgB7N-I?si=k2q_NbMxtPXbhS83',
        steps: [
            'Cook pasta according to package.',
            'Blend fresh tomatoes.',
            'Heat oil and cook tomatoes.',
            'Add garlic, basil, and seasonings.',
            'Simmer sauce until rich.',
            'Toss pasta with sauce and serve.'
        ]
    },
    {
        id: 'pilaf',
        name: 'Pilaf Rice',
        description: 'Fragrant rice cooked with spices and meat for a flavorful meal.',
        image: '../images/pilaf.jpg',
        videoUrl: 'https://www.youtube.com/embed/5fjfLxvSdg8?si=Fh4dNKnLaqirI8LV',
        steps: [
            'Heat oil and fry meat.',
            'Remove meat and fry rice.',
            'Toast rice until fragrant.',
            'Return meat and add water.',
            'Add spices and bring to boil.',
            'Cover and simmer until done.'
        ]
    },
    {
        id: 'turmericrice',
        name: 'Turmeric Rice',
        description: 'Golden turmeric rice with spices and vegetables for a vibrant lunch.',
        image: '../images/turmericrice.jpg',
        videoUrl: 'https://www.youtube.com/embed/Cg5i9R5RGb0?si=iiv3Z7GL5PY5M49j',
        steps: [
            'Heat oil and sauté vegetables.',
            'Add rice and toast.',
            'Pour in water or broth.',
            'Add turmeric and spices.',
            'Cover and cook until tender.',
            'Fluff and serve warm.'
        ]
    },

    // Dinner Foods
    {
        id: 'wheatbitter',
        name: 'Wheat and Bitter Leaf Soup',
        description: 'A hearty and nutritious soup made with wheat and bitter leaf, perfect for a satisfying dinner.',
        image: '../images/bitter leaf.jpg',
        videoUrl: 'https://www.youtube.com/embed/MdLeE21FTM4?si=XzB-nDvi6HTBfFW9', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/AB2kLUjm-T8?si=dPlgir0GvOhXSXGr', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/w7AaqyGIOtI?si=sdDbQlgzRfvsz2du', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/ohOByZVrevk?si=FdGXlsiXHw1fjjFI', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/m-Yi7jzGYbA?si=6BIdPAYvWNtxzIy-', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/A37haNU2LGM?si=NMc75MFDbfJmaGwU', // Placeholder - replace with actual video ID
        steps: [
            'Cook beans until soft.',
            'Prepare stew base with tomatoes and spices.',
            'Add cooked beans to stew.',
            'Fry plantain slices until golden.',
            'Simmer stew to meld flavors.',
            'Serve beans stew with fried plantains.'
        ]
    },
    {
        id: 'riceandbeansnight',
        name: 'Rice and Beans (Dinner)',
        description: 'Seasoned rice mixed with tender beans for a complete and satisfying dinner meal.',
        image: '../images/ricebeans.jpg',
        videoUrl: 'https://www.youtube.com/embed/CB5hS8H9W68?si=qiS22lEjYYn3j08s',
        steps: [
            'Cook beans until tender.',
            'Heat oil and fry seasonings.',
            'Add rice and toast.',
            'Pour in water or broth.',
            'Add cooked beans.',
            'Cover and cook until rice is done.'
        ]
    },
    {
        id: 'peppersteak',
        name: 'Pepper Steak with Rice',
        description: 'Succulent steak strips in a spicy pepper sauce served over fluffy rice.',
        image: '../images/peppersteak.jpg',
        videoUrl: 'https://www.youtube.com/embed/n9kvYT1nb0A?si=rJrJvd-G90mZBXlf',
        steps: [
            'Cut steak into strips.',
            'Heat oil and sear steak.',
            'Remove and set aside.',
            'Fry peppers and onions.',
            'Return steak and add sauce.',
            'Serve over rice.'
        ]
    },
    {
        id: 'chickencurry',
        name: 'Chicken Curry',
        description: 'Tender chicken in aromatic curry sauce with warm spices and coconut milk.',
        image: '../images/chickencurry.jpg',
        videoUrl: 'https://www.youtube.com/embed/P0qv_fuGIoo?si=YV7DCwncb-3jA3rT',
        steps: [
            'Heat oil and sauté onions.',
            'Add curry powder and cook.',
            'Add chicken and brown.',
            'Pour in coconut milk.',
            'Add vegetables and seasonings.',
            'Simmer until chicken is tender.'
        ]
    },
    {
        id: 'beefsuya',
        name: 'Beef Suya',
        description: 'Spicy grilled beef skewers with aromatic suya spice blend.',
        image: '../images/suya.jpg',
        videoUrl: 'https://www.youtube.com/embed/dIyuRABa9rw?si=7BcKxMZDLYEaG_y9',
        steps: [
            'Cut beef into cubes.',
            'Blend suya spices.',
            'Marinate beef in spice blend.',
            'Thread onto skewers.',
            'Grill over charcoal or heat.',
            'Serve hot with onions and tomatoes.'
        ]
    },
    {
        id: 'grilledfish',
        name: 'Grilled Fish with Vegetables',
        description: 'Whole grilled fish seasoned with herbs and served with grilled vegetables.',
        image: '../images/grilledfish.jpg',
        videoUrl: 'https://www.youtube.com/embed/5PrDMlzoTtc?si=munKJTm6AHHQBvmC',
        steps: [
            'Clean and season fish.',
            'Grill fish on both sides.',
            'Grill vegetables alongside.',
            'Cook until fish is done.',
            'Serve with lemon and herbs.',
            'Enjoy as a healthy dinner.'
        ]
    },
    {
        id: 'tomatopasta',
        name: 'Tomato-based Pasta Dinner',
        description: 'Hearty pasta in rich tomato sauce with herbs and meat.',
        image: '../images/tomatobasil.jpg',
        videoUrl: 'https://www.youtube.com/embed/uCQvpRnqYxM?si=9ronFFZMcFd3NyUf',
        steps: [
            'Brown ground meat.',
            'Blend tomatoes and cook sauce.',
            'Add meat and herbs.',
            'Simmer until rich.',
            'Cook pasta separately.',
            'Toss with sauce and serve.'
        ]
    },
    {
        id: 'meatpie2',
        name: 'Large Meat Pie',
        description: 'Golden flaky pastry pie filled with savory spiced meat.',
        image: '../images/largepie.jpg',
        videoUrl: 'https://www.youtube.com/embed/SN2PDECLN80?si=nY8ViiBxmELBMi5S',
        steps: [
            'Prepare pastry dough.',
            'Brown ground meat with vegetables.',
            'Cool filling and add seasonings.',
            'Line pie dish with pastry.',
            'Add filling and cover.',
            'Bake until golden brown.'
        ]
    },
    {
        id: 'fishstew',
        name: 'Fish Stew',
        description: 'Tender fish in aromatic tomato-based stew with vegetables and spices.',
        image: '../images/fishstew.jpg',
        videoUrl: 'https://www.youtube.com/embed/66-vgCFMRhk?si=wuYwk6ZGAmD5fC73',
        steps: [
            'Heat oil and fry seasonings.',
            'Blend tomatoes and peppers.',
            'Add to oil and cook.',
            'Add water and bring to boil.',
            'Add fish pieces carefully.',
            'Simmer until fish is cooked.'
        ]
    },
    {
        id: 'chickenvegetables',
        name: 'Chicken with Mixed Vegetables',
        description: 'Tender chicken pieces with assorted fresh vegetables in savory sauce.',
        image: '../images/chickenveg.jpg',
        videoUrl: 'https://www.youtube.com/embed/A7ed4rW2nGI?si=0KoUR5vjLzdcjP0M',
        steps: [
            'Season and fry chicken.',
            'Remove and sauté vegetables.',
            'Return chicken to pan.',
            'Add sauce and seasonings.',
            'Simmer until everything is cooked.',
            'Serve over rice or with bread.'
        ]
    },
    {
        id: 'riceporridge',
        name: 'Rice Porridge (Congee)',
        description: 'Smooth and comforting rice porridge with meat and vegetables.',
        image: '../images/riceporridge.jpg',
        videoUrl: 'https://www.youtube.com/embed/SrnBalc6m5w?si=H9ON_M4I5bXt9mz3',
        steps: [
            'Boil rice in plenty of water.',
            'Add meat and cook together.',
            'Stir occasionally to prevent sticking.',
            'Cook until rice breaks down.',
            'Season with salt and spices.',
            'Serve as comfort food.'
        ]
    },
    {
        id: 'yamstew',
        name: 'Yam Stew with Meat',
        description: 'Tender yam pieces in rich meat stew with aromatic spices.',
        image: '../images/yamstew.jpg',
        videoUrl: 'https://www.youtube.com/embed/u9gkHZ08wVw?si=fHeuI_pOU5H0-O0M',
        steps: [
            'Peel and cube yam.',
            'Brown meat with seasonings.',
            'Add tomato base and water.',
            'Bring to boil.',
            'Add yam and simmer.',
            'Cook until yam is tender.'
        ]
    },
    {
        id: 'cassavafish',
        name: 'Cassava and Fish',
        description: 'Boiled cassava served with seasoned grilled or fried fish.',
        image: '../images/cassavafish.jpg',
        videoUrl: 'https://www.youtube.com/embed/Fl2xgYSwOCI?si=q8V0Ky9EBhWVgH0F',
        steps: [
            'Peel and boil cassava.',
            'Cook until tender and mash lightly.',
            'Prepare fish separately.',
            'Grill or fry fish until cooked.',
            'Season both components.',
            'Serve cassava with fish on the side.'
        ]
    },
    {
        id: 'meatvegetables',
        name: 'Meat and Vegetables',
        description: 'Tender meat pieces with assorted vegetables in savory gravy.',
        image: '../images/meatveg.jpg',
        videoUrl: 'https://www.youtube.com/embed/JRd0QoGv8_k?si=5cfNpeo7TbOCbxMX',
        steps: [
            'Season and brown meat.',
            'Remove meat.',
            'Sauté vegetables.',
            'Return meat and add gravy.',
            'Simmer until everything is tender.',
            'Serve as hearty dinner.'
        ]
    },
    {
        id: 'pepperedchicken',
        name: 'Peppered Chicken (Spicy)',
        description: 'Spicy chicken in aromatic pepper sauce for those who love heat.',
        image: '../images/pepperedchicken.jpg',
        videoUrl: 'https://www.youtube.com/embed/Rp7JUFObNLw?si=b5WJGbs4iQz9E-Z-',
        steps: [
            'Cut chicken into pieces.',
            'Blend hot peppers with spices.',
            'Fry pepper blend.',
            'Add chicken and brown.',
            'Add water and seasonings.',
            'Simmer until chicken is tender.'
        ]
    },
    {
        id: 'beefJollof',
        name: 'Beef Jollof Rice',
        description: 'Fragrant jollof rice cooked with tender beef pieces.',
        image: '../images/beefjollof.jpg',
        videoUrl: 'https://www.youtube.com/embed/tuC4WWo60qU?si=6LFhopSB8TuhB3TR',
        steps: [
            'Brown beef with seasonings.',
            'Prepare jollof base with tomatoes.',
            'Toast rice in oil.',
            'Add beef and water.',
            'Cook rice in the beef mixture.',
            'Fluff and serve hot.'
        ]
    },
    {
        id: 'turkeystew',
        name: 'Turkey Stew',
        description: 'Succulent turkey pieces in rich aromatic stew.',
        image: '../images/turkeystew.jpg',
        videoUrl: 'https://www.youtube.com/embed/K6eLcKJ3Mjs?si=VyLpyiBk_BILIIAL',
        steps: [
            'Cut turkey into pieces.',
            'Brown turkey meat.',
            'Prepare stew base with vegetables.',
            'Add turkey back to pot.',
            'Simmer with spices.',
            'Serve hot over rice or fufu.'
        ]
    },
    {
        id: 'goatmeat',
        name: 'Goat Meat Pepper Soup',
        description: 'Tender goat meat in spicy aromatic pepper soup.',
        image: '../images/goatmeatsoup.jpg',
        videoUrl: 'https://www.youtube.com/embed/7dj-n9w_Vhg?si=Sir28jPq-TSEQaWP',
        steps: [
            'Parboil goat meat.',
            'Heat oil with spices.',
            'Add goat meat.',
            'Pour in water and bring to boil.',
            'Add peppers and herbs.',
            'Simmer until meat is very tender.'
        ]
    },
    {
        id: 'chickenrice',
        name: 'Chicken and Rice Dinner',
        description: 'One-pot chicken and rice with vegetables and spices.',
        image: '../images/chickenrice2.jpg',
        videoUrl: 'https://www.youtube.com/embed/Wb0uJ_zkANU?si=OVcSn3EvB4QuS7-g',
        steps: [
            'Brown chicken pieces.',
            'Remove and sauté vegetables.',
            'Return chicken.',
            'Toast rice in pot.',
            'Add water and seasonings.',
            'Cook covered until done.'
        ]
    },
    {
        id: 'fishermanstew',
        name: 'Fishermans Stew',
        description: 'Rich stew with mixed seafood and vegetables in aromatic sauce.',
        image: '../images/fishermanstew.jpg',
        videoUrl: 'https://www.youtube.com/embed/1L3012tu65g?si=H9dh7Hz8jJ75-6zZ',
        steps: [
            'Prepare seafood (fish, shrimp, etc).',
            'Heat oil with seasonings.',
            'Blend tomatoes and peppers.',
            'Cook sauce base.',
            'Add seafood carefully.',
            'Simmer until cooked, serve hot.'
        ]
    },

    // Snack Foods
    {
        id: 'puffpuff',
        name: 'Puff Puff',
        description: 'Join thousands of people who have become better cooks by using my recipes-You can learn how to make unique and delicious recipes by following my simple steps.',
        image: '../images/buff.jpg',
        videoUrl: 'https://www.youtube.com/embed/QMDaxjc11xc?si=EbA593z0Mkk9ZVEH', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/HfE5SJIFWRU?si=3w7bNYedDDyP-yIG', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/FnxWFdfBrvo?si=nxnWMM8aa9QnvHMR', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/qVK-uM9Tn4c?si=MAXdv6nl0s5twqjW', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/sbOZ6ptwW_M?si=EHMSnwqmCqScUxc_', // Placeholder - replace with actual video ID
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
        videoUrl: 'https://www.youtube.com/embed/jJR79MMXglg?si=TAmncvO-9Nasi_CL', // Placeholder - replace with actual video ID
        steps: [
            'Peel and slice plantains thinly.',
            'Soak slices in salted water.',
            'Heat oil for frying.',
            'Fry slices until crispy.',
            'Drain on paper towels.',
            'Season with salt and serve.'
        ]
    },
    {
        id: 'meatpiesmall',
        name: 'Small Meat Pie',
        description: 'Individual sized golden pastry filled with seasoned ground meat.',
        image: '../images/smallmeatpie.jpg',
        videoUrl: 'https://www.youtube.com/embed/x5T2kheMFHs?si=2x_evR11RIi33SjN',
        steps: [
            'Prepare pastry dough.',
            'Brown ground meat with vegetables.',
            'Cool filling and season.',
            'Roll pastry thin.',
            'Cut into squares and fill.',
            'Seal edges and bake until golden.'
        ]
    },
    {
        id: 'akara',
        name: 'Akara (Bean Fritters)',
        description: 'Delicious golden bean fritters, crispy outside and fluffy inside.',
        image: '../images/akara.jpg',
        videoUrl: 'https://www.youtube.com/embed/cqAMOlnqPVo?si=BPM7SPks4v5En--m',
        steps: [
            'Soak beans and remove skins.',
            'Grind beans with onions.',
            'Add spices and mix.',
            'Heat oil for frying.',
            'Drop spoonfuls into oil.',
            'Fry until golden brown.'
        ]
    },
    {
        id: 'eggroll',
        name: 'Egg Roll',
        description: 'Crispy golden egg rolls filled with vegetables and meat.',
        image: '../images/eggroll.jpg',
        videoUrl: 'https://www.youtube.com/embed/TaRI4-gTEQ4?si=rnCnVzGmD1W5dTzJ',
        steps: [
            'Prepare filling with eggs and vegetables.',
            'Wrap in egg roll wrappers.',
            'Seal edges with water.',
            'Heat oil for deep frying.',
            'Fry until golden brown.',
            'Drain and serve hot.'
        ]
    },
    {
        id: 'pepperedsnail',
        name: 'Peppered Snail',
        description: 'Tender snails in spicy pepper sauce, a delicacy for snack lovers.',
        image: '../images/snail.jpg',
        videoUrl: 'https://www.youtube.com/embed/xi0zEC-jnnU?si=7l6k5yMR5B-A_xt_',
        steps: [
            'Clean snails thoroughly.',
            'Boil to tenderize.',
            'Prepare pepper mixture.',
            'Fry peppers and seasonings.',
            'Add snails and simmer.',
            'Serve as appetizing snack.'
        ]
    },
    {
        id: 'boli',
        name: 'Boli (Roasted Plantain)',
        description: 'Sweet roasted plantain with gentle smokiness, perfect street snack.',
        image: '../images/boli.jpg',
        videoUrl: 'https://www.youtube.com/embed/-hECmiK9WQw?si=IeXuY2ynvohPtIyl',
        steps: [
            'Select ripe plantains.',
            'Roast over charcoal flame.',
            'Turn frequently to prevent burning.',
            'Roast until skin is blackened.',
            'Peel away charred skin.',
            'Serve warm with spicy peanut paste.'
        ]
    },
    {
        id: 'coconutcandy',
        name: 'Coconut Candy',
        description: 'Sweet and chewy coconut candy pieces, perfect for a quick treat.',
        image: '../images/coconutcandy.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Grate fresh coconut.',
            'Boil with sugar.',
            'Stir constantly as it thickens.',
            'Cool on greased surface.',
            'Cut into pieces.',
            'Store in airtight container.'
        ]
    },
    {
        id: 'tamarindcandy',
        name: 'Tamarind Candy',
        description: 'Tangy and sweet tamarind candies, a refreshing snack.',
        image: '../images/tamarindcandy.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Remove seeds from tamarind pod.',
            'Roll flesh into balls.',
            'Coat with sugar.',
            'Let dry slightly.',
            'Store in container.',
            'Enjoy as tangy treat.'
        ]
    },
    {
        id: 'meatsamosa',
        name: 'Meat Samosa',
        description: 'Crispy triangular pastry filled with spiced ground meat.',
        image: '../images/meatsamosa.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Prepare pastry dough.',
            'Brown ground meat with spices.',
            'Cool meat filling.',
            'Cut pastry into strips.',
            'Fill and fold into triangles.',
            'Deep fry until golden brown.'
        ]
    },
    {
        id: 'vegetablesamosa',
        name: 'Vegetable Samosa',
        description: 'Golden samosa filled with spiced vegetables and potatoes.',
        image: '../images/vegsamosa.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Boil and mash potatoes.',
            'Mix with cooked vegetables.',
            'Add spices and seasonings.',
            'Prepare pastry dough.',
            'Fill and fold triangles.',
            'Fry until crispy and golden.'
        ]
    },
    {
        id: 'beignet',
        name: 'Beignet (Fried Dough)',
        description: 'Light and fluffy fried dough pastries, perfect with coffee.',
        image: '../images/beignet.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Prepare dough with flour and eggs.',
            'Let dough rest.',
            'Roll out and cut shapes.',
            'Heat oil for frying.',
            'Fry until puffed and golden.',
            'Dust with powdered sugar.'
        ]
    },
    {
        id: 'meatgizzard',
        name: 'Fried Meat Gizzard',
        description: 'Tender gizzard pieces fried until crispy on the outside.',
        image: '../images/gizzard.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Clean gizzard thoroughly.',
            'Boil until tender.',
            'Season with spices.',
            'Coat with flour.',
            'Heat oil and fry.',
            'Serve hot as crunchy snack.'
        ]
    },
    {
        id: 'boiledcorn',
        name: 'Boiled Corn',
        description: 'Fresh boiled corn on the cob, sweet and nutritious.',
        image: '../images/boiledcorn.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Remove corn husks.',
            'Boil water with salt.',
            'Add corn to boiling water.',
            'Cook for 15-20 minutes.',
            'Remove and cool.',
            'Serve with butter and salt.'
        ]
    },
    {
        id: 'popcorn',
        name: 'Spiced Popcorn',
        description: 'Fluffy popcorn seasoned with spices and butter.',
        image: '../images/popcorn.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Heat oil in pot.',
            'Add popcorn kernels.',
            'Cover and shake frequently.',
            'Remove when popping slows.',
            'Season with spices and salt.',
            'Serve warm.'
        ]
    },
    {
        id: 'trailmix',
        name: 'Trail Mix',
        description: 'Mix of nuts, dried fruits, and seeds for a healthy snack.',
        image: '../images/trailmix.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Gather assorted nuts.',
            'Add dried fruits.',
            'Mix in seeds.',
            'Optionally add chocolate chips.',
            'Store in airtight container.',
            'Enjoy as portable snack.'
        ]
    },
    {
        id: 'fruitsalad',
        name: 'Fresh Fruit Salad',
        description: 'Colorful mix of fresh fruits with light dressing.',
        image: '../images/fruitsalad.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Wash and peel fruits.',
            'Cut into bite-sized pieces.',
            'Mix in large bowl.',
            'Add light lemon dressing.',
            'Chill until serving.',
            'Serve cold and refreshing.'
        ]
    },
    {
        id: 'yogurtcup',
        name: 'Yogurt Cup with Honey',
        description: 'Creamy yogurt drizzled with honey and topped with fruits.',
        image: '../images/yogurtcup.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Pour yogurt into cup.',
            'Add fresh berries.',
            'Drizzle with honey.',
            'Top with granola if desired.',
            'Refrigerate until ready.',
            'Enjoy as quick snack.'
        ]
    },
    {
        id: 'granolabars',
        name: 'Homemade Granola Bars',
        description: 'Crunchy granola bars with oats, honey, and nuts.',
        image: '../images/granolabar.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Mix oats with honey and butter.',
            'Add nuts and dried fruits.',
            'Spread in baking pan.',
            'Bake at 160°C for 15 minutes.',
            'Cool completely.',
            'Cut into bars and store.'
        ]
    },
    {
        id: 'cheeseballs',
        name: 'Cheese Balls',
        description: 'Crispy cheese-flavored balls, perfect savory snack.',
        image: '../images/cheeseballs.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Prepare dough with flour and cheese.',
            'Roll into small balls.',
            'Deep fry in hot oil.',
            'Drain on paper towels.',
            'Season with salt.',
            'Serve warm or cold.'
        ]
    },
    {
        id: 'friedyam',
        name: 'Fried Yam Chips',
        description: 'Thinly sliced yam, deep fried until crispy and golden.',
        image: '../images/friedyam.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Peel yam.',
            'Slice thinly.',
            'Soak in salted water.',
            'Pat dry.',
            'Heat oil for frying.',
            'Fry until crispy and serve.'
        ]
    },
    {
        id: 'meatkebab',
        name: 'Meat Kebab',
        description: 'Marinated meat pieces grilled on skewers with vegetables.',
        image: '../images/kebab.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        steps: [
            'Cut meat into cubes.',
            'Marinate with spices.',
            'Alternate with vegetables on skewer.',
            'Grill over heat.',
            'Turn frequently for even cooking.',
            'Serve hot with sauce.'
        ]
    }
];

// Function to get food data by ID
// This function searches the foodData array for a food with matching id
// Returns the food object if found, or undefined if not found
function getFoodData(foodId) {
    return foodData.find(food => food.id === foodId);
}