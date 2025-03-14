import DefaultTheme from 'vitepress/theme'
import TOC from './components/TOC.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Register your custom global components
        app.component('TOC', TOC)
    },
}
