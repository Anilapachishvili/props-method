import "./App.css";
import Lists from './Components/Notification';

import Check from './images/icon.png';

import Error from './images/error.png';

import Warning from './images/warning.png';

import Info from './images/info.png';


function App() {
  return (
    <div className="App">
         <Lists text="Success" image={Check} class="Success" />
         <Lists Error="Error" image={Error}  class="n-red"/>
         <Lists text="Warning" image={Warning}  class="n-yellow" />
         <Lists Error="Info" image={Info}  class="n-purple"/>
    </div>
  )
}

export default App; 