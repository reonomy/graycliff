[![Netlify Status](https://api.netlify.com/api/v1/badges/8f56db88-87e7-47ee-a15f-7a9e59e2442c/deploy-status)](https://app.netlify.com/sites/reonomy-graycliff/deploys)

# Reonomy Style Guide

A full-fleged content-managed site using Gatsby + Netlify CMS with all the trimmings:

- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)
- [Jest](https://jestjs.io/)
- [NetlifyCMS](https://www.netlifycms.org/), with local file-system and MDX
  support
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [Material-UI](https://material-ui.com/)

Note that many of the MDX, Netlify, and CMS related packages added here are fragile and/or no longer supported, so update and remove packages with _grave_ caution.

This site is based off [this gatsby starter](https://github.com/damassi/gatsby-starter-typescript-rebass-netlifycms).

### Development

```sh
yarn start
yarn clean
yarn type-check
```

### Deployment

```sh
yarn build
```


### Demo

Here's basically what you can do now with MDX:

![demo](https://user-images.githubusercontent.com/236943/51792565-abd93e00-2167-11e9-8bcb-87f7dccece52.gif)

### GraphQL Validation

Validation has been added via `eslint-plugin-graphql`:

<img width="512" alt="screen shot 2019-01-26 at 6 49 01 pm" src="https://user-images.githubusercontent.com/236943/51796580-8110d900-21ab-11e9-91a7-1cc6d6a068fc.png">


<details>
  <summary>Gatsby API Details</summary>

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.
1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).
1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any).
    These allow customization/extension of default Gatsby settings affecting
    pieces of the site build process.
1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
    (if any). These allow customization of default Gatsby settings affecting
    server-side rendering.

</details>
