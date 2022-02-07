import React, { createContext, useContext, useEffect, useState } from "react";

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context
        
    }

}

export function LoginProvider({ children }) {
    
    return (
        <context.Provider
            value={{
                
            }}
        >
            {children}
        </context.Provider>
    )
}