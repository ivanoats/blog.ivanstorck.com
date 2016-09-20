/* global ls, mkdir, mv */
require('shelljs/global')
const markdownExt = 'md'

function removeExt (f) {
  return f.substr(0, f.lastIndexOf('.'))
}

const files = ls(`pages/articles/*.${markdownExt}`)
const dirNames = files.map(f => removeExt(f))
mkdir('-p', dirNames)
files.forEach(f => {
  mv(f, `${removeExt(f)}/index.${markdownExt}`)
})
