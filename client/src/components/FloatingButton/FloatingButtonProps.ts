import { ReactNode } from 'react';

export interface FloatingButtonProps {
    icon: ReactNode,
    text: string,
    changeEvent: Function,
}