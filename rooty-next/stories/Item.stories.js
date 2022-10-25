import React from 'react';

import Item from '../components/Item'

export default {
  component: Item,
  title: 'Item',
  argTypes: {
    name: {control: "text"},
    price: {control: "text"},
    rating: {control: "text"},
    image: {control: "text"},

    dir: {control: "text"},
    height: {control: "text"},
    width: {control: "text"},
    nameTxtSize: {control: "text"},
    heightTxtBox: {control: "text"},
    widthTxtBox: {control: "text"},
    padding: {control: "text"},
    imgBorderRadius: {control: "text"}
  },
};

const Template = args => <Item {...args} />;

export const DefaultItem = Template.bind();
DefaultItem.args = {
  name: "1-2 minute motion graphic video in After Effects",
  height: "154px",
  width: "338px", 
  heightTxtBox: "120px",
  image:"http://placekitten.com/g/200/300",
  price: "25",
  rating: "4",
};

export const SmallItem = Template.bind({});
SmallItem.args = {
  name: "1-2 minute motion graphic video in After Effects",
  width: "171px", 
  height: "270px",
  image:"http://placekitten.com/g/200/300",
  price: "25",
  rating: "4",
  dir: "column",
  heightTxtBox: "38px",
  widthTxtBox: "148px",
  imgBorderRadius:"16px 16px 0px 0px"
};
