import { getBillionaire } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import styles from "./financial-asset.module.css";

export default async function FinancialAsset({ id }: { id: string }) {
  const data = await getBillionaire(id);
  return (
    <div className={styles.container}>
      {data.financialAssets.map((asset) => (
        <div key={asset.companyName}>
          <span>Ticker: {asset.ticker}</span>
          <span>Shares: {asset.numberOfShares.toLocaleString()}</span>
          {asset.exerciseOptionPrice ? (
            <span>
              Excercise Price:{" "}
              {formatPrice(asset.exerciseOptionPrice, asset.currencyCode)}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
