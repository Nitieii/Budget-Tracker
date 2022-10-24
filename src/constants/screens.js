import {
  Transaction,
  TransactionDetails,
  Budget,
  Stat,
  Profile,
} from '~/screens';

const screensName = {
  // Transactions Group
  transaction: 'Transaction',
  transactionDetails: 'TransactionDetails',
  budget: 'Budget',
  stat: 'Stat',

  // Profile Group
  profile: 'Profile',
};

const navigateAuth = [
  {
    name: screensName.transaction,
    component: Transaction,
  },
  {
    name: screensName.transactionDetails,
    component: TransactionDetails,
  },
  {
    name: screensName.budget,
    component: Budget,
  },
  {
    name: screensName.stat,
    component: Stat,
  },
  {
    name: screensName.profile,
    component: Profile,
  },
];

const navigateBottom = [
  {
    name: screensName.transaction,
    label: 'Daily',
    icon: 'calendar',
    component: Transaction,
  },
  {
    name: screensName.stat,
    label: 'Stat',
    icon: 'poll',
    component: Stat,
  },
  {
    name: screensName.budget,
    label: 'Budget',
    icon: 'wallet',
    component: Budget,
  },
  {
    name: screensName.profile,
    label: 'Profile',
    icon: 'user',
    component: Profile,
  },
];

const screensDefault = {
  screensName,
  navigateAuth,
  navigateBottom,
};

export default screensDefault;
