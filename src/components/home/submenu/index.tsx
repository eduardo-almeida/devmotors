import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

export function Submenu() {
  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon}>
        <Menu size={34} color="#121212" /> Menu
      </div>
      <ul className={styles.ul}>
        <li>
          <Link href="/post/pagina1">pagina 1</Link>
        </li>
        <li>
          <Link href="/post/pagina2">pagina 2</Link>
        </li>
      </ul>
    </section>
  );
}
