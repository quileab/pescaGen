const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: [
		'Intervar',
		 ...defaultTheme.fontFamily.sans,
		 "./vendor/robsontenorio/mary/src/View/Components/**/*.php"
	],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    content: [
        './app/**/*.php',
        "./resources/**/*.{php,html,js,jsx,ts,tsx,vue,twig}",

        "./resources/**/**/*.{js,blade.php}",
        "./app/View/Components/**/**/*.php",
        "./app/Livewire/**/**/*.php",

        // Add mary
        "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
    ],
    plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require("daisyui")
	],
}