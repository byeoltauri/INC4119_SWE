import React from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
    const {input, result, handleClick, calculateResult, clearInput} = useCalculatorLogic();

    return (
        <div className="calculator">
            <div> 
                <Display input={input} result={result}></Display>
            </div>
            <Buttons
                onButtonClick={
                    (value) => 
                        value === "="
                            ? calculateResult()
                            : value === "AC"
                            ? clearInput()
                            : handleClick(value)  
                }
            >
            </Buttons>
        </div>
    );
};

export default Calculator;