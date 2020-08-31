import { createContext } from "react"

export const LoginContext = createContext({
  loginState: {
    isLoading: false,
    user: null,
  },
    setLoginState: () => {}
  }
)
