import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";

import Register from './pages/Register/Register';
import Login from "./pages/Login/Login";

const rootRoute = createRootRoute({
  component: Outlet, 
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});


// Route tree and router
const routeTree = rootRoute.addChildren([registerRoute,loginRoute]);
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
