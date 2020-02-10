import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';
import { Link, graphql } from 'gatsby';
import { TopNav, SubNav } from './components/Nav';

export default function DocsLayout(props) {
  const {
    data: {
      mdx: {
        code,
        frontmatter: { title },
        fields: { collection },
      },
    },
  } = props;

  return (
    <div>
      <header>
        <Link to="/">
          Home
        </Link>
        <TopNav />
      </header>
      -----
      <SubNav collection={collection} />
      <h3>{title}</h3>
      <MDXRenderer>{code.body}</MDXRenderer>
    </div>
  )
}

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query DocsLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      fields {
        collection
      }
      code {
        body
      }
    }
  }
`
