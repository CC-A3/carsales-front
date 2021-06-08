import DashboardIcon from "./assets/DashboardIcon.svg";
import DashboardIconActive from "./assets/DashboardIconActive.svg";
import WatchListIcon from "./assets/WatchListIcon.svg";
import WatchListIconActive from "./assets/WatchListIconActive.svg";
import SallCarIcon from "./assets/SallCarIcon.svg";
import SallCarIconActive from "./assets/SallCarIconActive.svg";
// import SignOutIcon from "./assets/SignOutIcon.svg";
import ProfileIcon from "./assets/ProfileIcon.svg";
import ProfileIconActive from "./assets/ProfileIconActive.svg";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import WatchList from "./Pages/WatchList/WatchList";
import SallCar from "./Pages/SellCar/SellCar";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard-customer/dashboard",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    component: <Dashboard/>,
  },
  {
    label: "Profile",
    path: "/dashboard-customer/profile",
    icon: ProfileIcon,
    activeIcon: ProfileIconActive,
    component: <Profile />,
  },
  {
    label: "Watch Lists",
    path: "/dashboard-customer/watch-lists",
    icon: WatchListIcon,
    activeIcon: WatchListIconActive,
    component: <WatchList />,
  },
  {
    label: "Sell Cars",
    path: "/dashboard-customer/sell-cars",
    icon: SallCarIcon,
    activeIcon: SallCarIconActive,
    component: <SallCar />,
  },
  // {
  //   label: "Sign Out",
  //   path: "/sign-out",
  //   icon: SignOutIcon,
  //   activeIcon: SignOutIcon,
  // },
];

export default routes;
