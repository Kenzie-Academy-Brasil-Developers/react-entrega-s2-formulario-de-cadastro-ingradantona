import Routes from "./Routes";
import { GlobalStyle } from "./style/global";
import Provider from "./context/Provider";
import ToastContainer from "./components/ContainerToast/ContainerToast";
import Module from "./components/module/Module";

function App() {
  return (
    <Provider>
        <GlobalStyle/>
        <Routes/>
        <ToastContainer/>
        <Module/>
    </Provider>
  );
}

export default App;
