import React, { useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
// import items from './data';
import useRecipeStore from './store/recipeStore';

const App = () => {
  // const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  // const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);

  const recipes = useRecipeStore((state) => state.allRecipes);
  // const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const categories = useRecipeStore((state) => state.categories);
  const getRecipesAction = useRecipeStore((state) => state.getRecipesAction);
  // const setCategories = useRecipeStore((state) => state.setCategories);
  const setFilteredRecipesAction = useRecipeStore((state) => state.setFilteredRecipesAction);
  console.log(recipes)

  useEffect(() => {
    getRecipesAction()
  }, []);

  useEffect(() => {
    setFilteredRecipesAction(categories[0])
  }, [recipes]);

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
