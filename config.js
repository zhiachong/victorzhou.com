'use strict';

module.exports = {
  url: 'https://zhiachong.com',
  title: 'zhiachong.com',
  subtitle:
    'SWE @ Facebook, ex-Twitter. I blog about web development, software engineering, interview prep and more topics.',
  copyright: '© Zhia Chong 2020',
  postsPerPage: 8,
  googleAnalyticsId: 'UA-58664433-1', //TODO: needs to be replaced
  menu: [
    {
      label: 'Blog',
      path: '/',
    },
    {
      label: 'About',
      path: '/about/',
    },
    {
      label: 'Gears',
      path: '/gears/',
    },
    {
      label: 'Contact',
      path: '/contact/',
    },
    {
      label: 'Tags',
      path: '/tags/',
    },
  ],
  author: {
    name: 'Zhia Chong',
    photo: '/photo.png',
    photoLarge: '/photoLarge.png',
    bio:
      'SWE @ Facebook, ex-Twitter. I blog about <a href="/tag/web-scraping/">web scraping</a>, <a href="/tag/interview-prep/">software interview prep</a>, <a href="/tag/job-search/">job search</a> and <a href="/tags/">more topics</a>.',
    contacts: {
      email: 'zhiachong@gmail.com',
      twitter: 'zhiachong',
      github: 'zhiachong',
      rss: '/rss.xml',
    },
  },
};
