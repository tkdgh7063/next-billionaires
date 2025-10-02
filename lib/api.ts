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

interface financialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
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
  return await data.json();
}

export async function getBillionaire(id: string): Promise<BillionaireDetail> {
  const data = await fetch(`${BASE_URL}/person/${id}`, {
    cache: "force-cache",
  });
  return await data.json();
}
