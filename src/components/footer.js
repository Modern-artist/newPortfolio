import styles from "@/styles/Footer.module.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className={styles.footer} >
      &copy; Copyright Reversed
    </div>
  );
}

export default Footer;
