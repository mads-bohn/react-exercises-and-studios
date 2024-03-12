import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.bylaurencermak.com";
    let authorPhoto = "https://www.bylaurencermak.com/wp-content/uploads/2019/10/IMG_8968-scaled.jpg";
    let authorName = "Lauren Cermak";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Lauren Cermak" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        <div> 
            <div>
                <h1>Strawberry Madeleine Cookies Recipe</h1>
                <p>Serving you the easiest recipe to get perfect, light and airy Strawberry Madeleine Cookies! This strawberry version is a fun and fresh twist on a classic French madeleine.</p>
            </div>
            <RecipeAuthor />
        </div>
    }
}

export default RecipeDescription;
