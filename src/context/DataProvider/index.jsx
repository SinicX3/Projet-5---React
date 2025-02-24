import { createContext, useState } from "react"
import ads from "../../data/annonces.json"

export const DataContext = createContext()
export const DataProvider = ({ children }) => {

    const [offers, updateOffer] = useState(ads)

    return (
        <DataContext.Provider value={offers}>
            {children}
        </DataContext.Provider>
    )
}