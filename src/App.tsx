import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router.tsx";
import { useTelegram } from "./Hooks/useTelegram.ts";

const App = () => {
  const { user } = useTelegram();
  console.log(user);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
