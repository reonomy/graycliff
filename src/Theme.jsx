// @ts-check

/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React, { Fragment } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import * as UI from '@material-ui/core'
// import { Button } from "rebass"

// export const theme = {

// }
const theme = createMuiTheme();



export const LayoutComponents = {
  h1: ({ children, ...props }) => (
    <h1 style={{ color: 'tomato' }} {...props}>
      {children}
    </h1>
  ),
}


export const UIComponents = {
  ...UI,
  // Button: props => <Button {...props}>{ props.children }</Button>,
  Jank: props => <TextField style={{color: 'tomato'}} {...props} onChange={() => console.log('change!')} />
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
