const path = require('path')
const fs = require('fs/promises')

module.exports.getTemplatesDirPath = () =>
  path.resolve(__dirname, '..', 'src', 'templates')

module.exports.getTemplates = async () => {
  const templatesDir = this.getTemplatesDirPath()
  try {
    const filenames = await fs.readdir(templatesDir)
    const templateExtensions = ['js', 'jsx', 'ts', 'tsx']
    const parsedFilenames = filenames.filter((filename) => {
      const [, extension] = filename.split('.')
      return templateExtensions.includes(extension)
    })

    /** @type {Map<string, string>} */
    const templates = new Map()

    parsedFilenames.forEach((filename) => {
      const [templateKey] = filename.split('.')
      const templatePath = path.join(templatesDir, filename)
      templates.set(templateKey, templatePath)
    })

    return templates
  } catch (error) {
    console.log('unable to scan templates directory: ', error)
    throw error
  }
}
