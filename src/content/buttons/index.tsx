import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles, { IStyleClasses } from './styles';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CodeIcon from '@material-ui/icons/Code';


const Buttons = ({ classes }: IStyleClasses) => {
    return (
        <section className={classes.root}>
            <div className={classes.buttons}>
            <CodeIcon className={classes.expand} fontSize='small'></CodeIcon>
            <Button 
             size="medium"
             variant="contained"
             color="primary"
            >
                Primary
            </Button>

            <Button 
             size="medium"
             variant="contained"
             color="secondary"
            >
                Secondary
            </Button>

            <Button 
             size="medium"
             variant="contained"
             disabled
            >
                Disabled
            </Button>

            <Button 
             size="medium"
             variant="outlined"
             color="primary"
            >
                Light
            </Button>

            <Button 
             size="medium"
             variant="outlined"
             color="primary"
            >
                Outlined
            </Button>

            <Button size="medium" color="primary">Text</Button>

            <Button
             color="primary"
             startIcon={<DeleteIcon />}
             className={classes.margin}
            >
                Icon and Text
            </Button>
            </div>
            <pre className={classes.code}>
                Hello World
            </pre>
        </section>
    )
}

export default withStyles(styles)(Buttons)