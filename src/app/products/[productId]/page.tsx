import { notFound } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  if (params.productId > 3) return notFound();

  return <h1>Details about Product {params.productId}</h1>;
}
