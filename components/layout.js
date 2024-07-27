import styles from './layout.module.css';
// import '../styles/aa.css'
export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
}