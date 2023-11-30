import React,{useEffect,useState,useCallback} from 'react'
import "./Product-list.css"
import axios  from 'axios';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem"


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const {tg} = useTelegram();


    useEffect(()=>{
        const mealData = async () => {
            try {
                const response = await axios.get("https://sushitime47.ru/api/product/products?w=120&h=120")
                console.log("response>>>", response.data.results);
                setProducts(response.data.results)
            } catch (error) {
                console.error("Error fetching data: ", error);
                // Handle error appropriately
            }
        }
        mealData()
    },[])

    const onSendData=useCallback(() => {
      const data = {
          product: products,
      }
      fetch('http://localhost:8000/web-data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
  }, [products])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
        tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  return (<div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
  )
}

export default ProductList