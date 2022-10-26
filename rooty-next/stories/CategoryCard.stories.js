import React from 'react';

import CategoryCard from "../components/categoryCard.js"

export default {
  component: CategoryCard,
  title: 'CategoryCard',
  argTypes: {
    name: { control: 'text' },
    image: { control: 'img' },
  },
};

const Template = args => <CategoryCard {...args} />;

export const DefaultCategoryCard = Template.bind();
DefaultCategoryCard.args = {
    image:"http://placekitten.com/g/200/300",
    name: "Marketing"

};
