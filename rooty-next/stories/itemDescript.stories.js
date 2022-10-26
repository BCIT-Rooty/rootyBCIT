import React from 'react';

import ItemDescription from "../components/itemDescript";

export default {
  component: ItemDescription,
  title: 'ItemDescription',
  argTypes: {
    img:{type: 'text'}
  },
};

const Template = args => <ItemDescription {...args} />;

export const DefaultItemDescription = Template.bind();
DefaultItemDescription.args = {
    img:"http://placekitten.com/g/200/300"
};
