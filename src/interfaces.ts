export type TImages = {
  mobile: string
  tablet: string
  desktop: string
}

export type TIncludes = {
  quantity: number
  item: string
}

export type TOther = {
  slug: string
  name: string
  image: TImages
}

export interface IProduct {
  id: number
  slug: string
  name: string
  image: TImages
  category: string
  categoryImage: TImages
  new: boolean
  price: number
  description: string
  features: string
  includes: Array<TIncludes>
  gallery: {
    first: TImages
    second: TImages
    third: TImages
  }
  others: Array<TOther>
}

export type TCartItem = {
  item: IProduct
  quantity: number
}

export interface ICart {
  cartItems: TCartItem[]
  cartTotalQuantity: number
  cartTotalAmmount: number
}
