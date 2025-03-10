import React,{useContext,useReducer,createContext} from "react";




export const Context = createContext()

export const  StateProvider =({reducer,initialstate,children})=>{
    return(
        <Context.Provider value={useReducer(reducer,initialstate)}>
            {children}
        </Context.Provider>
    )

}


export const  UseStateValue =()=>useContext(Context)