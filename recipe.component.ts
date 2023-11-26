import { Component, ElementRef, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import RecipeType from '../RecipeType';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})



export class RecipeComponent {


  constructor(private cartService: CartService) {}
  @ViewChild('recipeCardsContainer') recipeCardsContainer!: ElementRef;
  
  addToCart(recipe: RecipeType) {
    this.cartService.addToCart(recipe);
  }
  
  selectedRecipe: any;
  selectRecipe(recipe: any): void {
    this.selectedRecipe = recipe;
  }
  
  recipes: RecipeType[]  = [
    {
      name: 'Puran Poli',
      quantity: 1,
      price: 20.00,
      ingredients: ['Chana dal (split Bengal gram) - 1 cup', 'Jaggery - 1 cup',
      'Wheat flour - 1 cup',
      'Jaggery - 1 cup',
      'Ghee (clarified butter) - 2-3 tablespoons',
      'Water - as needed',
      'Cardamom powder - 1/2 teaspoon','Salt- a pinch'],
      description: 'A sweet, stuffed flatbread from India, featuring a delicious chana dal and jaggery filling. ',
      instructions: [
        'Cook chana dal with water until soft, then drain any excess water.',
        'Grind the cooked dal, jaggery, and cardamom powder into a smooth mixture.',
        'Heat the mixture in a pan, stirring until it thickens. This is your Puran.',
        'Mix wheat flour, a pinch of salt, and a little ghee. Add water gradually to make a soft, pliable dough.',
        'Divide the dough into small balls and Puran into equal portions.',
        'Take a dough ball and flatten it into a small disc.',
        'Place a portion of Puran in the center and seal the edges to encase it.',
        'Roll it out into a thin, round flatbread (like a chapati).',
        'Heat a griddle or pan and cook the Puran Poli with a little ghee until its golden brown on both sides.'
      ],
      imageUrl: 'https://imgs.search.brave.com/RYBuAwzIwm1WFDJixOS_GOy-6_gbKbbrbMg4Izj_ePc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taW5p/c3RyeW9mY3Vycnku/ZmlsZXMud29yZHBy/ZXNzLmNvbS8yMDE2/LzAzL2ltZ180NzAw/LmpwZw',
    },
    {
      name: 'Batata Vada',
      quantity: 1,
      price: 10.00,
      ingredients: ['Potatoes - 4 (medium-sized)', 'Besan - 1 cup', 'Turmeric powder -1/4 tsp', 'Red chili powder -1/2 tsp', 'Mustard seeds - 1/2 tsp', 'Cumin seeds - 1/2 tsp', 'Hing - a pinch',
    'Curry leaves - a few', 'Green chilies - 2 (finely chopped)', 'Ginger - 1-inch piece', 'Coriander leaves', 'salt to taste', 'oil'],
      description: 'A beloved street food.',
      instructions: [
        'Boil, peel, and mash the potatoes. Add salt, turmeric, and red chili powder. Mix well and set aside.',
        'Heat oil in a pan. Add mustard seeds, cumin seeds, hing, and curry leaves. Sauté until they splutter.',
        'Add green chilies and ginger. Sauté for a minute.',
        'Add the spiced potato mixture and sauté for a few minutes. Mix in chopped coriander leaves. Let it cool.',
        'Make small balls from the mixture and set aside.',
        'In a separate bowl, make a thick batter with besan, a pinch of salt, and a little water. It should have a coating consistency.',
        'Heat oil in a deep pan. Dip the potato balls in the besan batter and deep-fry until golden brown.',
        'Remove the Batata Vadas and place them on paper towels to remove excess oil.',
        'Serve hot with pav (bread rolls) or as a snack, along with tamarind chutney and green chilies.'
      ],
      imageUrl: 'https://imgs.search.brave.com/0btqu0vENDFummvkWryaV1XqcASRt4Kj2I73JjLhnd4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhiL011bWJhaS12/YWRhLmpwZw',
    },
    {
      name: 'Modak',
      quantity: 1,
      price: 25.00,
      ingredients: ['Rice flour - 1 cup', 'Water - 1.25 cups', 'Grated coconut - 1 cup', 'Jaggery - 1 cup', 'Cardamom powder - 1/2 tsp', 'Ghee (clarified butter) - 1 tsp', 'A pinch of salt'],
      description: 'A sweet, steamed or fried dumpling from Indian cuisine, traditionally filled with coconut, jaggery, and cardamom, often made during the festival of Ganesh Chaturthi.',
      instructions: [
        'Heat a pan, add ghee, and then grated coconut. Sauté for a few minutes, then add jaggery and cardamom powder.',
        'Stir until jaggery melts, forming a sweet filling. Set it aside.',
        'In a separate pan, boil water with a pinch of salt. Add rice flour and stir quickly until it forms a dough-like consistency.',
        'Take a small portion of the dough while its still warm. Flatten it in your palm, creating a small, thin, circular base.',
        'Place a spoonful of the sweet filling in the center. Fold the edges to create a pyramid shape, pinching at the top.',
        'Place modaks in a greased steamer or on a banana leaf. Steam for about 15-20 minutes until they become glossy and firm.'
      ],
      imageUrl: 'https://imgs.search.brave.com/U4-zGUweZqJv25gzcK71rtfAGOt4OTotxpumby2nlFs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjMtMDkvaXJwazU5/dmdfcGVhbnV0LWph/bS1tb2Rha182MjV4/MzAwXzE0X1NlcHRl/bWJlcl8yMy5qcGc_/aW09RmFjZUNyb3As/YWxnb3JpdGhtPWRu/bix3aWR0aD02MjAs/aGVpZ2h0PTM1MA',
    },
    {
      name: 'Misal-Pav',
      quantity: 1,
      price: 30.00,
      ingredients: ['Mixed sprouts', 'onions', 'tomatoes', 'misal masala', 'red chili powder', 'turmeric powder', 'oil', 'mustard seeds', 'cumin seeds', 'curry leaves', 'tamarind pulp', 'salt', 'farsan', 'chopped coriander leaves', 'pav', 'optional garnishes like chopped tomatoes', 'yogurt', 'lemon juice', 'spices like garam masala'],
      description: 'A spicy Maharashtrian street food dish featuring a flavorful mixed sprout curry (misal) served with pav (bread rolls), garnished with crispy farsan, onions, and coriander.',
      instructions: [
        'Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves. Let them splutter.',
        'Add chopped onions and sauté until they turn translucent.',
        'Add misal masala, red chili powder, and turmeric. Sauté for a minute. Add chopped tomatoes and cook until they become soft.',
        'Stir in the sprouted beans, tamarind pulp, and salt. Cook for a few minutes.',
        'Add water and simmer for 10-15 minutes until the sprouts are cooked and the misal is slightly thickened.',
        'To serve, place a portion of the misal in a bowl, garnish with farsan and chopped coriander. Serve hot with pav, and enjoy your Misal Pav.'
      ],
      imageUrl: 'https://imgs.search.brave.com/uI6ZaCrsfG1yxIsbhSTxDwCVPDOh5icXRpg02fQJ2Ns/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNTY1MzYz/OC8xNzg2Ny9pLzE2/MDAvZGVwb3NpdHBo/b3Rvc18xNzg2NzU3/MDgtc3RvY2stcGhv/dG8tbWlzYWwtcGF2/LW1pc2FscGF2LW1p/c2FsLXBhdi5qcGc',
    },
    {
      name: 'Sabudana Vada',
      quantity: 1,
      price: 15.00,
      ingredients: ['Sabudana (Tapioca pearls) - 1 cup', 'Potatoes - 2 (boiled and mashed)', 'Roasted peanuts - 1/2 cup', 'Green chilies - 2', 'Cumin seeds - 1/2 teaspoon', 'Coriander leaves - 2 tablespoons', 'Lemon juice - 1 tablespoon', 'Sugar - 1/2 teaspoon', 'Salt', 'Oil for frying'],
      description: 'Popular Indian snack made with soaked and spiced tapioca pearls (sabudana), mashed potatoes, and various seasonings, deep-fried until golden and crispy.',
      instructions: [
        'Rinse the sabudana under cold water and soak it in enough water for about 4-5 hours or until they turn soft. Drain excess water.',
        'In a mixing bowl, combine the soaked sabudana, mashed potatoes, crushed peanuts, green chilies, cumin seeds, chopped coriander, lemon juice, sugar (if using), and salt.',
        'Mix the ingredients well to form a dough-like mixture. If its too sticky, you can add a little more peanut powder or some rice flour to help bind it.',
        'Heat oil in a pan for frying. Shape the mixture into small patties or vadas using your hands.',
        'Gently slide the vadas into the hot oil and fry them until they turn golden brown and crispy.',
        'Serve hot with yogurt or chutney of your choice.'
      ],
      imageUrl: 'https://imgs.search.brave.com/qjCu9UgeW4Q-bLD6A0OP4pn62LLOKmiBNpeU84ulCdc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg4LzczLzkx/LzM2MF9GXzE4ODcz/OTEzM19tRXJRbDVQ/aEw0YVd6VUdQdllN/MWEzY01YQ1B2Wkh3/Qy5qcGc',
    },
    {
      name: 'Poha',
      quantity: 1,
      price: 15.00,
      ingredients: ['2 cups flattened poha', 'Potatoes - 2 ', 'Peanuts - 1/2 cup', '1 onion, finely chopped', '1/2 cup green peas', '2 green chilies, finely chopped', 'Lemon juice - 1 tablespoon', '1/4 teaspoon turmeric powder', 'Salt', 'Oil'],
      description: 'Poha is a popular Maharashtrian breakfast dish made with flattened rice, seasoned with spices, and garnished with fresh coriander, offering a delightful balance of flavors.',
      instructions: [
        'Rinse the flattened rice under running water and set it aside to drain.',
        'Heat oil in a pan, add mustard seeds, cumin seeds, asafoetida, and curry leaves. Let them splutter.',
        'Add chopped onions, green chilies, and sauté until onions become translucent. ',
        'Add diced potatoes and cook until they are almost tender.',
        'Add green peas, peanuts, turmeric powder, and salt. Mix well.',
        'Add the drained flattened rice (poha) to the mixture. Gently mix everything together.',
        'Cover the pan and let it cook on low heat for a few minutes until everything is well combined and heated through.',
        'Garnish with fresh coriander leaves. Serve hot with lemon wedges.',
      ],
      imageUrl: 'https://imgs.search.brave.com/dheopziTKJ78VbEdiE4VIYd4jPAHcgeCpjAKu4fXPSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9icmVha2Zh/c3QtcmVjaXBlcy9w/b2hhLXJlY2lwZS9w/b2hhLXJlY2lwZS5q/cGc',
    },
  ];   

}


