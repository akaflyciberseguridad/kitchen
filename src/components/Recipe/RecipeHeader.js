import styles from './RecipeHeader.module.css';

export default function RecipeHeader({ recipe }) {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.badges}>
            <span className={styles.badge}>{recipe.difficulty}</span>
            <span className={styles.badge}>{recipe.cuisine}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>{recipe.title}</h1>
        <p className={styles.description}>{recipe.description}</p>
        
        <div className={styles.meta}>
          <div className={styles.author}>
            <img 
              src={recipe.author.avatar} 
              alt={recipe.author.name}
              className={styles.authorAvatar}
            />
            <span className={styles.authorName}>Por {recipe.author.name}</span>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Prep:</span>
              <span className={styles.statValue}>{recipe.prepTime} min</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Cocción:</span>
              <span className={styles.statValue}>{recipe.cookTime} min</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Porciones:</span>
              <span className={styles.statValue}>{recipe.servings}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
