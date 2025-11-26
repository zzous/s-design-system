

export const onHighlightRow = (list, item) => {
  if (list?.value?.length > 0) {
    list.value.forEach(item => { item.highlight = '' })
  }
  setTimeout(() => {
    if (typeof item === 'object') { item.highlight = 's-highlight-info' }
  }, 0)
}

export default { onHighlightRow }
