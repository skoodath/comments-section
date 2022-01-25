import HeaderComponent from "./components/Header";
import LandingComponent from "./components/Landing";
import GlobalStyle from "./style/global.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <LandingComponent />
    </>
  );
};

export default App;
