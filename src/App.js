import { DataProvider } from "./context/DataContext";
import { CartProvider } from "./context/CartContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </DataProvider>
  );
}

export default App;
