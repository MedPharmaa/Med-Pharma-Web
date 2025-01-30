import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./components/signIn/Form";
import SignUp from "./pages/signUp/SignUp";
import Labs from "./pages/labs/Labs";
import { Toaster } from "react-hot-toast";
import Experience from "./pages/experience/Experience";
import Products from "./pages/product/Products";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import PincodeDrawer from "./components/Product/PincodeDrawer/PincodeDrawer.jsx";
import Cart from "./pages/cart/Cart";
import LabTest from "./pages/labtest/LabTest";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext, useState } from "react";
import ContactUs from "./pages/Contact/ContactUs";
import { useLocation } from "react-router-dom";
import LabListing from "./pages/labs-listing/LabListing";
import MyAccount from "./Profiles/User-Account/MyAccount";
import DoctorProfile from "./Profiles/Doctor-Account/Dashboard.jsx";
import DashboardLayout from "./dashboard/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import UploadMedicine from "./dashboard/UploadMedicine";
import ManageMedicine from "./dashboard/ManageMedicine";
import Orders from "./dashboard/Orders";
import { Navbar, Footer } from "./components/home";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import { AuthContext } from "./context/AuthContext";
import TopDoctors from "./components/home/TopDoctors";
import HealthRecord from "./components/home/Health-Records/HealthRecords";
import Admin from "./pages/Admin/admin.jsx";
import AdminLab from "./pages/Admin/adminLab.jsx";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { user } = useContext(AuthContext);

  // const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);

  // Define the routes where you want to hide the Navbar
  const routesWithoutNavbar = ["/products"];

  useEffect(() => {
    const currentRoute = window.location.pathname;

    // Check if the current route is in the list of routes without Navbar
    const shouldHideNavbar = routesWithoutNavbar.includes(currentRoute);

    // Update the state to control Navbar visibility
    setShowNavbar(!shouldHideNavbar);
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {showNavbar && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/sign-up"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin-lab" element={<AdminLab />}></Route>
        <Route path="/exp" element={<Experience />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/pharmacy" element={<Pharmacy />}></Route>
        <Route path="/hospitals" element={<PincodeDrawer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/doctors" element={<TopDoctors />}></Route>
        <Route path="/health-records" element={<HealthRecord />}></Route>
        <Route path="/lab-test" element={<LabTest />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/lab-list/:id" element={<LabListing />}></Route>
        <Route
          path="/users/profile/me"
          element={
            <ProtectedRoutes allowedRoles={["patient"]}>
              <MyAccount />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoutes allowedRoles={["doctor"]}>
              <DoctorProfile />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/pharma/dashboard" element={<DashboardLayout />}>
          <Route path="/pharma/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/pharma/dashboard/upload-medicine"
            element={<UploadMedicine />}
          ></Route>
          <Route
            path="/pharma/dashboard/manage-medicine"
            element={<ManageMedicine />}
          ></Route>
          <Route path="/pharma/dashboard/orders" element={<Orders />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
