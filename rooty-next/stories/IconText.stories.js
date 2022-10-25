import React from 'react'

import IconText from '../components/iconText'

export default {
    component: IconText,
    title: 'IconText',
    argTypes: {
        paddingBox: {control: "text"},
        txt: {control: "text"},
        size: {control: "text"},
        textDecor: {control: "text"},
        weight: {control: "text"},
        color: {control: "color"},
        paddingText: {control: "text"},
        icon: {control: "text"},
    }
};

const Template = args => <IconText {...args} />;

export const ZipFolder = Template.bind();
ZipFolder.args = {
    txt: "bcitBigInfo.zip",
    textDecor: "underline",
    color: "blue"
}