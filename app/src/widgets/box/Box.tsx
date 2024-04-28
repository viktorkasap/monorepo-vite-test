import { CSSProperties, PropsWithChildren } from 'react';

interface BoxProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export const Box = ({ children, className, style }: BoxProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
