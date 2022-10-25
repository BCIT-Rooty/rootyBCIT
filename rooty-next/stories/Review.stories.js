import React from 'react';

import Review from '../components/reviews/review';

export default {
  component: Review,
  title: 'Review',
  argTypes: {
    name:{control: "text"},
    comment:{control: "text"},
    program:{control: "text"},
    image:{ control: 'image' },
    one:{control: "text"},
    second:{control: "text"},
    third:{control: "text"}, 
    fourth:{control: "text"},
    fifth:{control: "text"},
    boxHeight:{control: "text"},
    nameSize:{control: "text"},
    borderColor:{control: "text"},
  },
};

const Template = args => <Review {...args} />;

export const DefaultReview = Template.bind();
DefaultReview.args = {
    name:"Renata",
    comment:"Damn I love pizza",
    program:"D3",
    image:"http://placekitten.com/g/200/300",
    one:"active icon", 
    second:"active icon", 
    third:"active icon", 
    fourth:"active icon", 
    fifth:"icon",
    boxHeight:"108px",
    nameSize:"16px",
    borderColor:"0.5px solid rgba(191, 191, 191, 1)"
};

