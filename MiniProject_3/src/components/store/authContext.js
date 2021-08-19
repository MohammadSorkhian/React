const { createContext } = require("react");

const AuthContext = createContext({
    isLoggedIn: false,
    logoutHandler:()=>{}
})

export default AuthContext;