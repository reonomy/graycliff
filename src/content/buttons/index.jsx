import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/styles'
import CodeIcon from '@material-ui/icons/Code';
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/tomorrow-night-bright.css'
import jsxToString from 'jsx-to-string';

const useStyles = makeStyles({
  root: {
    
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `16px 8px`,
    paddingRight: '50px',
    background: `#F7F9FE`,
    position: 'relative'
  },
  expand: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer'
  },
  code: {
    padding: `16px`,
    fontSize: `14px`
  }
});

const Buttons = (props) => {
  const classes = useStyles();
  const [isCodeOpen, setCode] = useState(false)
  const children = React.Children.toArray(props.children)

  const stringChildren = useMemo(() => {
    let stringed = []
  
    for (let i = 0; i < React.Children.count(children); i++) {
      stringed
        .push(jsxToString(props.children[i])
        .replace('WithStyles(ForwardRef(Button))', 'Button')
        .replace('/WithStyles(ForwardRef(Button))', '/Button'))
    }
  
    return stringed.join("\n\n")
  }, [props.children])

  console.log(stringChildren)

  return (
    <section className={classes.root}>
      <div className={classes.button}>
        <CodeIcon className={classes.expand} fontSize='small' onClick={() => setCode(!isCodeOpen)}></CodeIcon>
        {props.children}
      </div>
      {isCodeOpen && 
        <Highlight language="javascript" className={classes.code}>
            {stringChildren}
        </Highlight>} 
    </section>
  )
}


export default Buttons