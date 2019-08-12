import React from 'react';
import { func, bool } from 'prop-types';
import style from './style.scss';

const Loading = ({
  isLoading,
  children,
}) => (
  isLoading
    ? (
      <div className={style.Loading}>
        <div className={style.LoadingBars}>
          <i className={style.LoadingBar} />
          <i className={style.LoadingBar} />
          <i className={style.LoadingBar} />
          <i className={style.LoadingBar} />
          <i className={style.LoadingBar} />
        </div>
      </div>
    )
    : children()
);

Loading.propTypes = {
  isLoading: bool.isRequired,
  children: func.isRequired,
};

export default Loading;
