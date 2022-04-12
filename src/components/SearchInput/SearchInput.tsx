import React, { useState, ChangeEvent, useMemo } from "react";
import get from "lodash/get";
import debounceLodash from "lodash/debounce";
import { FilterProps } from "./SearchInput.types";
import {
  SearchIcon,
  ClearIcon,
  Container,
  BorderInput,
  Input,
  ClearBtn,
} from "./SearchInput.styles";

const SearchInput: React.FC<FilterProps> = (props: FilterProps) => {
  const { onChange, placeholder, debounce, disabled, value } = props;

  const [newValue, setValue] = useState(value || "");

  const debouncedOnChange = useMemo(
    () =>
      debounceLodash((target) => {
        if (onChange) onChange(get(target, "value"));
      }, debounce),
    [debounce, onChange]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedOnChange(get(event, "target"));
  };

  const clearInput = () => {
    setValue("");
    debouncedOnChange({
      value: "",
    });
  };

  const hasValue = !!newValue;

  return (
    <Container>
      <BorderInput>
        <SearchIcon />
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          value={newValue}
          disabled={disabled}
          data-testid='search-input'
        />
        <ClearBtn
          data-testId='clear-button'
          className='clearBtn'
          onClick={clearInput}
          hasValue={hasValue}
        >
          <ClearIcon />
        </ClearBtn>
      </BorderInput>
    </Container>
  );
};

export default SearchInput;

SearchInput.defaultProps = {
  debounce: 600,
  value: "",
};
