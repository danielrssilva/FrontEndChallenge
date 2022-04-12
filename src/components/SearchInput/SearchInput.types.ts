export interface FilterData {
  term?: string;
  [key: string]: unknown;
}

export interface BtnCloseProps {
  readonly onClick: (data: FilterData) => void;
  readonly hasValue?: boolean;
}

export interface FilterProps {
  readonly value?: string | ReadonlyArray<string> | number | undefined;
  readonly onChange?: (data: string) => void;
  readonly placeholder?: string;
  readonly debounce?: number;
  readonly disabled?: boolean;
}
