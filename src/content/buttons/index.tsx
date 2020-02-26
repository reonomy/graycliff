import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import CodeIcon from '@material-ui/icons/Code';
import Highlight from 'react-highlight'
import buttonString from './string';
import '../../../node_modules/highlight.js/styles/tomorrow-night-bright.css'
import jsxToString from 'jsx-to-string';

interface IButtons {
  children: React.ReactElement;
}

const useStyles = makeStyles({
  root: {
    
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between' as 'space-between',
    padding: `16px 8px`,
    paddingRight: '50px',
    background: `#F7F9FE`,
    position: 'relative' as 'relative'
  },
  expand: {
    position: 'absolute' as 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer'
  },
  code: {
    padding: `16px`,
    fontSize: `14px`
  }
});

const Buttons = (props: IButtons) => {
  const classes = useStyles();
  const [code, setCode] = useState(false)
  const children = React.Children.toArray(props.children)

  let stringChildren: any = []

  for (let i = 0; i < React.Children.count(children); i++) {
    stringChildren.push(jsxToString(props.children[i]).replace('WithStyles(ForwardRef(Button))', 'Button').replace('/WithStyles(ForwardRef(Button))', '/Button'))
  }

  stringChildren = stringChildren.join("\n")
  return (
    <section className={classes.root}>
      <div className={classes.button}>
        <CodeIcon className={classes.expand} fontSize='small' onClick={() => setCode(!code)}></CodeIcon>
        {props.children}
      </div>
      {code && 
        <Highlight language="javascript" className={classes.code}>
            {stringChildren}
        </Highlight>} 
    </section>
  )
}


export default Buttons