import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/styles';

export interface IStyleClasses {
  classes: {
    nav: string;
    tab: string;
    listItem: string;
    muted: string;
  };
}

export default makeStyles((theme: Theme) => {
  return {
    nav: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto',
        paddingLeft: theme.spacing(2),
        width: '80%'
      }
    },
    tab: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      textTransform: 'capitalize' as 'capitalize',
      fontFamily: "'Basier Square SemiBold', Helvetica, Arial, sans-serif",
      minWidth: theme.spacing(12),
    },
    listItem: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
    },
    muted: {
      color: theme.palette.grey[500]
    }
  }
});

