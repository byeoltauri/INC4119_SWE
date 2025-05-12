import { useState } from "react";

const useCalculatorLogic = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => setInput((prev) => prev + value);

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        }
        catch {
            setResult("Error");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    return {input, result, handleClick, calculateResult, clearInput};
};

export default useCalculatorLogic;