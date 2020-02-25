import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import styles, { IStyleClasses } from './styles';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CodeIcon from '@material-ui/icons/Code';
import Highlight from 'react-highlight'
import buttonString from './string';


const Buttons = ({ classes }: IStyleClasses) => {
    const [code, setCode] = useState(false)

    return (
        <section className={classes.root}>
            <div className={classes.buttons}>
            <CodeIcon className={classes.expand} fontSize='small' onClick={() => setCode(!code)}></CodeIcon>
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
            {code && <Highlight language="jsx" className={classes.code}>
            {buttonString}
            </Highlight>}
        </section>
    )
}

export default withStyles(styles)(Buttons)