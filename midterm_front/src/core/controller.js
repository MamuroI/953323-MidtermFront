import { createContext, useContext, useState } from "react";

const context = createContext(null)

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.user = context.user
        this.setUser = context.setUser
    }
}

export function CoreProvider({ children }) {
    const [user, setUser] = useState(null);


    return (
        <context.Provider value={{
            // State
            user, setUser
        }}>
            {children}
        </context.Provider>
    )
}

