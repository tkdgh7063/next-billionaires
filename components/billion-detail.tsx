import styles from "@/components/billion-detail.module.css";
import { getBillionaire } from "@/lib/api";

export default async function BillionaireDetail({ id }: { id: string }) {
  const data = await getBillionaire(id);

  return (
    <div className={styles.container}>
      <img src={data.squareImage} alt={data.name} />
      <h2>{data.name}</h2>
      <h4>Networth: {data.netWorth}</h4>
      <h4>Country: {data.country}</h4>
      <h4>Industry: {data.industries}</h4>
      <p>{data.bio}</p>
    </div>
  );
}
