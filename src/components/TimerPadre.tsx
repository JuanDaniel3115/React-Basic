import { useState } from "react";
import Timer from "./Timer";

export const TimerPadre = () => {

	const [milisegundos, setmilesegudnos] = useState(1000);

	return (
		<>
			<span> MiliSegundos {milisegundos}</span>

			<br />
			<button
			onClick={()=> setmilesegudnos(1000)}
			 className="btn btn-outline-success ">
				1000
			</button>

			<button
			onClick={()=> setmilesegudnos(2000)}
			 className="btn btn-outline-success ">
				2000
			</button>
			<Timer milisegundos={milisegundos}/>
		</>
	)
};
export default TimerPadre;