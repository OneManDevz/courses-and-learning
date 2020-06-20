export default value => {
  const date = new Date(value)
  return date.toLocaleString(['sk-SK'], {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
}
