import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/styles'
import CodeIcon from '@material-ui/icons/Code';
import Stringify from '../../components/Stringify';

const styles = {
  container: {
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '16px 8px', 
    paddingRight: '50px', 
    background: `#F7F9FE`, 
    position: 'relative'
  },
  code: {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    cursor: 'pointer'
  }
}

const FlexWrap = (props) => {
  const [isCodeOpen, setCode] = useState(false)
  const children = React.Children.toArray(props.children)

  return (
    <section>
      <div style={styles.container}>
        <CodeIcon style={styles.code} fontSize="small" onClick={() => setCode(!isCodeOpen)}></CodeIcon>
        {props.children}
      </div>
      {isCodeOpen && <Stringify jsx={children} displayName={'Button'} singleLineProps={true}/>} 
    </section>
  )
}


export default FlexWrap