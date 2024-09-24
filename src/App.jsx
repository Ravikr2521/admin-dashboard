import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import '../src/App.css'

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
