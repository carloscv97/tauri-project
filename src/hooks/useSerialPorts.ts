import { useEffect, useState } from 'react';
import { Serialport, SerialportOptions } from "tauri-plugin-serialport-api";


export const useSeriaporPorts = () => {

   const [portsAvaialable, setPortsAvaialable] = useState<string[]>([]);
   const [port, setPort] = useState<Serialport | null>(null);

   const getPorts = async () => {
      const ports = await Serialport.available_ports();
      setPortsAvaialable(ports);
   }

   const connectToPort = async (port: string) => {
      try {
         const options: SerialportOptions = {
            path: port,
            baudRate: 9600,
            dataBits: 8,
            parity: null,
            stopBits: 1,
            timeout: 1000,
         }


         const serialport = new Serialport(options);
         setPort(serialport);
      } catch (error) {
         console.log(error);
      }

   }


   useEffect(() => {
      getPorts();
   }, [])

   return {
      portsAvaialable,
      port,
      connectToPort
   }
}