import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

const factorial = (n) => {
    console.log('factorial called')
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(() => {
        return factorial(input);
    }, [input]);
    // const expensiveValue = factorial(input)
    // Your solution ends here


    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}