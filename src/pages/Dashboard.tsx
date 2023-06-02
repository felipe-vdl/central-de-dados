import { useState } from "react";
import { useParams } from "react-router-dom";

const dashboards = {
  semed: "4",
};

function hasKey<K extends string, T extends object>(
  k: K,
  o: T
): o is T & Record<K, unknown> {
  return k in o;
}


export default function DashboardPage() {
  const { dashboardName } = useParams();
  const id = dashboardName ? dashboardName?.toLowerCase() : "";
  
  const [currentFrame, setCurrentFrame] = useState<string>("");

  const getDashboard = async (id: string) => {
    setCurrentFrame(`${import.meta.env.VITE_METABASE_URL}/embed/dashboard/${id}`)
  };
  
  if (hasKey(id, dashboards)) {
    dashboards[id];
    getDashboard(id);
  }

  return <iframe src={currentFrame} />;
}
