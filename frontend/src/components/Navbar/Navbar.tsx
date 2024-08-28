import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div>
          <span className={styles.logo}>Booking.com</span>
        </div>
        <div>
          <button className={styles.navButton}>Sign In</button>
          <button className={styles.navButton}>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
