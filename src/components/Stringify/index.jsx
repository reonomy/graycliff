import React, { useMemo } from 'react'

import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/tomorrow-night-bright.css'
import jsxToString from '../../utils/jsx-to-string/index';

const styles = {
    highLight: {
        padding: '16px', 
        fontSize: '14px'
    }
}

const Stringify = ({ jsx, displayName, singleLineProps }) => {

    const stringChildren = useMemo(() => {
        let stringed = []
        
        for (let i = 0; i < jsx.length; i++) {
            stringed
            .push(jsxToString(jsx[i], {
                displayName: displayName,
                ignoreProps: ['key'],
                singleLineProps: singleLineProps
            }))
        }
        
        return stringed.join("\n\n")
    }, [jsx])
    

    return (
        <Highlight language="jsx" style={styles.highLight}>
            {stringChildren}
        </Highlight>
    )
}

export default Stringify