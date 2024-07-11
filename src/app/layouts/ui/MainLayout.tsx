import { useAuth } from "@/shared"
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isAuth } = useAuth();
  return (
    <main>
      {!isAuth ? (
        <>
          <Sidebar />
          <Outlet />
        </>
      ) : (
        <div>
          Извините, кажется, Вы не авторизованы, пожалуйста, <Link to="/auth">авторизуйтесь</Link>
        </div>
      )}
    </main>
  )
}

export default MainLayout