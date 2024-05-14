export const paths = {
  // home: '/',
  home: 'vhttps://achrowebsolutions.com/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    // account: '/dashboard/account',
    account: 'https://achrowebsolutions.com/profile',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
