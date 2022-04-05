import { NavLink } from "react-router-dom";

export const Navigation = ({ children }) => {
  return (
    <nav className="col-span-3 flex flex-col border-r-2 border-teal-400 h-full">
      {children}
    </nav>
  );
};

export const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-teal-300 hover:bg-teal-400"
          : "bg-white hover:bg-teal-100"
      }
    >
      <article className="w-full p-4">{children}</article>
    </NavLink>
  );
};
