import React, { createContext, useEffect, useState } from 'react'

export const EcommerceContext = createContext()

export const EcommerceProvider = ({ children }) => {
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open/Close
    const [detailOpen, setDetailOpen] = useState(false)
    const openProductDetail = () => setDetailOpen(true)
    const closeProductDetail = () => setDetailOpen(false)

    //Product Detail - Show Detail
    const [detailInfo, setDetailInfo] = useState({})

    //Cart - Adding products to Cart
    const [cart, setCart] = useState([])

    //Checkout - Open/Close
    const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false)
    const openCheckOutMenu = () => setCheckoutMenuOpen(true)
    const closeCheckOutMenu = () => setCheckoutMenuOpen(false)

    //Checkout - Adding order
    const [order, setOrder] = useState([])

    //Get products
    const [products, setProducts] = useState([])

    //Get products by search value
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue.length)

    //Get products by search value
    const [searchValueCategory, setSearchValueCategory] = useState('')

    //Get products by search value
    const [loading, setLoading] = useState(true)


    //siempre que haya consumo de API, pensar en useEffect
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => {
                setProducts(response)
                setLoading(false)
            })
    }, [])

    const filter = (productsArray, text) => {
        console.log('text:', text)
        let filteredProducts
        if (text === '') {
            filteredProducts = productsArray
            console.log('entró en el primer if')
            return filteredProducts
        } else {
            console.log('entró en el segundo if')
            filteredProducts = productsArray.filter((product) => {
                const productTitle = product.title.toLowerCase();
                const searchText = text.toLowerCase();
                return productTitle.includes(searchText);
            });
        }
        console.log('filteredProducts: ', filteredProducts)
        return filteredProducts;

    }

    const filterByCategory = (categoryText) => {
        let textSearch
        switch (categoryText) {
            case 'men-clothing':
                textSearch = `men's clothing`
                break;
            case 'women-clothing':
                textSearch = `women's clothing`
                break;
            default:
                textSearch = categoryText
                break;
        }
        console.log('category:', textSearch)
        let filteredProducts
        if (textSearch === '') {
            filteredProducts = products
            console.log('entró en el primer if')
            return filteredProducts
        } else {
            console.log('entró en el segundo if')
            filteredProducts = products.filter((product) => {
                const productCategory = product.category.toLowerCase();
                const searchCategory = textSearch.toLowerCase();
                return productCategory.includes(searchCategory);
            });
        }
        console.log('filteredProducts: ', filteredProducts)
        return filteredProducts;

    }

    const states = {
        count,
        detailOpen,
        detailInfo,
        cart,
        checkoutMenuOpen,
        order,
        products,
        searchValue,
        searchValueCategory,
        loading
    }

    const stateUpdaters = {
        setCount,
        setDetailOpen,
        openProductDetail,
        closeProductDetail,
        setDetailInfo,
        setCart,
        setCheckoutMenuOpen,
        openCheckOutMenu,
        closeCheckOutMenu,
        setOrder,
        setProducts,
        setSearchValue,
        filter,
        filterByCategory,
        setSearchValueCategory,
        setLoading
    }

    const value = {
        states,
        stateUpdaters
    }

    return (
        <EcommerceContext.Provider
            value={value}
        >
            {children}
        </EcommerceContext.Provider>
    )
}
