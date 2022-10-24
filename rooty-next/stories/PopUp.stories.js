import React from 'react';

import DownloadPopUp from '../components/downloadPopUp';

export default {
  component: DownloadPopUp,
  title: 'PopUp',
  argTypes: {
    padding: {control: "text"}
  },
};

const Template = args => <DownloadPopUp {...args} />;

export const DownloadCompleted = Template.bind();
DownloadCompleted.args = {
    txt: "Successfully Downloaded 😁",
    size: "20px",
    align: "center",
    height: "100vh"
};

export const PostedUploaded = Template.bind();
PostedUploaded.args = {
    txt: "Successfully Posted 😁, New Clients Await!",
    size: "20px",
    align: "center",
    height: "100vh",
    padding: "30px"
};

