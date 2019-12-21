export default {
  theme: 'default',
  defaults: {
    theme: [
      { value: 'default', name: 'Default - Dark Theme' },
      { value: 'light', name: 'Light Theme' }
    ]
  },

  init() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme')
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === false) {
        this.setTheme('light')
      }
    }
  },

  setTheme(theme) {
    localStorage.setItem('theme', theme)
    this.theme = theme
  },
  getTheme() {
    return this.theme
  }
}