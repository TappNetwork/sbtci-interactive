import React from 'react';

const IconTwitter = (props) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
      className={ props.className }
    >
      <svg id="twitter" viewBox="0 0 48 48">
        <path fill={props.fill} d="M48,9.11341c-1.76603,0.78322-3.66389,1.31268-5.65607,1.55067 c2.03332-1.21873,3.5948-3.14867,4.33001-5.44828c-1.90268,1.12855-4.01024,1.94811-6.25344,2.3898 c-1.79636-1.914-4.35574-3.10992-7.18805-3.10992c-5.43885,0-9.84807,4.40923-9.84807,9.84756 c0,0.77191,0.0871,1.5234,0.25495,2.24422c-8.1844-0.41065-15.4407-4.33121-20.29778-10.28923 C2.49387,7.75272,2.0083,9.44432,2.0083,11.24909c0,3.41649,1.73858,6.43073,4.38093,8.19676 c-1.61427-0.05109-3.13272-0.49415-4.4605-1.23177c-0.00069,0.04115-0.00084,0.08231-0.00084,0.1238 c0,4.77144,3.39452,8.75168,7.8996,9.6563c-0.82642,0.22494-1.69641,0.34532-2.5945,0.34532 c-0.63458,0-1.25149-0.06173-1.8528-0.17661c1.25319,3.91234,4.89001,6.75958,9.19929,6.83914 c-3.37036,2.64116-7.61654,4.21549-12.23032,4.21549C1.55427,39.21751,0.77036,39.17088,0,39.08 c4.35814,2.79408,9.53447,4.42431,15.09573,4.42431c18.11374,0,28.0189-15.00571,28.0189-28.01916 c0-0.42694-0.00959-0.85164-0.02846-1.27394C45.01011,12.82274,46.67978,11.08826,48,9.11341z" />
      </svg>
      { props.text ? <span>{ props.text }</span> : null }
    </a>
  );
};

const IconFacebook = (props) => {
  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
      className={ props.className }
    >
      <svg id="facebook" viewBox="0 0 48 48">
        <path fill={props.fill} d="M18.06306,46L18,26h-8v-8h8v-5c0-7.42279,4.59664-11,11.21828-11 c3.17183,0,5.89786,0.23615,6.6923,0.3417v7.75726l-4.59246,0.00209c-3.60122,0-4.2985,1.71125-4.2985,4.22238V18H37.5l-4,8 h-6.48038v20H18.06306z" />
      </svg>
      { props.text ? <span>{ props.text }</span> : null }
    </a>
  );
};

const IconLinkedIn = (props) => {
  return (
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
      className={ props.className }
    >
      <svg id="linkedin" viewBox="0 0 48 48">
        <path fill={props.fill} d="M10.74,48H1V16h9.74V48z M5.75,11.5C2.56,11.5,0,8.94,0,5.75C0,2.56,2.56,0,5.75,0
          c3.18,0,5.75,2.56,5.75,5.75C11.5,8.94,8.93,11.5,5.75,11.5z M48,48H38V32.41c0-3.72,0.1-8.41-5-8.41c-5.18,0-6,3.82-6,8v16H16.98
          V16h9.54v4.32h0.13C27.98,17.8,31.16,15,36,15c10.07,0,12,6.77,12,15.4V48z"/>
      </svg>
      { props.text ? <span>{ props.text }</span> : null }
    </a>
  );
};

const IconEmail = (props) => {
  let emailSubject = props.emailSubject || 'Check out the State Business Tax Climate Index';
  let emailBody = props.emailBody || `You can see it here: ${window.location.href}`;
  return (
    <a
      href={ `mailto:?subject=${emailSubject}&body=${emailBody}` }
      className={ props.className }
    >
      <svg id="email" viewBox="0 0 48 48">
        <polygon fill={props.fill} points="24,0 18,4 30,4 "/>
        <path fill={props.fill} d="M24,32l-3,1L0,46c0,2,2,2,2,2h44c0,0,2,0,2-2L27,33L24,32z"/>
        <polygon fill={props.fill} points="0,22 0,44 17.11,33.41 	"/>
        <polygon fill={props.fill} points="30.89,33.41 48,44 48,22 	"/>
        <polygon fill={props.fill} points="43,14 43,23 48,19 "/>
        <polygon fill={props.fill} points="0,19 5,23 5,14 "/>
        <polygon fill={props.fill} points="7,6 7,24 18,31 20,30 24,29 28,30 30,31 41,24 41,6 "/>
      </svg>
      { props.text ? <span>{ props.text }</span> : null }
    </a>
  );
};

export { IconTwitter, IconFacebook, IconLinkedIn, IconEmail };
