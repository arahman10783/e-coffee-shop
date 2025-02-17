import { createContext, useEffect, useState } from "react";

export const SelectedProductContext = createContext(null)

export function SelectedProductsProvider ({children}){
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState(0)

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

    function calculateTotal() {
      const total = selectedProducts.reduce((total, {count}) => {
        return total += count
      }, 0)
      setTotal(total)
    }

    useEffect(() => {
      calculateTotal()
    }, [selectedProducts])


    return (
      <SelectedProductContext.Provider value= {{selectedProducts,addProduct, total }}>
        {children}
      </SelectedProductContext.Provider>
    )
}
