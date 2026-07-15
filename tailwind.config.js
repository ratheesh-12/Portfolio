/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00D9FF",
                secondary: "#0A84FF",
                accent: "#5AC8FA",
                aqua: "#00C7BE",
                ocean: "#007AFF",
                dark: "#000000",
                'dark-card': "#1C1C1E",
                'water-light': "#64D2FF",
                'water-dark': "#0066CC",
            },
            fontFamily: {
                sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'wave': 'wave 3s ease-in-out infinite',
                'ripple': 'ripple 2s ease-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(2deg)' },
                },
                ripple: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(2)', opacity: '0' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                }
            },
            backdropBlur: {
                'xs': '2px',
            },
            boxShadow: {
                'ios': '0 8px 32px rgba(0, 217, 255, 0.15)',
                'ios-lg': '0 12px 48px rgba(0, 122, 255, 0.25)',
                'water': '0 8px 32px rgba(100, 210, 255, 0.2)',
            }
        },
    },
    plugins: [],
}
