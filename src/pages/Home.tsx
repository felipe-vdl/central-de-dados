import dashboardList from "../store/dashboards";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex-1 flex justify-evenly flex-wrap gap-4 p-4">
      {Object.keys(dashboardList).map(dashboard => (
        <div key={crypto.randomUUID()} className="flex justify-center self-start w-full md:w-1/3 lg:w-1/4">
          <Link to={dashboard} className="p-4 flex flex-col items-center rounded hover:bg-slate-200 transition-colors">
            <img width={256} alt={dashboard.toUpperCase()} className="aspect-square object-cover object-center" src={dashboardList[dashboard].logo} />
            <p className="font-bold bg-roxo text-white w-1/3 text-center p-1 rounded mt-2">{dashboard.toUpperCase()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}