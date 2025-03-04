import React, { useEffect, useState } from "react";

interface SelectInputProps {
  DefaultOption: string;
  errorMsg: string;
//   validationFunction: () => boolean;
  onChildChange: (fromChild: string) => void;
//   onChildTouch: (isTouched: boolean) => void;
  list: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  DefaultOption,
  errorMsg,
//   validationFunction,
  onChildChange,
//   onChildTouch,
  list,
}) => {
  const [selectedItem, setSelectedValue] = useState<string>("");

  useEffect(() => {
    onChildChange(selectedItem);
  }, [selectedItem, onChildChange]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <select
        className="custom-select w-50"
        id="inputGroupSelect01"
        onChange={handleSelectChange}
        value={selectedItem}
      >
        <option defaultValue={"choose"}>{DefaultOption}</option>
        {list.map((b, index) => (
          <option key={index} value={b}>
            {b}
          </option>
        ))}
      </select>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
    </div>
  );
};

export default SelectInput;