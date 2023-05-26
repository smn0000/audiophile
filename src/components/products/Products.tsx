import "./style.scss"
import DATA from "../../data.json"
import { IProduct } from "../../interfaces"
import { useMemo } from "react"
import Product from "./Product"

const Products = ({ category }: { category: string }) => {
  const getData = (data: IProduct[]) => {
    let arr = data.filter((el) => el.category === category)

    //Makes the new element be first in the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].new) {
        ;[arr[0], arr[i]] = [arr[i], arr[0]]
        break
      }
    }
    return arr
  }
  const data = useMemo(() => getData(DATA), [category])
  return (
    <div className='products'>
      {data.map((product, index) => (
        <Product
          key={index}
          product={product}
        />
      ))}
    </div>
  )
}

export default Products
