import './App.css';
import { ScreenProvider } from './context/ScreenSizeContext';
import Home from './pages/Home';

function App() {
  return (
    <ScreenProvider>
      <Home />
    </ScreenProvider>
  );
}

export default App;
