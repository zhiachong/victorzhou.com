import React from 'react';
import renderer from 'react-test-renderer';
import SeriesPost from './SeriesPost';

describe('SeriesPost', () => {
  const props = {
    date: new Date('01-01-19'),
    description: 'test-description',
    img: 'test-img',
    n: 1,
    slug: 'test-slug',
    title: 'test-title',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<SeriesPost {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
