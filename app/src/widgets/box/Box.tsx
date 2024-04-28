import { PropsWithChildren } from 'react';

export const Box = ({ children }: PropsWithChildren) => {
  return <div style={{ backgroundColor: 'lightblue' }}>{children}</div>;
};
