import { MDXProvider } from '@mdx-js/tag';
import React from 'react';
import { Provider as StateProvider } from 'unstated';
import { LayoutComponents, Theme } from "./Theme";

// TODO: Need to create gatsby-plugin-react-head
// import { HeadProvider } from "react-head"

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  return (
    <StateProvider>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <MDXProvider components={LayoutComponents}>
        <Theme>{element}</Theme>
      </MDXProvider>
    </StateProvider>
  )
}
