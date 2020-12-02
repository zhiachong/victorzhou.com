// @flow
import { graphql } from 'gatsby';
import React from 'react';

import styles from './ContentDate.module.scss';

type Props = {|
  +dateFormatted: string,
  +readingTimeText: string,
  +dateModifiedFormatted: ?string,
|};

const ContentDate = ({ dateFormatted, dateModifiedFormatted, readingTimeText }: Props) => (
  <p className={styles['content-date']}>
    <time>{dateFormatted}</time>
    <span>
      &ensp;|&ensp;<time>{readingTimeText}</time>
    </span>
    {dateModifiedFormatted && (
      <span className={styles['date-modified']}>
        &ensp;|&ensp;UPDATED <time>{dateModifiedFormatted}</time>
      </span>
    )}
  </p>
);

export const fragment = graphql`
  fragment ContentDateFragment on MarkdownRemarkFields {
    dateFormatted
    dateModifiedFormatted
    readingTime {
      text
    }
  }
`;

export default ContentDate;
