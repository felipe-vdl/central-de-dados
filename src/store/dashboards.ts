import semedLogo from "../assets/logos/semed.png";
import semedBanner from "../assets/banners/semed.jpeg";

interface DashboardList {
  [key: string]: {
    id: number;
    logo: string;
    banner?: string;
  };
}

const dashboardList: DashboardList = {
  semed: {
    id: 4,
    logo: semedLogo,
    banner: semedBanner
  },
};

export default dashboardList;
