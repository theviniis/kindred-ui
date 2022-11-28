import React from 'react';
import { Story } from '@storybook/react';
import { Typography, TypographyProps } from '../../src/components';

const Template: Story<TypographyProps> = args => (
  <Typography {...args}>Lorem, ipsum dolor.</Typography>
);

const H1: Story<TypographyProps> = Template.bind({});
H1.args = {
  typography: 'h1',
};

const H2: Story<TypographyProps> = Template.bind({});
H2.args = {
  typography: 'h2',
};

const H3: Story<TypographyProps> = Template.bind({});
H3.args = {
  typography: 'h3',
};

const H4: Story<TypographyProps> = Template.bind({});
H4.args = {
  typography: 'h4',
};

const H5: Story<TypographyProps> = Template.bind({});
H5.args = {
  typography: 'h5',
};

const H6: Story<TypographyProps> = Template.bind({});
H6.args = {
  typography: 'h6',
};

const Body1: Story<TypographyProps> = Template.bind({});
Body1.args = {
  typography: 'body1',
};

const Body2: Story<TypographyProps> = Template.bind({});
Body2.args = {
  typography: 'body2',
};

const Body3: Story<TypographyProps> = Template.bind({});
Body3.args = {
  typography: 'body3',
};

const Body4: Story<TypographyProps> = Template.bind({});
Body4.args = {
  typography: 'body4',
};

const Body5: Story<TypographyProps> = Template.bind({});
Body5.args = {
  typography: 'body5',
};

const Paragraph1: Story<TypographyProps> = Template.bind({});
Paragraph1.args = {
  typography: 'paragraph1',
};

const Paragraph2: Story<TypographyProps> = Template.bind({});
Paragraph2.args = {
  typography: 'paragraph2',
};

const Paragraph3: Story<TypographyProps> = Template.bind({});
Paragraph3.args = {
  typography: 'paragraph3',
};

const Paragraph4: Story<TypographyProps> = Template.bind({});
Paragraph4.args = {
  typography: 'paragraph4',
};

const Paragraph5: Story<TypographyProps> = Template.bind({});
Paragraph5.args = {
  typography: 'paragraph5',
};

const Color: Story<TypographyProps> = Template.bind({});
Color.args = {
  typography: 'body1',
  color: '#f00',
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Color,
};
