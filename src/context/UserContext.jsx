import {useState, createContext} from 'react'

export const UserContext = createContext()


export function UserProvider({children}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      userName,
      setUserName,
    }}>
      {children}
    </UserContext.Provider>
  )
}