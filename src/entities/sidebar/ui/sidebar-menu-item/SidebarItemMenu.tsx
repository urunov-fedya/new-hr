import { FC, useCallback, useState } from "react"
import { Link } from "react-router-dom";
import { TSidebarItemMenuProps } from ".";
import { SidebarMenuUI } from "..";
import { Icons } from "@/shared";

export const SidebarMenuItemUI: FC<TSidebarItemMenuProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  }, []);

  return (
    <li>
      <Link
        to={item.link}
        onClick={e => item.children ? handleDropdown(e) : undefined}
        className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      >
        <span>{item.title}</span>
        {item.children ? <Icons.Dropdown /> : null}
      </Link>
      {isOpen && item.children ? <SidebarMenuUI data={item.children} /> : null}
    </li>
  )
}
