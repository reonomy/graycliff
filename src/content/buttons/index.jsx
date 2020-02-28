import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/styles'
import CodeIcon from '@material-ui/icons/Code';
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/tomorrow-night-bright.css'
import jsxToString from '../../utils/jsx-to-string/index';

const Buttons = (props) => {
  const [isCodeOpen, setCode] = useState(false)
  const children = React.Children.toArray(props.children)

  const stringChildren = useMemo(() => {
    let stringed = []
  
    for (let i = 0; i < children.length; i++) {
      stringed
        .push(jsxToString(children[i], {
          displayName: 'Button',
          ignoreProps: ['key'],
          singleLineProps: true
        }))
    }
  
    return stringed.join("\n\n")
  }, [children])


  return (
    <section>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '16px 8px', paddingRight: '50px', background: `#F7F9FE`, position: 'relative'}}>
        <CodeIcon style={{position: 'absolute', top: 0, right: 0, cursor: 'pointer'}} fontSize="small" onClick={() => setCode(!isCodeOpen)}></CodeIcon>
        {props.children}
      </div>
      {isCodeOpen && 
        <Highlight language="jsx" style={{padding: '16px', fontSize: '14px'}}>
            {stringChildren}
        </Highlight>} 
    </section>
  )
}


export default Buttons