import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./src/view/DefaultLayout";
import SignIn from "./src/view/SignIn";
const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
    },
    {
        path: "/signin",
        element: <SignIn/>, 
    }
     // loader: rootLoader,
      /*children: [
        {
          path: "team",
          element: <Team />,
          loader: teamLoader,
        },
      ],*/
]);

export default router;
