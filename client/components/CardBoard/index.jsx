import React from 'react';
import { node, string, oneOfType } from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const CardBoard = ({
  className,
  children,
  footer,
}) => (
  <div
    className={classnames(
      style.CardBoard,
      className,
    )}
  >
    {children}
    {footer && (
      <div className={style.CardBoardFooter}>
        {footer}
      </div>
    )}
  </div>
);

CardBoard.propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
  footer: oneOfType([string, node]),
};

CardBoard.defaultProps = {
  className: '',
  footer: '',
};

export default CardBoard;
