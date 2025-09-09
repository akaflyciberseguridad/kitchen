import RecipeHeader from './RecipeHeader';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import styles from './RecipeCard.module.css';

export default function RecipeCard({ recipe }) {
  return (
    <article className={styles.recipeCard}>
      <RecipeHeader recipe={recipe} />
      
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <IngredientsList 
            ingredients={recipe.ingredients} 
            servings={recipe.servings}
          />
          <InstructionsList instructions={recipe.instructions} />
        </div>
        
        <aside className={styles.sidebar}>
          <div className={styles.nutritionInfo}>
            <h3 className={styles.sidebarTitle}>Información Nutricional</h3>
            <div className={styles.nutritionGrid}>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>{recipe.nutritionInfo.calories}</span>
                <span className={styles.nutritionLabel}>kcal</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>{recipe.nutritionInfo.protein}g</span>
                <span className={styles.nutritionLabel}>Proteína</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>{recipe.nutritionInfo.carbs}g</span>
                <span className={styles.nutritionLabel}>Carbohidratos</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>{recipe.nutritionInfo.fat}g</span>
                <span className={styles.nutritionLabel}>Grasas</span>
              </div>
            </div>
          </div>
          
          <div className={styles.tips}>
            <h3 className={styles.sidebarTitle}>Consejos del Chef</h3>
            <ul className={styles.tipsList}>
              {recipe.tips.map((tip, index) => (
                <li key={index} className={styles.tip}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.tags}>
            <h3 className={styles.sidebarTitle}>Etiquetas</h3>
            <div className={styles.tagsList}>
              {recipe.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
