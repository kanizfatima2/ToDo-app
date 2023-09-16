import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import GetStarted from "../components/home/GetStarted";
import Board from "../components/board/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <GetStarted></GetStarted>,
      },
      {
        path:"/boards/:id",
        element:<Board></Board>
      },
      
    ],
  },
]);

export default router;
