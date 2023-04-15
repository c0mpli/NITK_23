import { createContext, useReducer } from "react";
import { useEffect } from "react";
export const AuthContext = createContext()


export function authReducer(state,action){
    switch(action.type){
        case 'LOGIN':
            return {user:action.payload}
        case 'LOGOUT':
            return {user:null}
        default:
            return state
    }
}

export function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(authReducer,{
        user:null
    })
    useEffect(()=>{
        async function fetchDetails(){
            const isUser = await localStorage.getItem('name')
            const role = await localStorage.getItem('role')
            //console.log(role)
            if(isUser){
                //console.log("User exists")
                dispatch({type:'LOGIN',payload:{
                    firstname:isUser,
                    usertype:role
                }})
            }
        }
        fetchDetails()
    },[])
    //console.log("AuthContextState: ",state)

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}