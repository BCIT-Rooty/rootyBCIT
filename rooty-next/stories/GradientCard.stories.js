import React from 'react';

import GradientCard from '../components/gradientCard';

export default {
  component: GradientCard,
  title: 'GradientCard',
  argTypes: {
    bgImage: { control: 'text' },
    color: { control: 'color' },
    width: {control: "text"},
    height: {control: "text"},
    bgImage: {control: "text"},
    margin: {control: "text"},
    size: {control: "text"},
    align: {control: "text"},
    weight: {control: "text"},
    padding: {control: "text"},
    linearGradient: {control: "text"},
    bgColor: {control: "color"},
    borderRadius: {control: "text"},
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