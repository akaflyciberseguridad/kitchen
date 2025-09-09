import styles from './InstructionsList.module.css';

export default function InstructionsList({ instructions }) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.title}>Preparación</h2>
        <div className={styles.totalSteps}>
          {instructions.length} pasos
        </div>
      </header>
      
      <ol className={styles.instructionsList}>
        {instructions.map((instruction, index) => (
          <li key={instruction.step} className={styles.instruction}>
            <div className={styles.stepNumber}>
              <span className={styles.stepNumberText}>{instruction.step}</span>
            </div>
            
            <div className={styles.instructionContent}>
              <h3 className={styles.stepTitle}>{instruction.title}</h3>
              <p className={styles.stepDescription}>{instruction.description}</p>
              
              {index < instructions.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          </li>
        ))}
      </ol>
      
      <div className={styles.completionBadge}>
        <span className={styles.completionEmoji}>🎉</span>
        <span className={styles.completionText}>¡Tu paella valenciana está lista para servir!</span>
      </div>
    </section>
  );
}
