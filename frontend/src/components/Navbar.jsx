import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, CheckCircle2 } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-purple-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {!isAuth ? (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-indigo-100 transition flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 transition px-4 py-2 rounded-lg font-medium"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="text-white cursor-pointer hover:text-indigo-100 transition flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
