import {create} from 'zustand';

const useRecipeStore = create((set, get) => ({
    allRecipes: [],
    filteredRecipes: [],
    categories: [],
    getRecipesAction: async () => {
        const res = await fetch('https://api.sampleapis.com/recipes/recipes');
        const recipe = await res.json();
        set( state => ({ ...state, allRecipes: recipe }))
        set( state => ({ 
            ...state, 
            categories: [
                "all",
                ...new Set(recipe.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort())
            ] 
        }))
    },
    setFilteredRecipesAction: (category) => {
        if (category === "all") {
          set( state => ({ ...state, filteredRecipes: get().allRecipes }))
          return;
        }
        const newItems = get().allRecipes.filter((item) => {
          if (category === "other") {
            return item.cuisine === "";
          }
          return item.cuisine === category;
        });
        set( state => ({ ...state, filteredRecipes: newItems }))
    },
    setCategoriesAction: () => {
        set(state => ({
            ...state,
            categories: [
                "all",
                ...new Set(get().map(itm => (itm.cuisine !== "" ? itm.cuisine : "other")).sort())
            ]
        }))
    }
}))

export default useRecipeStore;