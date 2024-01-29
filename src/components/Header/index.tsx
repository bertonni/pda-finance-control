import { ArrowLeft, User } from "react-feather";
import { HeaderProps } from "./types";
import { Link } from "react-router-dom";

export const Header = ({ title }: HeaderProps) => {
  return (
    <div
      className="h-16 px-4 flex items-center w-full justify-between
        bg-[#EFEDF1]"
    >
      <div className="flex gap-4 items-center">
        <Link to={"/finance/home"}>
          <ArrowLeft size={24} />
        </Link>
        <h3 className="title-large text-left">{title}</h3>
      </div>
      <div>
        <div className="rounded-full cursor-pointer hover:bg-gray-50 p-2">
          <User size={24} />
        </div>
      </div>
    </div>
  );
};
