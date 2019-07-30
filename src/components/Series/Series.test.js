import React from 'react';
import renderer from 'react-test-renderer';
import Series from './Series';

describe('Series', () => {
  const props = {
    htmlEnd: '<div></div>',
    series: {
      frontmatter: {
        date: new Date('2016-09-01'),
        slug: 'test',
        title: 'test',
      },
      html: '<div></div>',
    },
    seriesPosts: {
      edges: [{
        node: {
          frontmatter: {
            title: 'test',
            date: new Date('01-01-19'),
          },
        },
      }],
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Series {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});