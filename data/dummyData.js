import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category(
    "c3",
    "American",
    "https://cdn.pixabay.com/photo/2023/09/23/15/56/ai-generated-8271284_1280.jpg"
  ),
  new Category(
    "c8",
    "Asian",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_1280.jpg"
  ),
  new Category(
    "c7",
    "Breakfast",
    "https://cdn.pixabay.com/photo/2016/11/19/14/18/oatmeal-1839515_1280.jpg"
  ),
  new Category(
    "c4",
    "Desserts",
    "https://cdn.pixabay.com/photo/2020/07/27/10/06/cupcakes-5441972_1280.jpg"
  ),
  new Category(
    "c6",
    "Mexican",
    "https://cdn.pixabay.com/photo/2021/01/19/23/16/tacos-5932654_1280.jpg"
  ),
  new Category(
    "c1",
    "Pasta",
    "https://cdn.pixabay.com/photo/2022/06/04/04/14/noodles-7241213_1280.jpg"
  ),
  new Category(
    "c2",
    "Quick & Easy",
    "https://cdn.pixabay.com/photo/2016/11/21/15/53/berries-1846085_1280.jpg"
  ),
  new Category(
    "c5",
    "Salads",
    "https://cdn.pixabay.com/photo/2022/12/10/12/35/vegetables-7647062_1280.jfif"
  ),
  new Category(
    "c9",
    "Sandwiches",
    "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026581_1280.jpg"
  ),
  new Category(
    "c10",
    "Soup",
    "https://cdn.pixabay.com/photo/2020/09/26/20/37/soup-5605053_1280.jpg"
  ),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaghetti",
    "$",
    "simple",
    "https://cdn.pixabay.com/photo/2022/03/22/01/13/spaghetti-7084156_1280.jpg",
    20,
    [
      "1 lb ground beef",
      "4 cloves garlic, minced (optional)",
      "1 (24 oz) jar of spaghetti sauce",
      "spaghetti pasta",
      "salt to taste",
      "pepper to taste",
    ],
    [
      "Fill a large pot with water and let it reach a boil.",
      "Once it reaches a boil add spaghetti. Stir here and there for 10-12 minutes.",
      "While water is reaching temp heat a medium sauce pan to medium-high heat.",
      "Add ground beef and cook until meat is browned and crumbly. Drain grease.",
      "Add spaghetti sauce to pan with meat and let simmer.",
      "When sauce and meat is at desired temp set aside.",
      "When spaghetti has reached Al Dente remove from heat and drain water.",
      "Serve hot and enjoy!",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m2",
    ["c2", "c9"],
    "Toast Hawaii",
    "$",
    "simple",
    "https://lirp.cdn-website.com/b2c5f5a2/dms3rep/multi/opt/1-83445b23-640w.png",
    10,
    [
      "1 slice white bread",
      "1 slice ham",
      "1 slice pineapple",
      "1-2 slices of cheese",
      "butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "$$",
    "simple",
    "https://cdn.pixabay.com/photo/2015/06/18/07/06/burgers-813407_1280.jpg",
    45,
    [
      "1 lb hamburger meat",
      "1 tomato",
      "1 onion",
      "1head of lettuce",
      "few slices of cheese",
      "2 burger buns",
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, lettuce and onion",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m5",
    ["c3", "c2"],
    "Smoked Salmon",
    "$$",
    "simple",
    "https://cdn.pixabay.com/photo/2015/05/19/23/02/salmon-774482_1280.jpg",
    15,
    ["2-3 lbs salmon", "salt", "pepper"],
    [
      "Remove all pin bones from the salmon.",
      "Salt and Pepper salmon. Let chill a few mins",
      "Place salmon skin down on grates.",
      "Cook until internal temp reaches 140℉.",
      "Serve and enjoy!",
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m6",
    ["c4"],
    "Chocolate Mousse",
    "$",
    "hard",
    "https://cdn.pixabay.com/photo/2019/03/04/13/01/dessert-4034053_1280.jpg",
    240,
    [
      "3 eggs",
      "125g / 4.5 oz dark cooking chocolate ",
      "10g / 0.3 oz unsalted butter",
      "1/2 cup cream",
      "3 tbsp caster sugar",
    ],
    [
      "Separate eggs and yolks while eggs are cold",
      "Whisk yolks until uniform.",
      "Melt chocolate and butter.",
      "Whip cream",
      "Whip whites",
      "Fold everything together",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m7",
    ["c7", "c3", "c4", "c2"],
    "Pancakes",
    "$",
    "simple",
    "https://cdn.pixabay.com/photo/2017/08/06/20/38/pancake-2596104_1280.jpg",
    20,
    [
      "1 1/2 Cups all-purpose Flour",
      "3 1/2 Teaspoons Baking Powder",
      "1 Teaspoon Salt",
      "1 Tablespoon White Sugar",
      "1 1/4 cups Milk",
      "1 Egg",
      "3 Tablespoons Butter, melted",
    ],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m8",
    ["c8", "c10"],
    "Creamy Indian Chicken Curry",
    "$$$",
    "challenging",
    "https://images.food52.com/QB1F08yRoo13cy8eQ0w_sXBwvBc=/1200x1200/a14b37a8-019b-400b-89b0-7c42bd95cc58--2022-1101_easy-creamy-chicken-curry_seo_3x2_james-ransom-029.jpg",
    35,
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and sauté everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m9",
    ["c4"],
    "Chocolate Souffle",
    "$",
    "hard",
    "https://www.monpetitfour.com/wp-content/uploads/2017/02/chocolate-souffle-copy-720x720.jpg",
    45,
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      "Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.",
      "Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.",
      "Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.",
      "Place chocolate pieces in a metal mixing bowl.",
      "Place bowl over a pan of about 3 cups hot water over low heat.",
      "Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.",
      "Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.",
      "Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.",
      "Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.",
      "Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.",
      "Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.",
      "whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.",
      "Transfer a little less than half of egg whites to chocolate.",
      "Mix until egg whites are thoroughly incorporated into the chocolate.",
      "Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.",
      "Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.",
      "Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c5", "c2"],
    "Salad",
    "$",
    "simple",
    "https://hellolittlehome.com/wp-content/uploads/2022/08/garden-salad-recipe-2-500x500.jpg",
    30,
    [
      "1 head of lettuce",
      "1 tomato",
      "1 cucumber",
      "1 onion",
      "salad dressing",
    ],
    ["Cut and combine everything to your liking."],
    true,
    true,
    true,
    true
  ),
];
