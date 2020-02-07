import { MdxControl, MdxPreview } from "netlify-cms-widget-mdx"
import React, { Component, useState } from "react"
// import { StyleSheetManager } from "styled-components"
import { LayoutComponents, UIComponents } from "../Theme"
import FileSystemBackend from "netlify-cms-backend-fs"
import CMS from "netlify-cms-app"
import netlifyIdentity from "netlify-identity-widget"

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';


const isClient = typeof window !== "undefined"
const isDevelopment = process.env.NODE_ENV === "development"

if (isClient) {
  window.CMS_MANUAL_INIT = true
  netlifyIdentity.init()
  netlifyIdentity.open()
}

if (isDevelopment) {
  // Allows for local development overrides in cms.yaml
  window.CMS_ENV = "localhost_development"

  // Attach to the file system
  // Note this ONLY works with netlify-cms-app v2.9.1
  CMS.registerBackend('file-system', FileSystemBackend)
}


// Custom components need refs for validation and thus must be a class.
// Additionally, after <Theme>, only one child is allowed.
// See https://github.com/netlify/netlify-cms/issues/1346

class MDXWidget extends Component {
  render() {
    return (
      // <Theme>
      <div>
        <MdxControl {...this.props} />
      </div>
      // </Theme>
    )
  }
}

// The preview window which renders MDX content.
// Docs: https://www.netlifycms.org/docs/customization/

const PreviewWindow = props => {
  // const iframe = document.getElementsByTagName("iframe")[1];
  // const iframeHead = iframe.contentDocument.head;

  // const styleNode = document.createComment('jss-insertion-point');
  // iframeHead.insertBefore(styleNode, iframeHead.firstChild);



  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    components: LayoutComponents,
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: UIComponents,

    mdPlugins: [],
  }



  const [jss, setJss] = useState(null);

  function setRefAndCreateJss(headRef) {
    if (headRef && !jss) {
      const createdJssWithRef = create({...jssPreset(), insertionPoint: headRef})
      setJss(createdJssWithRef)
    }
  }

  return (
    <div>
      <noscript ref={setRefAndCreateJss} />
      {jss &&
      <StylesProvider jss={jss}>
        <MdxPreview mdx={mdxProps} {...props} />
      </StylesProvider>
      }
    </div>

  )
}

// Netlify collections that set `widget: mdx` will be able to use this custom widget.
// Docs: https://www.netlifycms.org/docs/widgets/

CMS.registerWidget("mdx", MDXWidget, PreviewWindow)

// Start the CMS
CMS.init()
