export interface IBaseButton {
    disabled?: boolean;
    title?: string;
    type?: string;
}

export interface IBaseCheckbox {
    checked?: boolean;
    labelText?: string;
}

export interface  IBaseTextarea {
    modelValue?: string | number;
    disabled?: boolean;
    titleLabel?: string;
    placeholder?: string;
}

export interface IBaseInput {
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    titleLabel?: string;
    disabled?: boolean;
}