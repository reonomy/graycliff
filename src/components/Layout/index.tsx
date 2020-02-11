import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';
import { Link, graphql } from 'gatsby';
import { TopNav, SubNav } from '../../components/Nav';
import { IconReonomy } from '../../styles/icons';
import EditButton from '../EditButton';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';


function Layout(props) {
  const {
    data: {
      mdx: {
        code,
        frontmatter: { title },
        fields: { collection },
      },
    },
    classes
  } = props;

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.flexContainer}>
          <Link to="/" className={classes.logo}><IconReonomy color="secondary" /></Link>
          <TopNav currentPage={currentPath} />
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.flexContainer}>
          <div>
            <div className={classes.subnav}>
              <SubNav collection={collection} currentPage={currentPath} />
            </div>
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <MDXRenderer>{code.body}</MDXRenderer>
          </div>
        </div>
      </main>
      <EditButton />
    </div>
  )
}

/**
 * Query for data for the page. Note that $id is injected in via context from
 * actions.createPage. See gatsby-node.js for more info.
 */
export const pageQuery = graphql`
  query LayoutQuery($id: String) {
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

export default withStyles(styles)(Layout);
