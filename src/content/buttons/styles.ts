import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface IStyleClasses {
    classes: {
      root: string;
      expand: string;
      margin: string;
      buttons: string;
    };
  }

export default function styles(theme: Theme) {
    return {
      root: {

      },
        buttons: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
            background: theme.palette.grey[50],
            position: 'relative'
        },
        expand: {
          position: 'absolute',
          top: 0,
          right: 0,
          cursor: 'pointer'
        },
        margin: {
          marginRight: theme.spacing(7)
        }
    }
  }