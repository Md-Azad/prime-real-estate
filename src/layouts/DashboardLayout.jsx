import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();

  return (
    <div>
      {/* <h1>Dashboard Layout.{role}</h1>
      {role === "admin" && <h1>this is Admin home</h1>}
      {role === "agent" && <h1>this is agent home</h1>}
      {role === "user" && <h1>this is User home</h1>} */}

      <section className="flex">
        <div className="w-64 min-h-screen bg-orange-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Prime Real Estate</h1>
            <p>Always Provides better Home.</p>
          </div>
          <ul className="menu mx-2 mt-4 space-y-2">
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageproperties"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Manage Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managereview"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Manage Reviews
                  </NavLink>
                </li>
              </>
            )}
            {role === "agent" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/agenthome"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Agent Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addproperties"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Add Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myproperties"
                    className="flex items-center gap-2 text-2xl"
                  >
                    My Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/soldproperties"
                    className="flex items-center gap-2 text-2xl"
                  >
                    My Sold Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/requestedproperties"
                    className="flex items-center gap-2 text-2xl"
                  >
                    Requested Properties
                  </NavLink>
                </li>
              </>
            )}
            {role === "user" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/myprofile"
                    className="flex items-center gap-2 text-2xl"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/wishlist"
                    className="flex items-center gap-2 text-2xl"
                  >
                    My Wishlist
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider divider-info"></div>

            <li>
              <NavLink to="/" className="flex items-center gap-2 text-2xl">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
