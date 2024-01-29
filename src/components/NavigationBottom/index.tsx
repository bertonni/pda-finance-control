import { Home, BarChart2, DollarSign, LogOut, UserPlus } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useAuth } from "../../hooks/useAuth";

export const NavigationBottom = () => {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  return (
    <div className="h-20 w-full flex items-center justify-evenly gap-4 bg-[#EFEDF1]">
      <Link to={"/finance/home"}>
        <NavItem
          isActive={pathname === "/finance/home"}
          label={"Home"}
          icon={
            <Home
              size={24}
              color={pathname === "/finance/home" ? "#345ca8" : "#345ca850"}
             
            />
          }
        />
      </Link>
      <Link to={"/finance/tuition"}>
        <NavItem
          isActive={pathname === "/finance/tuition"}
          label={"Finanças"}
          icon={
            <DollarSign
              size={24}
              color={pathname === "/finance/tuition" ? "#345ca8" : "#345ca850"}
             
            />
          }
        />
      </Link>
      <Link to={"/finance/details"}>
        <NavItem
          isActive={pathname === "/finance/details"}
          label={"Detalhes"}
          icon={
            <BarChart2
              size={24}
              color={pathname === "/finance/details" ? "#345ca8" : "#345ca850"}
             
            />
          }
        />
      </Link>
      {<Link to={"/finance/register"}>
        <NavItem
          isActive={pathname === "/finance/register"}
          label={"Cadastro"}
          icon={
            <UserPlus
              size={24}
              color={pathname === "/finance/register" ? "#345ca8" : "#345ca850"}
             
            />
          }
        />
      </Link>}
      <Link to={"/"} onClick={logout}>
        <NavItem
          isActive={false}
          label="Sair"
          icon={
            <LogOut size={24} color={"#345ca870"} />
          }
        />
      </Link>
    </div>
  );
};
