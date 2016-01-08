if (process.env.NODE_ENV === 'production') {
  export default require('./configureStore.prod')
} else {
  export default require('./configureStore.dev')
}
