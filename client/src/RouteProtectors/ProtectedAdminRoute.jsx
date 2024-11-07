import { useAuth } from "./AuthContext"
import { Navigate , Outlet } from "react-router-dom"

const ProtectedAdminRoute = () => {

  const {user} = useAuth() || null

  if(user && user.role == "admin")
  {
    return <Outlet/>
  }
  else{
    return <Navigate to="/login"/>
  }
  
}

export default ProtectedAdminRoute
