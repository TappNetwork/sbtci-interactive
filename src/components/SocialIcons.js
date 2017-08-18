import React, { Component } from 'react';

const IconTwitter = ({fill}) => {
  return (
    <svg id="twitter" viewBox="0 0 48 48">
      <path fill={fill} d="M48,9.11341c-1.76603,0.78322-3.66389,1.31268-5.65607,1.55067 c2.03332-1.21873,3.5948-3.14867,4.33001-5.44828c-1.90268,1.12855-4.01024,1.94811-6.25344,2.3898 c-1.79636-1.914-4.35574-3.10992-7.18805-3.10992c-5.43885,0-9.84807,4.40923-9.84807,9.84756 c0,0.77191,0.0871,1.5234,0.25495,2.24422c-8.1844-0.41065-15.4407-4.33121-20.29778-10.28923 C2.49387,7.75272,2.0083,9.44432,2.0083,11.24909c0,3.41649,1.73858,6.43073,4.38093,8.19676 c-1.61427-0.05109-3.13272-0.49415-4.4605-1.23177c-0.00069,0.04115-0.00084,0.08231-0.00084,0.1238 c0,4.77144,3.39452,8.75168,7.8996,9.6563c-0.82642,0.22494-1.69641,0.34532-2.5945,0.34532 c-0.63458,0-1.25149-0.06173-1.8528-0.17661c1.25319,3.91234,4.89001,6.75958,9.19929,6.83914 c-3.37036,2.64116-7.61654,4.21549-12.23032,4.21549C1.55427,39.21751,0.77036,39.17088,0,39.08 c4.35814,2.79408,9.53447,4.42431,15.09573,4.42431c18.11374,0,28.0189-15.00571,28.0189-28.01916 c0-0.42694-0.00959-0.85164-0.02846-1.27394C45.01011,12.82274,46.67978,11.08826,48,9.11341z" />
    </svg>
  );
}

const IconFacebook = ({fill}) => {
  return (
    <svg id="facebook" viewBox="0 0 48 48">
      <path fill={fill} d="M18.06306,46L18,26h-8v-8h8v-5c0-7.42279,4.59664-11,11.21828-11 c3.17183,0,5.89786,0.23615,6.6923,0.3417v7.75726l-4.59246,0.00209c-3.60122,0-4.2985,1.71125-4.2985,4.22238V18H37.5l-4,8 h-6.48038v20H18.06306z" />
    </svg>
  );
}

const IconLinkedIn = ({fill}) => {
  return (
    <svg id="linkedin" viewBox="0 0 48 48">
      <defs>
        <mask id="linkedin-mask">
          <rect height="100%" width="100%" fill="#ffffff" />
          <path fill="#000000" d="M7.11264,17.9948h7.12629v22.90627H7.11264V17.9948z M10.67775,6.60807 c2.27735,0,4.12625,1.84961,4.12625,4.12827c0,2.27929-1.84891,4.12887-4.12625,4.12887c-2.28645,0-4.1302-1.84957-4.1302-4.12887 C6.54755,8.45768,8.39129,6.60807,10.67775,6.60807" /> <path fill="#000000" d="M18.70507,17.9948h6.82427v3.13147h0.0976c0.9492-1.8008,3.27213-3.69987,6.73573-3.69987 c7.20827,0,8.5404,4.74293,8.5404,10.91213v12.56253h-7.11853V29.76173c0-2.65627-0.0456-6.0736-3.6992-6.0736 c-3.7044,0-4.2696,2.8952-4.2696,5.88347v11.32947h-7.11067V17.9948z" />
        </mask>
      </defs>
      <path fill={fill} mask="url(#linkedin-mask)" d="M44.44853,0H3.54103C1.58791,0,0.00067,1.54948,0.00067,3.46093V44.5364 C0.00067,46.44787,1.58791,48,3.54103,48h40.90751c1.95707,0,3.5508-1.55213,3.5508-3.4636V3.46093 C47.99933,1.54948,46.4056,0,44.44853,0z" />
    </svg>
  );
}

const IconEmail = ({fill}) => {
  return (
    <svg viewBox="0 0 48 48">
    <path fill={fill} d="M40.2,6H7.8c-4.3,0-7.7,3.4-7.7,7.7v20.5c0,4.3,3.4,7.7,7.7,7.7h32.4c4.3,0,7.7-3.4,7.7-7.7V13.7C47.9,9.5,44.4,6,40.2,6z
    	 M23.5,23.1l-14.2-12h29.1L23.5,23.1z M13.8,21.7L5.2,32.4V14.5L13.8,21.7z M17.7,25l4.1,3.4c0.9,0.8,2.3,0.8,3.2,0l3.8-3l10.4,11.5
    	h-31L17.7,25z M32.9,22.2l9.9-7.9v18.9L32.9,22.2z"/>
    </svg>

  );
}

export { IconTwitter, IconFacebook, IconLinkedIn, IconEmail };
