import { Home, BarChart2, DollarSign, LogOut } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useAuth } from "../../hooks/useAuth";

export const NavigationBottom = () => {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  return (
    <div className="h-20 w-full flex items-center justify-center gap-4 bg-[#EFEDF1]">
      <Link className="bg-transparent" to={"/finance/home"}>
        <NavItem
          isActive={pathname === "/finance/home"}
          label={"Home"}
          icon={
            <Home
              size={24}
              color={pathname === "/finance/home" ? "#345ca8" : "#345ca850"}
              className="bg-transparent"
            />
          }
        />
      </Link>
      <Link className="bg-transparent" to={"/finance/tuition"}>
        <NavItem
          isActive={pathname === "/finance/tuition"}
          label={"Finanças"}
          icon={
            <DollarSign
              size={24}
              color={pathname === "/finance/tuition" ? "#345ca8" : "#345ca850"}
              className="bg-transparent"
            />
          }
        />
      </Link>
      <Link className="bg-transparent" to={"/finance/details"}>
        <NavItem
          isActive={pathname === "/finance/details"}
          label={"Detalhes"}
          icon={
            <BarChart2
              size={24}
              color={pathname === "/finance/details" ? "#345ca8" : "#345ca850"}
              className="bg-transparent"
            />
          }
        />
      </Link>
      <Link className="bg-transparent" to={"/"} onClick={logout}>
        <NavItem
          isActive={false}
          label="Sair"
          icon={
            <LogOut size={24} color={"#345ca870"} className="bg-transparent" />
          }
        />
      </Link>
    </div>
  );
};
