// @flow
import { graphql, Link } from 'gatsby';
import React from 'react';

import { logEvent } from '../../utils/log';
import GuestAuthor from '../GuestAuthor';
import styles from './Feed.module.scss';

type Props = {|
  +edges: Array<Object>,
  +shortened?: boolean,
|};

function onLinkClick() {
  logEvent(`Feed ${window.location.pathname}`, 'post-click');
}

const Feed = ({ edges, shortened }: Props) => (
  <div className={styles['feed']}>
    {edges.map(edge => {
      const {
        fields: {
          categorySlug,
          slug,
          dateFormatted,
          readingTime: { text },
        },
        frontmatter: {
          date,
          title,
          category,
          description,
          isSeries,
          guestAuthor,
          guestCoAuthor,
          guestAuthorLink,
        },
      } = edge.node;

      return (
        <div className={styles['feed__item']} key={slug}>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={slug} onClick={onLinkClick}>
              {title}
            </Link>
          </h2>
          <div className={styles['feed__item-meta']}>
            <time className={styles['feed__item-meta-time']} dateTime={date}>
              {dateFormatted}, {text}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link to={categorySlug} className={styles['feed__item-meta-category-link']}>
                {category}
              </Link>
            </span>
          </div>
          <GuestAuthor author={guestAuthor} coAuthor={guestCoAuthor} link={guestAuthorLink} />
          {!shortened && (
            <>
              <p className={styles['feed__item-description']}>{description}</p>
              <Link className={styles['feed__item-readmore']} to={slug} onClick={onLinkClick}>
                {isSeries ? 'View Series' : 'Read'}
              </Link>
            </>
          )}
        </div>
      );
    })}
  </div>
);

export const fragment = graphql`
  fragment FeedFragment on MarkdownRemarkEdge {
    node {
      fields {
        categorySlug
        slug
        dateFormatted
        readingTime {
          text
        }
      }
      frontmatter {
        date
        title
        category
        description
        isSeries
        guestAuthor
        guestCoAuthor
        guestAuthorLink
      }
    }
  }
`;

export default Feed;
