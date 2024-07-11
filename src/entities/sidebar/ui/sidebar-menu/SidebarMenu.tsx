import { FC } from "react"
import { SidebarMenuItemUI } from ".."
import type { TSidebarMenuProps } from "."

export const SidebarMenuUI: FC<TSidebarMenuProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <SidebarMenuItemUI key={index} item={item} />
      ))}
    </ul>
  )
}
