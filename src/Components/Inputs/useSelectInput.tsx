import { useState } from "react";

function useSelectInput(inputedValue: string) {
  const [value, setValue] = useState<string>("");

  const handleChange = (s: string) => {
    setValue(inputedValue);
    console.log(s);
  };

  return {
    value,
    handleChange,
  };
}

export default useSelectInput;