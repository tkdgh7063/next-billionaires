"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./billionaire.module.css";

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
            ? "https://specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/416x416.jpg?background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082"
            : image
        }
        alt={name}
        onClick={onClick}
      />
      <Link prefetch href={`/:id`}>
        <div>
          <span>{name}</span>
          <div>
            <span>{netWorth}</span>
            <span>{industry}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
