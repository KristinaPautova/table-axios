import "./App.css";
import MainRoutes from "./MainRouts";
import TableContextProvider from "./context/TableContextProvider";

function App() {
  return (
    <TableContextProvider>
      <MainRoutes />
    </TableContextProvider>
  );
}

export default App;
