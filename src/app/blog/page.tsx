import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  }
};

export default function Blog() {
  return <h1 className="text-center">My Blog</h1>;
}
