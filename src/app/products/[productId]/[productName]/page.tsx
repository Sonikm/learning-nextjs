import { Metadata } from "next";

type Props = {
  params: {
    productName: string;
  };
};

// Dynamic Metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productName}`);
    }, 500);
  });
  return {
    title: `${title}`,
  };
};

export default function ProductName({
  params,
}: {
  params: { productName: String };
}) {
  return <h2>Product Name {params.productName}</h2>;
}
