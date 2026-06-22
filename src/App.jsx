import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventsPage from "./pages/EventsPage";
import ShoppingPage from "./pages/ShoppingPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ExsPage from "./pages/Exs";
import PeoplePage from "./pages/PeoplePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/shopping", element: <ShoppingPage /> },
      { path: "/exs", element: <ExsPage /> },
      { path: "/people", element: <PeoplePage/> },
    ],
  },
]);

function App() {


  return <RouterProvider router={router} />;

}

export default App;
