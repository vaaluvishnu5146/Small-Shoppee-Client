import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./Contexts/AuthContext";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./Configs/RouteConfig";
import NotFound from "./Journeys/Errors/NotFound";

function App() {
  const { isLoggedIn, decodedToken } = useAuthContext();
  const userRoles = decodedToken?.roles || [];

  function renderPublicRoutes() {
    return PUBLIC_ROUTES.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={route.path}
      />
    ));
  }

  function renderPrivateRoutes() {
    return (
      <Route
        Component={PRIVATE_ROUTES.Component}
        path={PRIVATE_ROUTES.path}
        exact={true}
      >
        {PRIVATE_ROUTES.children.map((route, index) => {
          if (userRoles?.indexOf(route.roles) > -1) {
            return (
              <Route
                Component={route.Component}
                path={route.path}
                key={`${route.title}-${index}`}
              />
            );
          }
        })}
      </Route>
    );
  }

  return (
    <Routes>
      {!isLoggedIn && renderPublicRoutes()}
      {isLoggedIn && renderPrivateRoutes()}
      <Route Component={NotFound} path="*" />;
    </Routes>
  );
}

export default App;
