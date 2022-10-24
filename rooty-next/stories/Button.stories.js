import React from 'react';

import Button from '../components/button/index';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' }
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind();
Default.args = {
  txt: "Enter Text Button Here",
  padding: "15px 10px 15px 10px"
  


};

export const WhiteDefault = Template.bind({});
WhiteDefault.args = {
  txt: "Enter Text Button Here",
  bgColor: "white",
  color: "black"
};
