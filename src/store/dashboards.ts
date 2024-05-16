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
  "assistencia-social": {
    id: 14,
    logo: prefeituraLogo,
    nome: "ASSISTÊNCIA SOCIAL",
  },
  "iptu": {
    id: 13,
    logo: prefeituraLogo,
    nome: "IPTU",
  },
  "procuradoria": {
    id: 19,
    logo: prefeituraLogo,
    nome: "PROCURADORIA",
  },
  semad: {
    id: 16,
    logo: prefeituraLogo,
    nome: "ADMINISTRAÇÃO",
  },
  semed: {
    id: 4,
    logo: prefeituraLogo,
    banner: semedBanner,
    nome: "EDUCAÇÃO",
  },
  /* semus: {
    id: 21,
    logo: prefeituraLogo,
    nome: "SAÚDE",
  },*/
};

export default dashboardList;
