import { Outlet } from "react-router-dom";

export default function DashboardRoute() {
  return (
    <div className="row">
      <div className="col-md-2 sidebar">Sidebar</div>
      <div className="col-md-10">
        <Outlet />
      </div>
    </div>
  );
}
