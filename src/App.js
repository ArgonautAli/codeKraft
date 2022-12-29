import "./App.css";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homepage/HomePage";
import AppRoutes from "./utils/Routes/Routes";

// const root = createRoot(document.getElementById("root"));

function App() {
  return (
    // <div className="App" id="root">
    <AppRoutes />
    // </div>
  );
}
// root.render(<App />);

export default App;
