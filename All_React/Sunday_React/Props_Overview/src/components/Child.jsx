import React from 'react';
import PropType from 'prop-types';

export const Child_1 = ({no = 3, name, arr}) => {
    console.log(typeof name, name);
    return (
        <h1>Child_{no}-{name}-{arr}</h1>
    )
}
Child_1.PropType = {
    no: PropType.number,
    name: PropType.string,
    arr: PropType.oneOf(['admin', 'student', 'trainer', 'default'])
};
Child_1.defaultProps = {
    name: "abhishek",
    arr: 'default'
};