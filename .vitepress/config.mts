import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
    base: '/Myron-At-2AM-Page/',
    title: "Myron At 2AM",
    description: "一些開發上的札記",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'iOS', link: '/apple-development-signing' },
            // { text: 'Go', link: '/Go' },
            // { text: 'Vue', link: '/Vue' },
            //   { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'iOS',
                items: [
                    { text: '關於Apple憑證和簽名模式簡述', link: '/apple-development-signing' },
                    // { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            },
            // {
            //     text: 'Go',
            //     items: [
            //         // { text: 'Markdown Examples', link: '/markdown-examples' },
            //         // { text: 'Runtime API Examples', link: '/api-examples' }
            //     ]
            // }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/myronat2am' }
        ]
    }
}))