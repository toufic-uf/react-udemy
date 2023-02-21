import useRecipeStore from "./store/recipeStore";
import TextTruncate from 'react-text-truncate';

const Menu = () => {
  const items = useRecipeStore((state) => state.filteredRecipes);
  // const truncate = str => str.length > 10 ? str.substring(0, 7) + "..." : str;

  return (
    <div className='section-center'>
      {items.map(({ id, title, photoUrl, directions }) => {
        return (
          <article key={id} className='menu-item'>
            <img src={photoUrl !== "" ? photoUrl : "//unsplash.it/300/200?blur"} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${Math.floor(Math.random() * 90 + 10)}.99</h4>
              </header>
              <p className='item-text'>
                <TextTruncate
                  line={3}
                  element="span"
                  truncateText="…"
                  text={directions}
                />
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;