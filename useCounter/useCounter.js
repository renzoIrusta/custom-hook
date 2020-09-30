// El use es la cnvención para indicar que se trata de un hook

import { useState } from "react";



export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    // const increment = ( factor = 1 ) => {
    //     setState( state + factor );
    // }
    // Si necesito madar un factor se puede hacer de esa forma
    const increment = ( ) => {
        setCounter( counter + 1 );
    }
    
    const decrement = ( ) => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
