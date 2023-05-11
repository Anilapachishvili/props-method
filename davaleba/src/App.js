import "./App.css";
import Lists from './Components/Notification';
import Green from './images/green.png';
import Check from './images/check.png';
import Red from './images/red.png';
import Error from './images/error.png';
import Yellow from './images/yellow.png';
import Warning from './images/warning.png';
import Purpulee from './images/pp.png';
import Info from './images/info.png';


function App() {
  return (
    <div className="App">

     <div className='flex'>
      <div className='Success'> 
      <div className="line"></div>
      <Lists     
        title= "Success" text="Order Placed Successfully. You can check order delivery status." images={Green} green={Check} />
       </div>

      <div className='Error'> 
      <div className="linne"></div>
      <Lists title ="Error" texxt="Order Placed Successfully. You can check order delivery status." red={Red} error={Error}/>
      </div>

      <div className='Warning'>
      <div className="linee"></div>
       <Lists title ="Warning" third="Order Placed Successfully. You can check order delivery status." yellow={Yellow} warning={Warning}/>
       </div>
       <div className='Info'>
        <div className="liine"></div>
       <Lists title ="Info" fourth="Order Placed Successfully. You can check order delivery status." purpulle={Purpulee} inffo={Info}/>
       </div>
       </div>
    </div>
  )
}

export default App;