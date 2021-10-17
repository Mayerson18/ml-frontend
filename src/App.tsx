import './App.scss';
import AppRouter from './routes/router';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <ItemProvider>
      <AppRouter />
    </ItemProvider>
  );
}

export default App;
