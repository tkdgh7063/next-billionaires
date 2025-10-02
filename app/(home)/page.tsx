import Billionaire from "@/components/Billionaire";
import { getBillionaires } from "@/lib/api";
import "@/styles/global.css";

export default async function Home() {
  const billionaires = await getBillionaires();
  return (
    <>
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
    </>
  );
}
