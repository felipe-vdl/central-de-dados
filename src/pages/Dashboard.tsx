import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sign from "../utils/sign";
import hasKey from "../utils/hasKey";
import dashboardList from "../store/dashboards";

const METABASE_URL = import.meta.env.VITE_METABASE_URL;
const METABASE_SECRET = import.meta.env.VITE_METABASE_SECRET;
const DASHBOARDS = { ...dashboardList };

export default function DashboardPage() {
  const { dashboardName } = useParams();
  const id = dashboardName ? dashboardName?.toLowerCase() : "";

  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (id && hasKey(id, DASHBOARDS)) {
      const getToken = async () => {
        const payload = {
          resource: { dashboard: DASHBOARDS[id] },
          params: {},
        };

        const jwt = await sign(payload, METABASE_SECRET);
        setToken(jwt);
      };

      getToken();
    }
  }, [id]);

  if (id && hasKey(id, DASHBOARDS)) {
    const frame = `${METABASE_URL}/embed/dashboard/${token}#bordered=true&titled=true`;
    return <iframe className="w-full" src={frame} allowTransparency />;
  }

  return <h1 className="m-auto text-2xl">O dashboard não foi encontrado.</h1>;
}
