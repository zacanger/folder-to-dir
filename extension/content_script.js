// http://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
walk(document.body)

function walk (node) {
  if (!node || (node && !node.nodeType)) return
  var child, next
  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walk(child)
        child = next
      }
      break
    case 3: // Text node
      handleText(node)
      break
  }
}

function handleText (textNode) {
  var v = textNode.nodeValue
    .replace(/\bfolder\b/g, 'directory')
    .replace(/\bfolders\b/g, 'directories')
    .replace(/\bFolder\b/g, 'Directory')
    .replace(/\bDirectories\b/g, 'Directories')

  textNode.nodeValue = v
}
