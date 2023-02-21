import useRecipeStore from './store/recipeStore';

const Categories = () => {
  const categories = useRecipeStore((state) => state.categories);
  const setFilteredRecipesAction = useRecipeStore((state) => state.setFilteredRecipesAction);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button key={index} type="button" className="filter-btn" onClick={() => setFilteredRecipesAction(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;