import React, { useContext } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { LuActivity } from "react-icons/lu";
import Logo from "../assets/HSL.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx"; // Ensure the context path is correct
import { toast } from "react-hot-toast";

function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" }); // Dispatching the logout action
        toast.success("Logged out successfully!");
        setTimeout(() => navigate("/"), 1000); // Redirecting to the login page
    };

    return (
        <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            {/* Logo Section */}
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src={Logo} alt="brand" className="h-8 w-8" />
                <Typography variant="h5" color="blue-gray">
                    HealthSaathi
                </Typography>
            </div>

            {/* Sidebar Menu */}
            <List className="gap-4">
                {/* Dashboard Section */}
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <Link to="/pharma/dashboard">
                        <ListItem>
                            <ListItemPrefix>
                                <LuActivity className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Analytics
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to="/pharma/dashboard/orders">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Orders
                                </ListItem>
                            </Link>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Customers
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                {/* Medicines Section */}
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Medicines
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to="/pharma/dashboard/upload-medicine">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Upload Medicine
                                </ListItem>
                            </Link>
                            <Link to="/pharma/dashboard/manage-medicine">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Manage Medicine
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                {/* Inbox Section */}
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip
                            value="14"
                            size="sm"
                            variant="ghost"
                            color="blue-gray"
                            className="rounded-full"
                        />
                    </ListItemSuffix>
                </ListItem>

                {/* Profile Section */}
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>

                {/* Settings Section */}
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>

                {/* Logout Section */}
                <ListItem onClick={handleLogout} className="cursor-pointer">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}

export default Sidebar;
