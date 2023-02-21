import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Textfit } from "react-textfit";
import { NumericFormat } from "react-number-format";

const Screen = () => {
  const { calc } = useContext(CalculatorContext);
  return (
    <Textfit className="screen" max={60} mode="single">
      {calc.num ? (
        <NumericFormat
          value={calc.num}
          displayType={"text"}
          thousandSeparator={true}
        />
      ) : (
        <NumericFormat
          value={calc.res}
          displayType={"text"}
          thousandSeparator={true}
        />
      )}
    </Textfit>
  );
};

export default Screen;
