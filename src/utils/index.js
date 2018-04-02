const utils = {
  getStyle: (elem, style) => {
    let view = elem.ownerDocument.defaultView
    if (!view || !view.opener) {
      view = window
    }
    if (typeof style == 'string') {
      return view.getComputedStyle(elem)[style]
    } else if (typeof style === 'undefined') {
      return view.getComputedStyle(elem)
    } else if (style instanceof Array) {
      let styles = {}
      for (let i of style) {
        styles[i] = view.getComputedStyle(elem)[i]
      }
      return styles
    }
  }
}



export default utils;
