import React from 'react';

type Props = {
    path: string;
    hoverState: boolean;
    setHoverState: (hoverState: boolean) => void;
    className: string;
    activeClassName: string;
};

const Part = (props: Props) => {
    const { path, hoverState, setHoverState, className, activeClassName } = props;
    return (
        <path
            vectorEffect="non-scaling-stroke"
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            d={path}
            className={`${className} ${hoverState ? activeClassName : ''}`}
        />
    );
};

export default Part;
