/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React  from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import * as UI from '@material-ui/core';

const theme = createMuiTheme();

export const UIComponents = {
  ...UI,
  // TODO: include any additional custom components we want here, eg:
  Janky: props => <UI.TextField {...props} placeholder={'janky'} />
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
