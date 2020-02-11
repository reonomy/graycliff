import React from 'react';
// import netlifyIdentity from 'netlify-identity-widget';
import { IconPencil } from '../../styles/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

function EditButton({ classes }) {

  // netlifyIdentity.on('login', user => console.log('login', user));

  return (
    <Tooltip title="Be a hero">
      <IconButton className={classes.button} href="/admin" target="_blank">
        <IconPencil />
      </IconButton>
    </Tooltip>
  )
}

export default withStyles(styles)(EditButton);