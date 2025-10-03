import { getBillionaire } from "@/lib/api";
import { formatNetWorth } from "@/lib/utils";
import styles from "./billion-detail.module.css";

export default async function BillionaireDetail({ id }: { id: string }) {
  const data = await getBillionaire(id);

  return (
    <div className={styles.container}>
      <img
        src={
          data.squareImage === "https:undefined"
            ? "https://specials-images.forbesimg.com/imageserve/609326e285d4b3b1edcb9a78/416x416.jpg?background=000000&cropX1=2&cropX2=800&cropY1=2&cropY2=800"
            : data.squareImage
        }
        alt={data.name}
      />
      <h2>{data.name}</h2>
      <h4>Networth: {formatNetWorth(data.netWorth)}</h4>
      <h4>Country: {data.country}</h4>
      <h4>City: {data.city}</h4>
      <h4>Industry: {data.industries}</h4>
      <p>{data.bio}</p>
    </div>
  );
}
