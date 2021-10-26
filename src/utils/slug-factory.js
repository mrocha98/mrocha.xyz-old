class SlugFactory {
  /** @param {string} filePath */
  constructor(filePath) {
    /** @private @type {string} */
    this.filePath = filePath
  }

  /** @private */
  _hasDatePart() {
    const filePathHasDatePartRegex = /\/\d{4}-\d{2}-\d{2}-(.+)\//
    return filePathHasDatePartRegex.test(this.filePath)
  }

  /** @private */
  _generateSlugHandlingDatePart() {
    const DATE_PART_LENGTH = '/YYYY-MM-DD-'.length
    return this.filePath.slice(DATE_PART_LENGTH)
  }

  /**
   * @private
   * @param {string} slug
   */
  _ensureSlashes(slug) {
    const slash = '/'
    const STARTS_WITH_SLASH = slug.startsWith(slash)
    const ENDS_WITH_SLASH = slug.endsWith(slash)

    if (!STARTS_WITH_SLASH) slug = slash.concat(slug)
    if (!ENDS_WITH_SLASH) slug = slug.concat(slash)

    return slug
  }

  createSlug() {
    const HAS_DATE_PART = this._hasDatePart()
    const slug = HAS_DATE_PART
      ? this._generateSlugHandlingDatePart()
      : this.filePath

    return this._ensureSlashes(slug)
  }
}

module.exports = {
  SlugFactory,
}
