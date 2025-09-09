import styles from './IngredientsList.module.css';

export default function IngredientsList({ ingredients, servings }) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.title}>Ingredientes</h2>
        <div className={styles.servingsInfo}>
          <span className={styles.servingsLabel}>Para</span>
          <span className={styles.servingsCount}>{servings}</span>
          <span className={styles.servingsLabel}>personas</span>
        </div>
      </header>
      
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className={styles.ingredient}>
            <div className={styles.ingredientContent}>
              <span className={styles.ingredientName}>{ingredient.name}</span>
              <div className={styles.ingredientAmount}>
                <span className={styles.amount}>{ingredient.amount}</span>
                {ingredient.unit && (
                  <span className={styles.unit}>{ingredient.unit}</span>
                )}
              </div>
            </div>
            <div className={styles.ingredientDivider}></div>
          </li>
        ))}
      </ul>
      
      <div className={styles.tips}>
        <h3 className={styles.tipsTitle}>💡 Consejos de ingredientes</h3>
        <ul className={styles.tipsList}>
          <li>Compra los ingredientes frescos el mismo día de la preparación</li>
          <li>Puedes sustituir el garrofón por judías lima si no lo encuentras</li>
          <li>El azafrán de buena calidad marcará la diferencia en el sabor</li>
        </ul>
      </div>
    </section>
  );
}
