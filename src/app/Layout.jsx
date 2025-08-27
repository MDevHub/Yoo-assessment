import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { AuthProvider, AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
   const { user } = useContext(AuthContext);
   return user ? children : <Navigate to="/" />;
};

const Layout = () => {
   return (
      <AuthProvider>
         <BrowserRouter>
            {/* App container with max width and center alignment */}
            <div className="">
               <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route
                     path="/main"
                     element={
                        <ProtectedRoute>
                           <MainPage />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/detail/:id"
                     element={
                        <ProtectedRoute>
                           <DetailPage />
                        </ProtectedRoute>
                     }
                  />
               </Routes>
            </div>
         </BrowserRouter>
      </AuthProvider>
   );
};

export default Layout;
