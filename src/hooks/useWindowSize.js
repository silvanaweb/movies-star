import { useEffect, useState } from "react";

// create a reusable custom hook that fetch the window height and width on resize
const useWindowSize = () => {
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
		window.addEventListener("resize", handleResize);
		// remove the listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return size;
};

export { useWindowSize };
