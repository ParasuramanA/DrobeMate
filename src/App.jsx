import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
  redirect
} from "@tanstack/react-router";

import Register from './pages/Register/Register';
import Login from "./pages/Login/Login";

const rootRoute = createRootRoute({
  component: Outlet, 
});
//this route used to deafult route set login
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({ to: "/register" }); 
  },
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
const routeTree = rootRoute.addChildren([registerRoute,loginRoute,indexRoute]);
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
