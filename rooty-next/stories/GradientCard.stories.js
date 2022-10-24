import React from 'react';

import GradientCard from '../components/gradientCard';

export default {
  component: GradientCard,
  title: 'GradientCard',
  argTypes: {
    bgImage: { control: 'img' },
    color: { control: 'color' }
  },
};

const Template = args => <GradientCard {...args} />;

export const Default = Template.bind();
Default.args = {
  txt: "Enter Gradient Card Text Here",
};

export const RectangularDefault = Template.bind({});
RectangularDefault.args = {
  txt: "Enter Gradient Card Text Here",
  bgImage: "http://placekitten.com/340/130",
  width: "340px",
  height:"130px",
  margin: "0px"
};