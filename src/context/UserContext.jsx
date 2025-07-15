import { createContext, useRef, useState } from "react";

export const webSocketContext = createContext(null)


export const ContextProvider = (({children}) => {

    // const socketRef = useRef(null) // store socket instance

    const serverUrl = "http://localhost:3000"

    const value = {
        // socketRef,
        serverUrl
    }


    return(

    <webSocketContext.Provider value={value}>
        {children}
    </webSocketContext.Provider>
    )
})