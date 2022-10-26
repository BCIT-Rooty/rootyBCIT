import React from 'react';

import ReviewBox from '../components/reviews/reviewBox';

export default {
  component: ReviewBox,
  title: 'ReviewBox',
  argTypes: {
    bgImage1: { control: 'text' },
  },
};

const Template = args => <ReviewBox {...args} />;

export const DefaultReviewBox = Template.bind();
DefaultReviewBox.args = {
  bgImage1: '/camera-man.jpg',
};