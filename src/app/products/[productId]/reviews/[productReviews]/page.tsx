import { notFound } from "next/navigation";

export default function ProductReviews({
  params,
}: {
  params: { productReviews: string; productId: string };
}) {

  if(parseInt(params.productReviews) > 100) return notFound();
  return (
    <h2>
      Reviews {params.productReviews} of Product {params.productId}
    </h2>
  );
}
