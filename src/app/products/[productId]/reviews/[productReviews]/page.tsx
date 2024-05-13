export default function ProductReviews({
  params,
}: {
  params: { productReviews: String; productId: String };
}) {
  return (
    <h2>
      Reviews {params.productReviews} of Product {params.productId}
    </h2>
  );
}
