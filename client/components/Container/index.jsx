import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const Container = ({
  className,
  children,
}) => (
  <div
    className={classnames(
      style.Container,
      className,
    )}
  >
    {children}
  </div>
);

Container.propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;
