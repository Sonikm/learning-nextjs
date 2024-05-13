export default function ProductName({params}: {params: {productName: String}}){
   return <h2>Product Name {params.productName}</h2>
}