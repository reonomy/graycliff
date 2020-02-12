import React from 'react';
import { IconPencil } from '../../styles/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

function EditButton({ classes }) {

  // hack to show edit button link to only those who are logged in
  if ((window as any)?.netlifyIdentity?.currentUser) {
    const user = (window as any).netlifyIdentiy.currentUser();
    if (user) {
      return (
        <Tooltip title="Be a hero">
          <IconButton className={classes.button} href="/admin" target="_blank">
            <IconPencil />
          </IconButton>
        </Tooltip>
      )
    }
  }
  return null;
}

export default withStyles(styles)(EditButton);