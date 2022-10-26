import React from 'react'

import Toaster from '../components/toaster'

export default {
    component: Toaster,
    title: 'Toaster',
    argTypes: {
        iconName: {control: "text"},
        bgColor: {control: "color"},
        width: {control: "text"},
        height: {control: "text"},
        padding: {control: "text"},
        textAlign: {control: "text"},
        fontWeight: {control: "text"},
        buttonMargin: {control: "text"},
        color: {control: "color"},
    }
};

const Template = args => <Toaster {...args} />;

export const BlankToaster = Template.bind();
BlankToaster.args = {
    txt: "You must insert atleast one keyword"
}
export const ExistingToaster = Template.bind();
ExistingToaster.args = {
    txt: "This keyword is already being used"
}