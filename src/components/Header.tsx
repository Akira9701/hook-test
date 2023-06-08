import React from 'react';

import FinderComponent from './Finder';

const Header = () => (
  <header>
    <div className='header_logo'>
      <svg fill='none' height='24' width='113' xmlns='http://www.w3.org/2000/svg'>
        <clipPath id='a'>
          <path d='M0 1h22v22H0z' />
        </clipPath>
        <g fill='currentColor'>
          <path d='M29.412 2.733h3.006v7.428h5.616V2.733h3.006V20h-3.006v-7.503h-5.615V20h-3.007zM48.552 7.254c1.093 0 2.054.249 2.882.746.828.497 1.474 1.234 1.938 2.211.464.96.696 2.137.696 3.528 0 2.104-.514 3.719-1.54 4.845-1.028 1.11-2.353 1.665-3.976 1.665-1.077 0-2.037-.249-2.882-.746-.828-.513-1.474-1.25-1.938-2.211s-.696-2.137-.696-3.528c0-2.104.514-3.71 1.54-4.82 1.028-1.126 2.353-1.69 3.976-1.69zm0 10.659c.828 0 1.441-.331 1.839-.994.414-.662.62-1.722.62-3.18 0-1.441-.206-2.493-.62-3.155-.398-.663-1.01-.994-1.839-.994-.812 0-1.425.331-1.839.994-.414.662-.62 1.722-.62 3.18 0 1.44.206 2.493.62 3.155.414.663 1.027.994 1.839.994zM61.22 20h-5.167V7.503h5.217c2.766 0 4.15 1.06 4.15 3.18 0 .745-.2 1.35-.597 1.814-.397.464-.927.795-1.59.994.828.149 1.474.463 1.938.944.48.464.72 1.11.72 1.938 0 1.192-.413 2.095-1.242 2.708-.811.613-1.954.919-3.428.919zm-.297-10.31h-1.988v2.832h1.888c.563 0 .994-.125 1.292-.373.315-.248.472-.588.472-1.019 0-.96-.555-1.44-1.664-1.44zm.05 4.993h-2.038v3.13h2.037c.597 0 1.069-.124 1.416-.372.348-.265.522-.687.522-1.267 0-.994-.646-1.49-1.938-1.49zM72.67 7.254c1.093 0 2.053.249 2.881.746.828.497 1.474 1.234 1.938 2.211.464.96.696 2.137.696 3.528 0 2.104-.513 3.719-1.54 4.845-1.027 1.11-2.352 1.665-3.976 1.665-1.076 0-2.037-.249-2.882-.746-.828-.513-1.474-1.25-1.938-2.211-.463-.96-.695-2.137-.695-3.528 0-2.104.513-3.71 1.54-4.82 1.027-1.126 2.352-1.69 3.975-1.69zm0 10.659c.828 0 1.44-.331 1.838-.994.414-.662.621-1.722.621-3.18 0-1.441-.207-2.493-.621-3.155-.398-.663-1.01-.994-1.839-.994-.811 0-1.424.331-1.838.994-.414.662-.621 1.722-.621 3.18 0 1.44.207 2.493.62 3.155s1.028.994 1.84.994zM85.537 20.248c-1.971 0-3.445-.554-4.423-1.664-.96-1.126-1.44-2.733-1.44-4.82 0-1.275.215-2.402.645-3.38.431-.976 1.069-1.738 1.913-2.285.862-.563 1.922-.845 3.18-.845.73 0 1.359.058 1.889.174.546.1.977.24 1.292.423v2.51c-.298-.183-.704-.357-1.218-.523a5.31 5.31 0 00-1.64-.248c-.96 0-1.705.348-2.235 1.043-.514.68-.77 1.698-.77 3.056 0 1.292.231 2.32.695 3.081s1.226 1.143 2.286 1.143c.63 0 1.176-.074 1.64-.224s.877-.356 1.242-.62v2.41c-.712.513-1.731.77-3.056.77zM99.626 9.838h-3.479V20h-2.956V9.838h-3.479V7.503h9.914zM101.376 7.503h2.857v7.727l4.522-7.727h2.634V20h-2.858v-7.727L104.01 20h-2.634z' />
        </g>
        <g clipPath='url(#a)'>
          <path
            clipRule='evenodd'
            d='M11 23c6.075 0 11-4.925 11-11a10.95 10.95 0 00-1.472-5.5h-8.611c-2.567 0-3.85 0-4.831.5a4.583 4.583 0 00-2.003 2.003c-.5.98-.5 2.263-.5 4.83v7.103A10.95 10.95 0 0011 23z'
            fill='#eef3ff'
            fillRule='evenodd'
          />
          <path
            d='M20.528 6.5A10.995 10.995 0 0011 1C4.925 1 0 5.925 0 12c0 3.68 1.808 6.939 4.583 8.936v-7.103c0-2.567 0-3.85.5-4.83A4.583 4.583 0 017.086 7c.98-.5 2.264-.5 4.83-.5z'
            fill='#6f8bff'
          />
          <path
            d='M19.25 15.667c0 .506-.41.916-.917.916H8.25a.917.917 0 110-1.833h10.083c.507 0 .917.41.917.917z'
            fill='#99b3fb'
          />
          <path
            clipRule='evenodd'
            d='M21.653 9.25H13.75a1.833 1.833 0 100 3.667h8.212a11.021 11.021 0 00-.309-3.667z'
            fill='#d3e0fe'
            fillRule='evenodd'
          />
          <circle cx='9.167' cy='11.083' fill='#fc3f1d' r='1.833' />
        </g>
      </svg>
    </div>
    <FinderComponent />
    <div className='header_profile'>
      <a href='https://yandex.ru/pogoda/novosibirsk?lat=55.030199&lon=82.92043'>
        <svg
          className='bi bi-person-circle'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
          <path
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
            fillRule='evenodd'
          />
        </svg>
      </a>
    </div>
  </header>
);

export default Header;
