export default function ProductDetails({
  params,
}: {
  params: { productId: String };
}) {
  return <h1>Details about Product {params.productId}</h1>;
}
