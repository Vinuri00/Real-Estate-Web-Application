import {
  HomeIcon,
  UserGroupIcon,
  ServerStackIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import Brokers from "./pages/dashboard/Broker"; // Brokers
import AddBroker from "./pages/dashboard/AddBroker"; // Add Broker
import UpdateBroker from "./pages/dashboard/UpdateBroker"; // Update Broker
import LawyerComponent from "./pages/dashboard/Lawyer"; // Lawyers
import AdvertisementComponent from "./pages/dashboard/Advertisement"; // Advertisement


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      
      {
        // Manage Brokers
        icon: <UserGroupIcon {...icon} />,
        name: "Manage Brokers",
        path: "/brokers",
        element: <Brokers />,
      },

      {
        // Manage Lawyers
        icon: <AcademicCapIcon {...icon} />,
        name: "Manage Lawyers",
        path: "/lawyers",
        element: <LawyerComponent />,
      },

      {
        // Manage Advertisements
        icon: <ServerStackIcon {...icon} />,
        name: "Manage Advertisements",
        path: "/advertisements",
        element: <AdvertisementComponent />,
      },
    ],
  },

  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      
    ],
  },

  {
    layout: "dashboard-sub",
    pages: [
      // add brokers
      {
        name: "Add Brokers",
        path: "/brokers/add-new",
        element: <AddBroker />,
      },

      // Add broker routings
      {
        name: "Add Broker",
        path: "/brokers/update/:id",
        element: <UpdateBroker />,
      },
    ],
  },
];


export default routes;
