import {Transaction} from '~/screens';

const screensName = {
  transaction: 'Transaction',
};

const navigateAuth = [{name: screensName.transaction, component: Transaction}];

const navigateBottom = [
  {
    name: screensName.transaction,
    label: 'Daily',
    icon: 'calendar',
    component: Transaction,
  },
];

const screensDefault = {
  screensName,
  navigateAuth,
  navigateBottom,
};

export default screensDefault;
