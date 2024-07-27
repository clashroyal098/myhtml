import './aircss.css';
import Intro from "./airintro";
import Header from "./airheader";
import Data from "./airData";
import Experience from "./airexp";
function App() {
  console.log(Data);
  const newData = Data.map(function(singleData){
    return(
      <Experience 
      image={singleData.image}
      rating={singleData.rating}
      review={singleData.review}
      text={singleData.text}
      price={singleData.price}
      />
    );
  });
return(
  <>
    <Header/>
    <Intro/>
    <div className="exp">
      {newData}
    </div>
    
  </>
);
}
export default App;


