import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ShoppingList from "./pages/ShoppingList";
import ShoppingListDetail from "./pages/ShoppingListDetail";
import Inventory from "./pages/Inventory";
import InventoryDetail from "./pages/InventoryDetail";
import Financial from "./pages/Financial";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/shopping-list",
    Component: ShoppingList,
  },
  {
    path: "/shopping-list/:id",
    Component: ShoppingListDetail,
  },
  {
    path: "/inventory",
    Component: Inventory,
  },
  {
    path: "/inventory/:id",
    Component: InventoryDetail,
  },
  {
    path: "/financial",
    Component: Financial,
  },
]);
