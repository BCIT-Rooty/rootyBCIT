import React from 'react';
import { TextInput } from '../components/inputs';
// import Button from '../components/button/';

export default {
  component: TextInput,
  title: 'TextArea',
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

const Template = args => <TextInput {...args} />;

export const ServiceArea = Template.bind();
ServiceArea.args = {
    placeholder: "Sell yourself! Describe what awesome talents you have!",
    type: "textarea",
    border: "solid 1px #545454",
    margin: "0px 0px 0px 20px",
};

export const BarterArea = Template.bind();
BarterArea.args = {
    type: "textarea",
    border: "solid 1px #545454",
    margin: "0px 0px 0px 20px",
    placeholder: "Describe your barter service needs, if applicable"
};



