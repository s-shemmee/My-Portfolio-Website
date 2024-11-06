'use client';

import ReactDOM from 'react-dom';
import React from 'react';

export function PreloadResources() {
  React.useEffect(() => {
    ReactDOM.preconnect('https://api.github.com', { crossOrigin: 'anonymous' });
  }, []);

  return null;
}
