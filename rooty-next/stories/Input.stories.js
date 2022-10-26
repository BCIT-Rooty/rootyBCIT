import React from 'react';
import Input from '../components/inputs';
// import Button from '../components/button/';

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    fileBgImage: {control: "text"},
    bgColor: {control: "color"},
    borderRadius: {control: "text"},
    height: {control: "text"},
    padding: {control: "text"},
    cursor: {control: "text"},
    width: {control: "text"},
    border: {control: "text"},
    placeholder: {control: "text"},
    margin: {control: "text"},
    type: {control: "text"},
}
};

const Template = args => <Input {...args} />;

export const Default = Template.bind();
Default.args = {
//   txt: "Enter Gradient Card Text Here",
};

export const UploadFile = Template.bind();
UploadFile.args = {
    type: "file"
};

export const PriceInput = Template.bind();
PriceInput.args = {
    type: "number",
    border: "solid 1px #545454",
    margin: "0px 0px 0px 20px",
    placeholder: "$",
    width: "70px",
};

export const SearchInput = Template.bind();
SearchInput.args = {
    placeholder: "Type Keywords for your Post",
    type: "search",
    border: "solid 1px #545454",
    margin: "0px 0px 0px 20px",
    width: "60vw",
}



