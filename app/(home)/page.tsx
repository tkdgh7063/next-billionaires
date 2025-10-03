import Billionaire from "@/components/billionaire";
import { getBillionaires } from "@/lib/api";
import styles from "./home.module.css";

export default async function Home() {
  const billionaires = await getBillionaires();
  return (
    <div className={styles.container}>
      {billionaires.map((b) => (
        <Billionaire
          key={b.id}
          id={b.id}
          name={b.name}
          netWorth={b.netWorth}
          industry={b.industries}
          image={b.squareImage}
        />
      ))}
    </div>
  );
}
