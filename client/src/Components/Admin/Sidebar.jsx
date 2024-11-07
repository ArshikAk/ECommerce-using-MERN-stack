import { FaHome, FaBox, FaShoppingCart, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../RouteProtectors/AuthContext';

const Sidebar = () => {

  const location = useLocation()
  const {logOut} = useAuth()

  const selectedTabStyle = (path) => {
    return location.pathname === path ? 'flex items-center p-3 bg-gray-700 text-white rounded-md' : 'flex items-center p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md'
  }

  const handleLogOut = () => {
    logOut()
  }

  return (
    <div className="min-h-[100vh] w-64 bg-gray-800 text-white">
      <div className="p-6 text-2xl font-semibold">
        Admin Dashboard
      </div>
      <nav className="mt-10">
        <Link to="/admin/dashboard" className={selectedTabStyle("/admin/dashboard")}>
          <FaHome className="mr-3" />
          Dashboard
        </Link>

        <Link to="/admin/products" className={selectedTabStyle("/admin/products")}>
          <FaBox className="mr-3" />
            Products
        </Link>

        <Link to="/admin/orders" className={selectedTabStyle("/admin/orders")}>
          <FaShoppingCart className="mr-3" />
          Orders
        </Link>

        <Link className={selectedTabStyle("/admin/settings")} onClick={() => handleLogOut()} >
          <FaCog className="mr-3" />
          LogOut
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
