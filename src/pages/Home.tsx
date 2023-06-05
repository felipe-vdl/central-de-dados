import dashboardList from "../store/dashboards";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex-1 flex justify-evenly flex-wrap gap-x-4 gap-y-8 p-4">
      {Object.keys(dashboardList).map(dashboard => (
        <div key={uuid()} className="flex justify-center self-start w-full md:w-1/4 lg:w-1/5">
          <Link to={dashboard} className="p-4 flex flex-col items-center rounded hover:bg-slate-200 transition-colors">
            <img width={256} alt={dashboard.toUpperCase()} className="aspect-square object-cover object-center" src={dashboardList[dashboard].logo} />
            <p className="font-bold bg-roxo text-white w-full md:w-4/5 text-center p-1 rounded mt-2">{dashboard.toUpperCase()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}