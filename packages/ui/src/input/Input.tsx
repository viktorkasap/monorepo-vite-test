import { ComponentProps } from 'react';

import classes from './Input.module.css';

export const Input = (props: ComponentProps<'input'>) => {
  return <input className={classes.input} {...props} />;
};
