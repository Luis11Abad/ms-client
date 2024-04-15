import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                light: '#F6F2EB',
                grey: '#6e6d7a',
                dark: '#263442',
                accent: '#B99056',
            },
        },
    },
    plugins: [],
}
