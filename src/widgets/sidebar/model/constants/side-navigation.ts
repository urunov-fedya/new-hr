export const menu = [
  {
    title: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    title: 'About',
    link: '/about',
    icon: 'info',
  },
  {
    title: 'happy',
    link: '/',
    icon: 'smile',
    children: [
      {
        title: 'happy famaly',
        link: '/happy-famaly',
        icon: 'family',
      },
      {
        title: 'happy people',
        link: '/happy-people',
        icon: 'people',
      },
    ],
  },
];