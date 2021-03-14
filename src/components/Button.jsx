import React from 'react'
import classNames from 'classnames'

const Button = ({children, className}) => (
    <button className={classNames('button', className)}>
        {children}
    </button>
)

export default Button