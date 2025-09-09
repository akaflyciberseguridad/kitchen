import styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <h1 className={styles.logo}>
              <span className={styles.logoIcon}>🍳</span>
              Kitchen
            </h1>
            <span className={styles.tagline}>Blog de Recetas</span>
          </div>
          
          <ul className={styles.navList}>
            <li><a href="#inicio" className={styles.navLink}>Inicio</a></li>
            <li><a href="#recetas" className={styles.navLink}>Recetas</a></li>
            <li><a href="#categorias" className={styles.navLink}>Categorías</a></li>
            <li><a href="#sobre-mi" className={styles.navLink}>Sobre mí</a></li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <section className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Kitchen</h3>
            <p className={styles.footerText}>
              Compartiendo las mejores recetas tradicionales y modernas para tu cocina.
            </p>
          </section>
          
          <section className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Enlaces</h3>
            <ul className={styles.footerList}>
              <li><a href="#recetas" className={styles.footerLink}>Todas las recetas</a></li>
              <li><a href="#categorias" className={styles.footerLink}>Categorías</a></li>
              <li><a href="#tips" className={styles.footerLink}>Tips de cocina</a></li>
            </ul>
          </section>
          
          <section className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Síguenos</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">📹</a>
            </div>
          </section>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 Kitchen Blog. Hecho con ❤️ para los amantes de la cocina.
          </p>
        </div>
      </footer>
    </div>
  );
}
