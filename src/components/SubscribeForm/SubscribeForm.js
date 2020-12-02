// @flow
import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { logError, logEvent } from '../../utils/log';
import {
  cleanupRecaptcha,
  detectRecaptchaSetup,
  loadRecaptchaIfNeeded,
} from '../../utils/recaptcha';
import { userHasSubscribed } from '../../utils/subscribe-status';
import type { RecaptchaContextType } from '../RecaptchaContext';
import RecaptchaContext from '../RecaptchaContext';
import styles from './SubscribeForm.module.scss';

type Props = {
  +signupSource: string,
  +isInterviewPrep?: boolean,
  +isWeb?: boolean,
  +showAllOptions?: boolean,
  +large?: boolean,
  +noDescription?: boolean,
  +noSpacing?: boolean,
  +onKeyDown?: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  +ignoreUserHasSubscribed?: boolean,
};

type InnerProps = {
  +context: RecaptchaContextType,
} & Props;

type State = {|
  +checked: {|
    +none: boolean,
    +interview_prep: boolean,
    +web: boolean,
  |},
  +loading: boolean,
|};

class SubscribeForm extends React.PureComponent<InnerProps, State> {
  state = { checked: { none: true, interview_prep: false, web: false }, loading: false };

  _formRef = new React.createRef<HTMLFormElement>();
  _timeoutReturn: TimeoutID;
  _pendingSubmit: boolean = false;

  componentDidMount() {
    this._timeoutReturn = setTimeout(loadRecaptchaIfNeeded, 5000);
  }

  componentDidUpdate(prevProps: InnerProps) {
    if (
      this._pendingSubmit &&
      prevProps.context.recaptchaToken !== this.props.context.recaptchaToken
    ) {
      this.submit();
      logEvent('SubscribeForm', 'submitted-with-token');
    }
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutReturn);

    // This component will only unmount on a local page navigation, in which case
    // we need to reload reCAPTCHA.
    cleanupRecaptcha();
  }

  onCheckboxClick(id: 'interview_prep' | 'web' | 'none') {
    loadRecaptchaIfNeeded();
    this.setState({
      checked: {
        ...{ none: false, interview_prep: false, web: false },
        [id]: !this.state.checked[id],
      },
    });
  }

  onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.loading) {
      return;
    }

    logEvent('SubscribeForm', 'submit');
    const { context } = this.props;
    if (context.recaptchaToken != null) {
      logEvent('SubscribeForm', 'recaptchaToken available');
      this.submit();
    } else {
      logEvent('SubscribeForm', 'recaptcha token is not available');
      this.setState({ loading: true });
      window.onSubscribeFormSubmit = (token: string) => {
        logEvent('SubscribeForm', 'token-generated');
        this._pendingSubmit = true;
        context.setRecaptchaToken(token);
      };
      logEvent('SubscribeForm', 'detecting setup');
      await detectRecaptchaSetup();
      window.grecaptcha.execute();
      logEvent('SubscribeForm', 'Window grecatcha executed');
    }
  };

  submit = () => {
    logEvent('Submit function hit');
    this._pendingSubmit = false;
    const form = this._formRef.current;
    if (form) {
      logEvent('Submitting form');
      form.submit();
      this.setState({ loading: false });
    } else {
      logError("SubscribeForm <form> doesn't exist");
    }
  };

  render() {
    if (!this.props.ignoreUserHasSubscribed && userHasSubscribed()) {
      return null;
    }
    const {
      context: { recaptchaToken },
      signupSource,
      isInterviewPrep,
      isWeb,
      showAllOptions,
      large,
      noDescription,
      noSpacing,
      onKeyDown,
    } = this.props;
    const { checked, loading } = this.state;

    const inputType = showAllOptions ? 'radio' : 'checkbox';

    return (
      <div
        className={`${styles['container']} ${large ? styles['large'] : ''} ${
          noSpacing ? styles['no-spacing'] : ''
        }`}
      >
        {!noDescription && (
          <p className={styles['description']}>
            I write about <Link to="/tag/web-dev/">Web Dev</Link>, and{' '}
            <Link to="/tags/">more topics</Link>. <b>Subscribe to get new posts by email!</b>
          </p>
        )}

        <form
          action="https://zhiachong.com/sendy/subscribe"
          method="post"
          acceptCharset="utf-8"
          target="_self"
          onFocus={loadRecaptchaIfNeeded}
          onSubmit={this.onSubmit}
          ref={this._formRef}
        >
          <input type="hidden" name="list" value="8qYhkFS763XrqGuDnKmb6763jQ" />
          <input type="hidden" name="subform" value="yes" />
          {recaptchaToken && (
            <input type="hidden" name="g-recaptcha-response" value={recaptchaToken} />
          )}
          <input
            type="text"
            name="hp"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoCapitalize="off"
            autoCorrect="off"
          />
          <input
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            name="email"
            size="25"
            placeholder="example@domain.com"
            aria-label="Email Address"
            onKeyDown={onKeyDown}
            style={noDescription ? { marginTop: 0 } : undefined}
          />
          <br />
          {showAllOptions && (
            <label>
              <input
                type={inputType}
                name="Restrictions"
                value=""
                checked={checked.none}
                onChange={this.onCheckboxClick.bind(this, 'none')}
              />
              Send me <i>all</i> posts
            </label>
          )}
          {showAllOptions && <br />}
          {(isInterviewPrep || showAllOptions) && (
            <label>
              <input
                type={inputType}
                name="Restrictions"
                value={checked.interview_prep ? 'Interview Prep' : ''}
                checked={checked.interview_prep}
                onChange={this.onCheckboxClick.bind(this, 'interview_prep')}
              />
              Send me <i>only</i> interview prep posts
              <br></br>
            </label>
          )}
          {showAllOptions && <br />}
          {(isWeb || showAllOptions) && (
            <label>
              <input
                type={inputType}
                name="Restrictions"
                value={checked.web ? 'Web' : ''}
                checked={checked.web}
                onChange={this.onCheckboxClick.bind(this, 'web')}
              />
              Send me <i>only</i> Web Dev posts
              <br></br>
            </label>
          )}
          {showAllOptions && <br />}
          <input className={loading ? styles['loading'] : ''} type="submit" value="SUBMIT" />
        </form>
        <div
          className="g-recaptcha"
          data-sitekey="6LeihPAZAAAAAJL_iNurZmCZIz7bsZspK6UKgb_h"
          data-callback="onSubscribeFormSubmit"
          data-size="invisible"
        ></div>
        <p className={styles['recaptcha-message']}>
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
      </div>
    );
  }
}

const SubscribeFormWrapper = (props: Props) => (
  <RecaptchaContext.Consumer>
    {context => <SubscribeForm {...props} context={context} />}
  </RecaptchaContext.Consumer>
);

export const query = graphql`
  fragment SubscribeFormFragment on MarkdownRemarkFrontmatter {
    isInterviewPrep
    isWeb
  }
`;

export default SubscribeFormWrapper;
