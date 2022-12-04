import './App.css';
import { createRoot } from 'react-dom/client';
import HomePage from "./pages/homepage/HomePage"
const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App" id="root">
     <HomePage />
   
    </div>
  );
}
root.render(<App />);

export default App;
