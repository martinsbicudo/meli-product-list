import React from 'react';
import {
  string,
  node,
  array,
  oneOfType,
} from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const Button = ({
  className,
  type,
  modifiers,
  children,
  ...props
}) => (
  <button
    className={classnames(
      style.Button,
      className,
      {
        [style.ButtonDodgerBlue]: modifiers.includes('dodger-blue'),
        [style.ButtonBigger]: modifiers.includes('bigger'),
      },
    )}
    type={type}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: string,
  type: string,
  modifiers: array,
  children: oneOfType([string, node]).isRequired,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  modifiers: [],
};

export default Button;
