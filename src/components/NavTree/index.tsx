import { Subscribe } from "unstated"
import React, { Fragment } from "react"
import { TreeNode, pathListToTree } from "./utils/pathListToTree"
import { NavState } from "./NavState"
import { Link, StaticQuery, graphql } from "gatsby"
import { includes, reject, sortBy } from "lodash"

export const NavTree = _props => {
  return (
    <StaticQuery
      query={graphql`
        query NavTreeQuery {
          allMdx {
            edges {
              node {
                fields {
                  route
                }
                frontmatter {
                  title
                  # navSpacer
                  # showInNav
                }
              }
            }
          }
        }
      `}
      render={data => {
        return renderNavTree(buildNavTree(data))
      }}
    />
  )
}

function renderNavTree(tree: TreeNode[], treeDepth: number = 0) {

  return (
    <Subscribe to={[NavState]}>
      {(navState: NavState) => (
        <div>
          {tree.map(({ data, children, formattedName, path }: TreeNode) => {
            const hasChildren = Boolean(children.length)

            switch (hasChildren) {
              case true: {
                treeDepth++
                const expanded = includes(navState.state.expandedNavItems, path)

                return (
                  <Fragment key={path}>
                    {/*
                      Don't navigate, just toggle subnav open and closed
                    */}
                    <NavLink
                      disableNavigation
                      to={path}
                      onClick={() => {
                        navState.toggleNavItem(path)

                        // Recompute tree since subnav could be open or closed
                        treeDepth = 0
                      }}
                    >
                      {formattedName}
                    </NavLink>
                    {expanded && renderNavTree(children, treeDepth)}
                  </Fragment>
                )
              }
              case false: {
                return (
                  <Fragment key={path}>
                    <NavLink to={path}>{formattedName}</NavLink>
                  </Fragment>
                )
              }
            }
          })}
        </div>
      )}
    </Subscribe>
  )
}

// TODO: Add type once Apollo generator is fixed
function buildNavTree(data) {

  const routes = data.allMdx.edges.reduce((acc, { node }) => {
    const { route } = node.fields
    if (route.length) {
      return [
        ...acc,
        {
          path: route,
          data: node.frontmatter,
        },
      ]
    } else {
      return acc
    }
  }, [])

  // Perform various operations depending on frontmatter
  const sorted = sortBy(routes, route => route.data.order)
  const visible = reject(sorted, route => route.data.hideInNav)
  const navTree = pathListToTree(visible).map(path => path.children)[0]
  return navTree
}

const NavLink = ({
  children,
  disableNavigation,
  to,
  ...props
}) => {
  /**
   * If a nav item is disabled and has children it will toggle its children
   * open and closed, but not navigate. If we want parent nav items to show
   * their own page *and* toggle, set this prop to false.
   */
  if (disableNavigation) {
    return (
      <div {...props}>
        {children}
      </div>
    )
  } else {
    return (
      <div>
        <Link to={to} activeClassName="isActive" {...props}>
          {children}
        </Link>
      </div>
    )
  }
}
