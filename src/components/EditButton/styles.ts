import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface IStyleClasses {
  classes: {
    button: string;
  };
}

export default function styles(theme: Theme) {
  return {
    button: {
      position: 'fixed' as 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[3],
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      }
      // [theme.breakpoints.up('sm')]: {

      // }
    }
  }
};
