import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
       <div className=" max-w-[768px] border-2 mx-auto min-h-screen ">
          <Header/>
          <Main/>
       </div>
    </div>
  );
}

export default App;
