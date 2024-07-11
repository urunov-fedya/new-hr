import { SidebarMenuUI } from "@/entities"
import { menu } from ".."

export const Sidebar = () => {
  return (
    <aside>
      <nav>
        <SidebarMenuUI data={menu} />
      </nav>
    </aside>
  )
}
