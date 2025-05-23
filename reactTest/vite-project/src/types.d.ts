import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'web-bar-chart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                data: string;
            }, HTMLElement>;
        }
    }
}

export { }; 