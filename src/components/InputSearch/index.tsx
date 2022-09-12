import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { UseDebounce } from "../../hooks/UseDebounce";
import { Search } from "./styles";

export function InputSearch({ value, onChange }: any) {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = UseDebounce(onChange, 1000);

  function handleChange(event: any) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }

  return (
    <Search>
      <input
        type="search"
        value={displayValue}
        onChange={handleChange}
      />
      <button>
        <FiSearch size={24} />
      </button>
    </Search>
  );
}
