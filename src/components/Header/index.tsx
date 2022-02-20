import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header} >
            <img src="/images/logo-caverna.jpg" alt="Girl coding" />
            <SignInButton />
        </header>
    );
}