import React from "react";
import { useState } from "react";

function Buttons() {
  const [equationElement, setEquationElement] = useState("");
  function TypeOperation(e) {
    let equation = e.target.value;
    console.log(equation);
    setEquationElement(equation);
  }
  function Operation(e) {
    let equation = e.target.value;
    console.log(equation);
    setEquationElement(equationElement + equation);
  }
  function Equal() {
    setEquationElement(eval(equationElement));
  }
  return (
    <div className="calc-container">
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") Equal();
        }}
        className="equation"
        id="equation"
        value={equationElement}
        type="text"
        onChange={TypeOperation}
      />
      <button
        className="calc-btn clear"
        onClick={() => {
          setEquationElement("");
        }}
      >
        AC
      </button>
      <button
        className="calc-btn divide fa-solid fa-divide"
        value="/"
        onClick={Operation}
      />
      <button
        className="calc-btn one fa-solid fa-1"
        value="1"
        onClick={Operation}
      />
      <button
        className="calc-btn two fa-solid fa-2"
        value="2"
        onClick={Operation}
      />
      <button
        className="calc-btn three fa-solid fa-3"
        value="3"
        onClick={Operation}
      />
      <button
        className="calc-btn multiply fa-solid fa-xmark"
        value="*"
        onClick={Operation}
      />
      <button
        className="calc-btn four fa-solid fa-4"
        value="4"
        onClick={Operation}
      />
      <button
        className="calc-btn five fa-solid fa-5"
        value="5"
        onClick={Operation}
      />
      <button
        className="calc-btn six fa-solid fa-6"
        value="6"
        onClick={Operation}
      />
      <button
        className="calc-btn minus fa-solid fa-minus"
        value="-"
        onClick={Operation}
      />
      <button
        className="calc-btn seven fa-solid fa-7"
        value="7"
        onClick={Operation}
      />
      <button
        className="calc-btn eight fa-solid fa-8"
        value="8"
        onClick={Operation}
      />
      <button
        className="calc-btn nine fa-solid fa-9"
        value="9"
        onClick={Operation}
      />
      <button
        className="calc-btn plus fa-solid fa-plus"
        value="+"
        onClick={Operation}
      />
      <button
        className="calc-btn zero fa-solid fa-0"
        value="0"
        onClick={Operation}
      />
      <button
        className="calc-btn decimal fa-solid fa-circle"
        value="."
        onClick={Operation}
      />
      <button className="calc-btn equal fa-solid fa-equals" onClick={Equal} />
    </div>
  );
}

export default Buttons;
