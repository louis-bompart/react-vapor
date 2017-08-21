import * as React from 'react';

export interface IOption {
  label: string;
  value: () => string;
}

export interface IOptionProps extends React.ClassAttributes<Option> {
  option: IOption;
  isActive: boolean;
  onClick: (value: string, label: string) => void;
}

export class Option extends React.Component<IOptionProps, any> {

  render() {
    let buttonClass = this.props.isActive ? 'active' : '';

    return (
      <button type='button' className={buttonClass} onClick={() => this.props.onClick(this.props.option.value(), this.props.option.label)}>
        {this.props.option.label}
      </button>
    );
  }
}