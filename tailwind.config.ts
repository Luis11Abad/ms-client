import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: '#153045',
                secondary: '#78290f',
                light: '#f5f4f4',
                grey: '#6e6d7a',
                dark: '#0D1923',
                accent: '#B99056',
            },
        },
    },
    plugins: [],
}
