import {ComponentProps} from "react";

import styles from './Input.module.css';

export const Input = (props: ComponentProps<'input'>) => {
    return (<input className={styles.Input} {...props}/>);
}
