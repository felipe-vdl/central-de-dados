import semedLogo from "../assets/semedLogo.png";

interface DashboardList {
  [key: string]: {
    id: number,
    logo: string
  }
}

const dashboardList: DashboardList = {
  semed: {
    id: 4,
    logo: semedLogo
  }
};

export default dashboardList;