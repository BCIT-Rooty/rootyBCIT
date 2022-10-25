import React from 'react';

import ReviewHorizontalScroll from '../components/reviews/reviewCards';

export default {
  component: ReviewHorizontalScroll,
  title: 'ReviewHorizontalScroll',
  argTypes: {
    bgImage1:{control: "text"},
    bgImage2:{control: "text"},
    bgImage3:{control: "text"},
    bgImage4:{control: "text"},
    bgImage5:{control: "text"},
  },
};

const Template = args => <ReviewHorizontalScroll {...args} />;

export const DefaultRevScroll = Template.bind();
DefaultRevScroll.args = {
    bgImage1:"http://placekitten.com/g/200/300",
    bgImage2:"http://placekitten.com/g/200/300",
    bgImage3:"http://placekitten.com/g/200/300",
    bgImage4:"http://placekitten.com/g/200/300",
    bgImage5:"http://placekitten.com/g/200/300",
};

