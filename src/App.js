import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
}

export default App;
