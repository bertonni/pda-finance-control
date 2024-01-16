import { ReactNode } from "react";

interface NavItemProps {
  icon?: ReactNode;
  isActive: boolean;
  label: string;
}

export const NavItem = ({ icon, isActive, label }: NavItemProps) => {
  return (
    <div className="h-[3.25rem] flex flex-col gap-1 bg-transparent">
      <div
        className={`h-8 min-w-16 rounded-2xl flex justify-center items-center
        ${isActive ? "bg-primary/10" : "bg-transparent hover:bg-primary/5"}
        transition-all`}
      >
        <div className="bg-transparent">{icon}</div>
      </div>
      <span
        className={`label-medium text-center text-[#44474F] bg-transparent
        ${isActive ? "text-primary" : "text-primary/20"}`}
      >
        {label}
      </span>
    </div>
  );
};
