import { Serialport } from 'tauri-plugin-serialport-api';

interface Props {
   port: Serialport | null;
}

export const Test = ({ port }: Props) => {

   return (
      <span>
         {
            port && JSON.stringify(port)
         }
      </span>
   )
}
