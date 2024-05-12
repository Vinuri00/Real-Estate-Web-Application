import {
  HomeIcon,
  UserGroupIcon,
  ServerStackIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import Bookings from "./pages/dashboard/Broker"; // Brokers
import AddBroker from "./pages/dashboard/AddBroker"; // Add Broker
import UpdateBroker from "./pages/dashboard/UpdateBroker"; // Update Broker
import VideoCall from "./pages/dashboard/VideoCall";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        // Manage Brokers
        icon: <UserGroupIcon {...icon} />,
        name: "Manage Bookings",
        path: "/bookings",
        element: <Bookings />,
      },
      {
        // Manage Brokers
        icon: <UserGroupIcon {...icon} />,
        name: "Video Conferencing",
        path: "/video-call",
        element: <VideoCall />,
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
