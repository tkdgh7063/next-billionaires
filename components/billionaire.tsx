"use client";

import { formatNetWorth } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/components/billionaire.module.css";

interface BillionaireProps {
  id: string;
  name: string;
  netWorth: number;
  industry: string[];
  image: string;
}

export default function Billionaire({
  id,
  name,
  netWorth,
  industry,
  image,
}: BillionaireProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${id}`);
  };
  return (
    <div className={styles.container}>
      <img
        src={
          image === "https:undefined"
            ? "https://specials-images.forbesimg.com/imageserve/609326e285d4b3b1edcb9a78/416x416.jpg?background=000000&cropX1=2&cropX2=800&cropY1=2&cropY2=800"
            : image
        }
        alt={name}
        onClick={onClick}
      />
      <Link prefetch href={`/${id}`}>
        <span className={styles.name}>{name}</span>
        <div>
          <span>
            {formatNetWorth(netWorth)} / {industry}
          </span>
        </div>
      </Link>
    </div>
  );
}
