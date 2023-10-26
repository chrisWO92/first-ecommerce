import React, { createContext, useState } from 'react'

export const EcommerceContext = createContext()

export const EcommerceProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const value = {count, setCount}

    return (
        <EcommerceContext.Provider 
            value={value}
        >
            {children}
        </EcommerceContext.Provider>
    )
}
