import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface IStyleClasses {
  classes: {
    root: string;
    header: string;
    flexContainer: string;
    logo: string;
    main: string;
    content: string;
    subnav: string;
  };
}

export default function styles(theme: Theme) {
  return {
    root: {},
    header: {
      position: 'relative' as 'relative',
      marginBottom: theme.spacing(4),
      border: `1px solid transparent`,
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      '&:before, &:after': {
        content: " ",
        display: 'table',
      },
      '&:after': {
        clear: 'both'
      },
      [theme.breakpoints.up('md')]: {
        borderRadius: 0
      }
    },
    flexContainer: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        maxWidth: 1164,
        paddingRight: theme.spacing(4.5),
        paddingLeft: theme.spacing(4.5)
      },
      margin: '0 auto',
    },
    logo: {
      padding: theme.spacing(1.5),
      position: 'relative' as 'relative',
      top: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        top: 'auto' as 'auto',
        '& svg': {
          fontSize: '2.5rem'
        }
      }
    },
    main: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(10),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    content: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        width: '80%',
        marginLeft: 'auto',
        paddingRight: 0
      }
    },
    subnav: {
      [theme.breakpoints.up('sm')]: {
        position: 'sticky' as 'sticky',
        top: theme.spacing(4)
      }
    }
  }
}

