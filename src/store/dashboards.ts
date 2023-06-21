import prefeituraLogo from "../assets/logos/prefeitura.png";
import semedBanner from "../assets/banners/semed.png";

interface DashboardList {
  [key: string]: {
    id: number;
    logo: string;
    banner?: string;
    nome?: string;
  };
}

const dashboardList: DashboardList = {
  "semed": {
    id: 4,
    logo: prefeituraLogo,
    banner: semedBanner,
    nome: 'SEMED'
  },
  "atendimentos-semas": {
    id: 14,
    logo: prefeituraLogo,
    nome: "ATENDIMENTOS SEMAS"
  },
  "atendimentos-iptu": {
    id: 13,
    logo: prefeituraLogo,
    nome: "ATENDIMENTOS IPTU"
  },
};

export default dashboardList;
