import React from 'react';

import Text from '../components/text';

export default {
  component: Text,
  title: 'Text',
  argTypes: {
    color: { control: 'color' },
    align: {control: 'text'},
    bgColor: {control: 'color'},
    textDecor: {control: 'text'},
    height: {control: 'text'},
    width: {control: 'text'}
  },
};

const Template = args => <Text {...args} />;

export const Heading1 = Template.bind();
Heading1.args = {
  txt: "Enter Heading1 Text Here",
  padding: "30px 0px 0px 20px",
  size: "42px",
  weight: "700",
  width: "100vw",
  height: "900px"
};

export const Heading2 = Template.bind();
Heading2.args = {
  txt: "Enter Heading2 Text Here",
  padding: "30px 0px 0px 20px",
  size: "24px",
  weight: "700",
  width: "100vw"
};

export const Heading3 = Template.bind();
Heading3.args = {
  txt: "Enter Heading3 Text Here",
  padding: "30px 0px 10px 20px",
  size: "21px",
  weight: "700",
  width: "100vw"
};

export const Heading4 = Template.bind();
Heading4.args = {
  txt: "Enter Heading4 Text Here",
  padding: "30px 0px 10px 20px",
  size: "18px",
  weight: "500",
  width: "100vw"
};

export const BodyMain = Template.bind();
BodyMain.args = {
  txt: "Enter BodyMain Text Here",
  padding: "10px 20px",
  weight: "300",
  width: "100vw"
};
