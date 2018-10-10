import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class VariantSelector extends Component {
  render() {
    return (
			<React.Fragment>
			<label className="Product__option-label">
				{this.props.option.name}
			</label>
      <Select
        className="Product__option"
        name={this.props.option.name}
        key={this.props.option.name}
        placeholder="Select"
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          return (
            <Option value={value.toString()} key={`${this.props.option.name}`}>{`${value}`}</Option>
          )
        })}
      </Select>
			</React.Fragment>
    );
  }
}

export default VariantSelector;