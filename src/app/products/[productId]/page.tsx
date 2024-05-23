import { notFound } from "next/navigation";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

// Dynamic metadata
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};


export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  if (params.productId > 3) return notFound();

  return <h1>Details about Product {params.productId}</h1>;
}
