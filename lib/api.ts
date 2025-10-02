const BASE_URL = process.env.API_URL;

type Industry =
  | "Automotive"
  | "Fashion & Retail"
  | "Technology"
  | "Finance & Investments"
  | "Diversified"
  | "Telecom"
  | "Media & Entertainment"
  | "Food & Beverage"
  | "Logistics"
  | "Real Estate"
  | "Metals & Mining"
  | "Gambling & Casinos"
  | "Manufacturing"
  | "Energy"
  | "Service"
  | "Healthcare"
  | "Construction & Engineering"
  | "Sports";

interface Billionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: Industry[];
}

export type CurrencyCode =
  | "USD" // 미국 달러
  | "EUR" // 유로
  | "GBP" // 영국 파운드
  | "JPY" // 일본 엔
  | "CNY" // 중국 위안
  | "KRW" // 한국 원
  | "AUD" // 호주 달러
  | "CAD" // 캐나다 달러
  | "CHF" // 스위스 프랑
  | "HKD" // 홍콩 달러
  | "SGD" // 싱가포르 달러
  | "INR" // 인도 루피
  | "BRL" // 브라질 레알
  | "ZAR"; // 남아공 랜드

interface financialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice?: number;
  sharePrice: number;
  currencyCode: CurrencyCode;
  exchangeRate: number;
  interactive: boolean;
  currentPrice?: number;
}

interface BillionaireDetail extends Billionaire {
  city: string;
  country: string;
  position: number;
  financialAssets: financialAsset[];
  bio: string[];
}

export async function getBillionaires(): Promise<Billionaire[]> {
  const data = await fetch(BASE_URL, { cache: "force-cache" });
  return data.json();
}

export async function getBillionaire(id: string): Promise<BillionaireDetail> {
  const data = await fetch(`${BASE_URL}/person/${id}`, {
    cache: "force-cache",
  });
  return data.json();
}
