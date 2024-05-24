import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReviews({
  params,
}: {
  params: { productReviews: string; productId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) throw new Error("Error loading review");

  if (parseInt(params.productReviews) > 100) return notFound();
  return (
    <h2>
      Reviews {params.productReviews} of Product {params.productId}
    </h2>
  );
}
