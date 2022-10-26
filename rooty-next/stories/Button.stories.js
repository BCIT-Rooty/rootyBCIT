import React from 'react';

import Button from '../components/button/index';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
    width: {control: 'text'},
    border: {control: 'text'},
    fontWeight: {control: "text"},
    height: {control: "text"},
    borderRadius: {control: "text"},
    textAlign: {control: "text"},
    margin: {control: "text"},
    type: {control: "text"},
    buttonMargin: {control: "text"},
    cursor: {control: "text"},
    size: {control: "text"},
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind();
Default.args = {
  txt: "Enter Text Button Here",
  padding: "15px 10px 15px 10px",
  bgColor: '#4F4DB0',

};

export const WhiteDefault = Template.bind({});
WhiteDefault.args = {
  txt: "Enter Text Button Here",
  bgColor: "white",
  color: "black"
};

export const Add = Template.bind({});
Add.args = {
  txt: "Enter Text Button Here",
  bgColor: "white",
  color: "black",
  type: "add"
};

export const Keyword = Template.bind({});
Keyword.args = {
  txt: "Keyword Text Here",
  width:"fit-content",
  height:"30px",
  type:"keyword",
  padding:"10px 10px",
  fontWeight:"300",
  buttonMargin:"0px 0px 0px 10px",
  border:"solid 1px #545454",
  color:"#545454",
};