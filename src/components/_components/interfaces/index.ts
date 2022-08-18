export interface IBaseButton {
    disabled?: boolean;
    title?: string;
    type?: string;
    default: 'Title';
}

export interface IBaseCheckbox {
    checked?: boolean;
    labelText?: string;
    default: true;
}

export interface  IBaseTextarea {
    modelValue?: string | number;
    disabled?: boolean;
    titleLabel?: string;
    placeholder?: string;
    default: 'text';
}

export interface IBaseInput {
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    titleLabel?: string;
    disabled?: boolean;
    default: 'text'
}

// Нужно описать типы для base-number-input
// если интерфейсы не подойдут, переписать на type
