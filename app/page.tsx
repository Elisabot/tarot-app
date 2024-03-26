import { createDeck } from "@/public/deck";
import styles from "./page.module.css";

export default function Home() {
  let deck = createDeck();
  const cards = deck.map((card, i) => (
    <li key={i}>{card.value}</li>
  )
);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>our deck object</h2>
      </div>

      <div className={styles.grid}>
        <ul>{cards}</ul>
      </div>
    </main>
  );
}
