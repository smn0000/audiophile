export const parseItemName = (name: string): string => {
  let string = ""
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") break
    else string = string + name[i]
  }
  return string
}

export const currencyFormatter = new Intl.NumberFormat("us-US", {
  maximumFractionDigits: 0,
  style: "currency",
  currency: "USD",
})
