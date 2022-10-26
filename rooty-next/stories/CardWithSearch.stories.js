import React from 'react';

import CardWithSearch from '../components/gradientCard/cardWithSearch';

export default {
  component: CardWithSearch,
  title: 'CardWithSearch',
  argTypes: {
    width: {control: "text"},
    height: {control: "text"},
    bgImage: {control: "text"},
    bgColor: {control: "color"},
    txt: {control: "text"},
    borderRadius: {control: "text"},
    size: {control: "text"},
    align: {control: "text"},
    weight: {control: "text"},
    padding: {control: "text"},
    linearGradient: {control: "text"},
    color: {control: "color"},
  },
};

const Template = args => <CardWithSearch {...args} />;

export const Default = Template.bind();
Default.args = {
    txt: "BROADCAST & MEDIA"
};


