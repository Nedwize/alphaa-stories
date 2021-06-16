import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from 'alphaa-components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bg: 'primary',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  bg: 'success',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  bg: 'warning',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  bg: 'danger',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  bg: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
