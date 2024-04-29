import { createContext, useContext, useState } from "react";

const Mycontext = createContext()

export const useMycontext = ()=>{
    return useContext(Mycontext)
}
export const Mycontextprovider = ({children})=>{
    const [cart,setcart] = useState([])
    const allobj = {
        cart,
        setcart
    }
    return<Mycontext.Provider value={allobj}>{children}</Mycontext.Provider>
}