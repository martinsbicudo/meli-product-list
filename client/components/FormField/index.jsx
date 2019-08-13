import React, { useState } from 'react';
import { object, func } from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const FormField = ({
  className,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  function toggleFocus(e) {
    if (isFocus && onBlur) onBlur(e);
    if (!isFocus && onFocus) onFocus(e);

    setIsFocus((currentIsFocus) => !currentIsFocus);
  }

  return (
    <div
      className={classnames(
        style.FormField,
        className.wrapper || '',
        { [style.FormFieldFocus]: isFocus },
      )}
    >
      <input
        className={classnames(
          style.FormFieldInput,
          className.input || '',
        )}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        {...props}
        type="text"
      />
    </div>
  );
};

FormField.propTypes = {
  className: object,
  onFocus: func,
  onBlur: func,
};

FormField.defaultProps = {
  className: {
    wrapper: '',
    input: '',
  },
  onFocus: undefined,
  onBlur: undefined,
};

export default FormField;
