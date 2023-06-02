import { NavLink } from "react-router-dom";
import mesquitaWhiteLogo from "../assets/logoWhite.png";
import { useState } from "react";

export default function Navbar() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setDropdownIsOpen((st) => !st);
  };

  return (
    <header className="w-screen text-white bg-roxo md:gap-0  items-center z-20 shadow-md shadow-black/20">
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-2 p-2">
        <div className="flex justify-center">
          <NavLink to={"/"}>
            <img
              className="drop-shadow-md mx-auto"
              width={240}
              alt="Logo Mesquita"
              src={mesquitaWhiteLogo}
            />
          </NavLink>
        </div>
        <div className="row-span-2 flex justify-center">
          <button
            aria-label="Abrir/fechar dropdown de links das secretarias."
            title="Secretarias"
            className={`hover:text-indigo-300 ${dropdownIsOpen ? "text-indigo-200" : ""} flex flex-col items-center text-2xl font-bold tracking-wider hover:cursor-pointer gap-1`}
            onClick={handleToggleDropdown}
          >
            <span>SECRETARIAS</span>
            {dropdownIsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {dropdownIsOpen && (
        <nav className="bg-roxo z-10 shadow-md shadow-black/20 border-y border-white/30">
          <ul className="flex flex-wrap items-center justify-between">
            <li className="w-1/3 md:w-1/6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block text-center font-bold py-2 text-indigo-50 bg-indigo-400/40"
                    : "block text-center font-bold py-2 hover:text-indigo-50 hover:bg-indigo-400/40 text-white"
                }
                to={"/semed"}
              >
                SEMED
              </NavLink>
            </li>
            <li className="w-1/3 md:w-1/6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block text-center font-bold py-2 text-indigo-50 bg-indigo-400/40"
                    : "block text-center font-bold py-2 hover:text-indigo-50 hover:bg-indigo-400/40 text-white"
                }
                to={"/semus"}
              >
                SEMUS
              </NavLink>
            </li>
            <li className="w-1/3 md:w-1/6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block text-center font-bold py-2 text-indigo-50 bg-indigo-400/40"
                    : "block text-center font-bold py-2 hover:text-indigo-50 hover:bg-indigo-400/40 text-white"
                }
                to={"/semas"}
              >
                SEMAS
              </NavLink>
            </li>
            <li className="w-1/3 md:w-1/6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block text-center font-bold py-2 text-indigo-50 bg-indigo-400/40"
                    : "block text-center font-bold py-2 hover:text-indigo-50 hover:bg-indigo-400/40 text-white"
                }
                to={"/semsop"}
              >
                SEMSOP
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
