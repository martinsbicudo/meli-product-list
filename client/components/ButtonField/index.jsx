import React from 'react';
import {
  string,
  object,
  node,
  oneOfType,
} from 'prop-types';
import classnames from 'classnames';
import FormField from '@Components/FormField';
import Button from '@Components/Button';
import style from './style.scss';

const ButtonField = ({
  className,
  children,
  formField,
  button,
}) => (
  <div
    className={classnames(
      style.ButtonField,
      className,
    )}
  >
    <FormField
      {...formField}
      className={{
        wrapper: classnames(
          style.ButtonFieldFormField,
          (formField.className && formField.className.wrapper) || '',
        ),
        input: (formField.className && formField.className.input) || '',
      }}
    />
    <Button
      {...button}
      className={classnames(
        style.ButtonFieldButton,
        button.className || '',
      )}
    >
      {children}
    </Button>
  </div>
);

ButtonField.propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
  formField: object,
  button: object,
};

ButtonField.defaultProps = {
  className: '',
  formField: {
    className: {
      wrapper: '',
      input: '',
    },
  },
  button: {
    className: '',
  },
};

export default ButtonField;
