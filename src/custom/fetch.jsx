import { useEffect, useState } from "react";

export function useFetch() {
    const [plot, setPlot] = useState([]);
    async function story() {
        try {
            const response = await fetch("story.json");
            if(response.ok === true) {
                const data = await response.json();
                setPlot(data);
            } else {
                let error = new Error("Error: I was unable to find your story.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        story();
    }, []);
    return {plot, setPlot};
};