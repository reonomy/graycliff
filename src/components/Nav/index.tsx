import React, { Fragment, useState, memo } from 'react';
import { TreeNode, pathListToTree } from './utils/pathListToTree';
import { Link, StaticQuery, graphql, useStaticQuery } from 'gatsby';
import { includes, reject, sortBy, groupBy, keys, get } from 'lodash';


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

function navData(): INavData  {
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

function TopNavItem({ item }: {item: INavItem}) {
  return (
    <Link to={item.node.fields.route}>
      {item.node.fields.collection}
    </Link>
  )
}

export function TopNav() {
  const data = navData();
  return (
    // create top-level collection link off first item in ordered page list
    <div>
      { data['style'] && <TopNavItem item={data['style'][0]}/> }
      { data['voice-and-tone'] && <TopNavItem item={data['voice-and-tone'][0]}/> }
      { data['code'] && <TopNavItem item={data['code'][0]}/> }
      { data['mdx'] && <TopNavItem item={data['mdx'][0]}/> }
    </div>
  )
}

export function SubNav({ collection }: { collection: string}) {
  const data = get(navData(), collection) || [];
  return (
    <div>
      subnav ----- <br />
      {data.map(item =>
        <Link key={item.node.id} to={item.node.fields.route}>
          {item.node.frontmatter.title}
        </Link>
      )}
    </div>
  );
}
