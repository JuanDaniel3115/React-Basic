import { useEffect, useRef, useState } from "react";

// parametriza el parametro de entrada del componente "TYPE"
type TimerArgs={
	milisegundos:number
}

export const Timer = ({milisegundos}:TimerArgs) => {

	const [segundos, setsegundos] = useState(0);

	// useRef para mantener la referencia cuando el componente se desmonta
	const ref = useRef<NodeJS.Timeout| null>(null);

	// useEffect es un hook que se ejecuta cuando el componente se monta
	useEffect(() => {

		// limpia el setInterval anterior
		ref.current && clearInterval(ref.current);
		console.log('useEffect');
		ref.current = setInterval(() => setsegundos((s) => s + 1), milisegundos);
		// destruye el setInterval cuando el componente se desmonta
		// return () => {
		// 	console.log('clean');
		// }
	}, 
	//valor que monitorea el useEffect
	[milisegundos]);

	return (
		<>
			<h4> Timer <small>{segundos}</small></h4>
		</>
	)
}
export default Timer;