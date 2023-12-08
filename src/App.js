import './App.css';
import Header from './Header';
import ProductsList from './ProductsList';

function App() {

  function btnEvent(data) {

    console.log("Hello this is a message to console " +data)

  }


  return (
    <div className="App">
      <h1>Welcome Everyone</h1>
      <Header/>

      <ProductsList/>

      <button className='btn' onClick={ ()=>{

          btnEvent("Joy")
        
        }

      }>Click</button>

    </div>
  );
}

export default App;
