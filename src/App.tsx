import "./App.css";
import { Test } from "./components/test";
import { useSeriaporPorts } from './hooks/useSerialPorts';




function App() {

   const { portsAvaialable, port, connectToPort } = useSeriaporPorts();


   return (
      <div className="container">
         {
            portsAvaialable.map((portA, index) => (
               <p key={index} onClick={() => connectToPort(portA)} >{portA}</p>
            ))
         }
         {
            <span>{port && JSON.stringify(port)}</span>
         }
         <Test port={port} />
      </div>
   );
}

export default App;
