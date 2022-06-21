import React from "react";

import Paragraph from ".";

const ParagraphComponent = {
    title: "Elements/Paragraph",
    component: Paragraph,
};

export default ParagraphComponent;

const Template = (args) => (
    <Paragraph {...args}>
        Cupcake ipsum dolor sit amet. I love cookie dragée cotton candy gummi
        <br />
        bears gummies pie soufflé. Candy chocolate bar jelly beans chocolate
        <br />
        cake sugar plum muffin. I love marzipan pudding apple pie pie gummies
        <br />
        lemon drops fruitcake.
    </Paragraph>
);

export const Default = Template.bind({});

Default.args = {
    center: false,
    bold: false,
};
