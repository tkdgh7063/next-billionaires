import BillionaireDetail from "@/components/billion-detail";
import FinancialAsset from "@/components/financial-asset";
import { getBillionaire } from "@/lib/api";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getBillionaire(id);
  return {
    title: data.name,
  };
}

export default async function BillionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div key={id}>
      <div>
        <Suspense fallback={<h1>Loading Detail...</h1>}>
          {/* @ts-expect-error Async server component */}
          <BillionaireDetail key={id} id={id} />
        </Suspense>
      </div>
      <div>
        <h2>Financial Assets</h2>
        <Suspense fallback={<h1>Loading Financial Assets...</h1>}>
          {/* @ts-expect-error Async server component */}
          <FinancialAsset id={id} />
        </Suspense>
      </div>
    </div>
  );
}
