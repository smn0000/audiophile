import { useParams } from "react-router-dom"

const Product = () => {
  const { name } = useParams()
  return <div>Product {name}</div>
}

export default Product
