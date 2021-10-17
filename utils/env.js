module.exports = {
  __DEV__:
    process.env.ACTIVE_ENV === 'development' ||
    process.env.NODE_ENV === 'development',
  __PROD__:
    process.env.ACTIVE_ENV === 'production' &&
    process.env.NODE_ENV === 'production',
}
