// @flow
import './CarbonAd.css';

import * as React from 'react';

import styles from './CBA.module.scss';

const SMALL_THRESHOLD = 685; // $layout-breakpoint-sm
const LARGE_THRESHOLD = 1100; // $layout-breakpoint-lg

type Props = {|
  +smallOnly?: boolean,
  +largeOnly?: boolean,
|};

const isReadyForProd = false; // needs to be set to TRUE when I have Carbon ads ready

class CarbonAd extends React.PureComponent<Props> {
  ref: { current: null | HTMLDivElement };

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const container = this.ref.current;
    if (container && this.shouldDisplay()) {
      const script = document.createElement('script');
      script.id = '_carbonads_js';
      script.async = true;
      script.src = '//cdn.carbonads.com/carbon.js?serve=CK7I4237&placement=zhiachongcom';
      container.appendChild(script);
    }
  }

  shouldDisplay() {
    const { smallOnly, largeOnly } = this.props;
    return (
      (!largeOnly || (largeOnly && window.innerWidth >= LARGE_THRESHOLD)) &&
      (!smallOnly || (smallOnly && window.innerWidth <= SMALL_THRESHOLD)) &&
      window.location.hostname !== 'localhost' &&
      isReadyForProd
    );
  }

  render() {
    const { smallOnly, largeOnly } = this.props;
    return (
      <div
        ref={this.ref}
        className={
          largeOnly ? styles['container-large'] : smallOnly ? styles['container-small'] : null
        }
      />
    );
  }
}

export default CarbonAd;
