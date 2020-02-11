import { MDXProvider } from '@mdx-js/tag';
import React from 'react';
import { Provider as StateProvider } from 'unstated';
import styles from './styles/styles.css';
import { LayoutComponents, Theme } from './Theme';

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  const loadPleaseThankYou = styles; // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <StateProvider>
      {/*
        netlify-identity-widget handles invite_tokens for new users
        TODO: handle this with a react script manager instead
      */}
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <MDXProvider components={LayoutComponents}>
        <Theme>{element}</Theme>
      </MDXProvider>
    </StateProvider>
  )
}
