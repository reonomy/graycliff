import React from 'react';
import { graphql, useStaticQuery, navigateTo } from 'gatsby';
import { groupBy, get, pick, keys, findIndex } from 'lodash';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './styles';


interface INavItem {
  node: {
    id: string;
    fields: {
      route: string;
      collection: string;
    };
    frontmatter: {
      title: string;
      date: string;
    }
  }
}

interface INavData {
  [key: string]: INavItem[];
}

export function useNavData(): INavData  {
  const { allMdx } = useStaticQuery(
    // get all pages sorted by publish date so we can order them as such in subnav
    graphql`
      query NavQuery {
        allMdx(sort: {fields: frontmatter___date, order: ASC}, limit: 1000) {
          edges {
            node {
              fields {
                route
                collection
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  );
  return groupBy(allMdx.edges as INavItem[], 'node.fields.collection');
}

export function TopNav({ currentPage }: { currentPage: string}) {
  const navItemsPreference = ['components', 'brand', 'code'];
  const data = pick(useNavData(), navItemsPreference);
  const navItems = keys(data);
  const tabValue = findIndex(navItems, i => currentPage.indexOf(`/${i}/`) > -1);
  const navigate = (path: string) => navigateTo(path);
  const classes = useStyles();

  return (
    <div>
      <Tabs value={tabValue} aria-label="navigation" indicatorColor="primary" variant="scrollable">
        {navItems.map((collection, index) =>
          <Tab
            key={collection}
            label={collection}
            classes={{
              root: tabValue === index ? '' : classes.muted
            }}
            className={classes.tab}
            // link to the collection means link to first page within the collection
            onClick={() => navigate(data[collection][0].node.fields.route)}
          />
        )}
      </Tabs>
    </div>
  )
}

export function SubNav({ collection, currentPage }: { collection: string, currentPage: string }) {
  const data = get(useNavData(), collection) || [];
  const classes = useStyles();
  const navigate = (path: string) => navigateTo(path);

  return (
    <List component="nav" aria-label="pages within collection">
      {data.map(item =>
        <ListItem
          key={item.node.id}
          button
          classes={{
            root: currentPage.indexOf(item.node.fields.route) > -1 ? '' : classes.muted
          }}
          className={classes.listItem}
          component="a"
          onClick={() => navigate(item.node.fields.route)}>
          {item.node.frontmatter.title}
        </ListItem>
      )}
    </List>
  );
}
