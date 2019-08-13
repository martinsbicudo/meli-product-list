import React from 'react';
import { object } from 'prop-types';
import EmptyState from '@Components/EmptyState';
import searchCleanImage from '@Client/static/images/search-clean.png';
import searchCleanImage2x from '@Client/static/images/search-clean@2x.png';
import style from './style.scss';

const EmptyAlert = ({
  empty,
}) => (
  <div className={style.EmptyAlert}>
    <EmptyState
      image={(
        <img
          className={style.EmptyAlertImage}
          src={searchCleanImage}
          srcSet={`${searchCleanImage2x} 2x`}
          alt="Lista Vazia"
          title="Lista Vazia"
        />
      )}
      title={empty.title || ''}
      description={empty.description || ''}
    />
  </div>
);

EmptyAlert.propTypes = {
  empty: object.isRequired,
};

export default EmptyAlert;
