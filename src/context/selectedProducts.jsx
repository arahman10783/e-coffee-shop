import { createContext, useEffect, useState } from "react";

export const SelectedProductContext = createContext(null)

export function SelectedProductsProvider ({children}){
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

    function addProduct(product){
      const isProductSelected = selectedProducts.find(p => p.id === product.id)
      
      if(isProductSelected){
        setSelectedProducts(prevState => [
          ...prevState.filter(p => p.id !== product.id),
          {
            ...isProductSelected,
            count: isProductSelected.count + 1
          }
        ])
      }else{
        setSelectedProducts(prevState => [
          ...prevState,
          {
            ...product,
            count: 1
          }
        ])
      }
    }

    function updateCount(id, newCount) {
      const product = selectedProducts.find(p => p.id === id)
      setSelectedProducts([
        ...selectedProducts.filter(p => p.id !== id),
        {
          ...product,
          count : newCount
        }
      ])
    }
    function deleteProduct(id){
      setSelectedProducts((prevState) => [
        ...prevState.filter(p => p.id !== id)
      ])
    }
    function calculateTotal() {
      const total = selectedProducts.reduce((total, {count}) => {
        return total += count
      }, 0)
      setTotal(total)
    }

    function calculateTotalPrice(){
      const totalPrice = selectedProducts.reduce((total, {count, price}) => {
        return total += (count * price)
      }, 0)
      setTotalPrice(totalPrice)
    }

    useEffect(() => {
      calculateTotal()
      calculateTotalPrice()
    }, [selectedProducts])


    return (
      <SelectedProductContext.Provider value= {{
          selectedProducts,
          addProduct, 
          total,
          totalPrice,
          deleteProduct,
          updateCount
        }}>
        {children}
      </SelectedProductContext.Provider>
    )
}
