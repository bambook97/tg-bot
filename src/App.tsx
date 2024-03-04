import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router.tsx";
import { AdminProvider } from "./Routing/AdminProvider.tsx";

const App = () => {
  return (
    <div>
      <AdminProvider>
        <RouterProvider router={router} />
      </AdminProvider>
    </div>
  );
};

export default App;
