import React from 'react';

import NavBar from '../components/navbar/navbar'

export default {
  component: NavBar,
  title: 'NavBar',
  argTypes: {
    route: {
        control: {type: 'radio'},
        options: ["/homepage", "/categoriespage", "/postspage", "/chatpage", "/accountpage"]
    }
  },
};

const Template = args => <NavBar {...args} />;

export const Default = Template.bind();
Default.args = {
};

