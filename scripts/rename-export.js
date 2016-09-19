/* global ls, mkdir, mv */
require('shelljs/global')

function removeExt (f) {
  return f.substr(0, f.lastIndexOf('.'))
}

const files = ls('pages/articles/*.md')
const dirNames = files.map(f => removeExt(f))
mkdir('-p', dirNames)
files.forEach(f => {
  mv(f, `${removeExt(f)}/index.md`)
})
