import StorybookConsole from 'react-storybook-console';
import { withInfo } from '@storybook/addon-info';

export default addDecorator => {
  addDecorator(StorybookConsole);
  addDecorator(withInfo);
};
