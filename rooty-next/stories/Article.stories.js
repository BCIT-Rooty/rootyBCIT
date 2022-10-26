import React from 'react';

import Article from '../blog';
import { Article1, Article2, Article3, Article4, Contest } from '../blog/articles';

export default {
  component: Article,
  title: 'Article',
  argTypes: {
    color: { control: 'color' },
    contest: {control: "text"},
    bgImage: {control: "text"},
    
  },
};

const Template = args => <Article {...args} />;

export const Default = Template.bind();
Default.args = {
  txt:"Enter Text For First Article",
  article: Article1()
};

export const SecondArt = Template.bind({});
SecondArt.args = {
  txt:"Enter Text For Second Article",
  article: Article2(),
  bgImage: "http://placekitten.com/640/330"
};

export const ThirdArt = Template.bind({});
ThirdArt.args = {
  txt:"Enter Text For Third Article",
  article: Article3(),
  bgImage: "http://placekitten.com/540/330"
};

export const FourthArt = Template.bind({});
FourthArt.args = {
    txt:"Enter Text For Fourth Article",
    article: Article4(),
    bgImage: "http://placekitten.com/440/230"
}

export const ContestArt = Template.bind();
ContestArt.args = {
    txt: "Enter Gradient Card Text Here",
    article: Contest(),
    bgImage: "http://placekitten.com/540/230"
};