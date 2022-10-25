import Header from "./components/Header";
import Main from "./components/Main";
import data from "../src/data";

function App() {
  
   const cards = data.map(item => {
      return(
        <Main
          key={item.id}
           {...item}
        />
      )
   })

  return (
    <div className="App">
       <div className=" max-w-[700px] mx-auto bg-white border drop-shadow-lg pb-8">
          <Header/>
          {cards}
          {/* <Main/> */}
       </div>
    </div>
  );
}

export default App;
