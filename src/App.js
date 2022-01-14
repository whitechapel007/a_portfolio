import Body from "./components/Body";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Mywork from "./components/Mywork";
import HireMe from "./components/HireMe";

function App() {
  return (
    <body className="bg-body text-white font-poppins ">
      <Header />
      <Body />
      <Mywork />
      <Clients />
      <HireMe />
    </body>
  );
}

export default App;
