import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { adminRoutes } from "routers/router.routes";
import AppLayout from "layouts/AppLayout";
import { IRoute } from "types/router.model";
import routerPaths from "routers/router.paths";
import NotFoundPage from "pages/NotFoundPage";
import "styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={routerPaths.admin.DASHBOARD} />}
        />
        <Route element={<AppLayout />}>
          {adminRoutes.map((route: IRoute) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
