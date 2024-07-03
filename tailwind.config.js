import headlessui from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import defaultTheme from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f1effa',
                    100: '#f1efff',
                    200: '#ada0f9',
                    300: '#8a78f2',
                    400: '#523ec5',
                    500: '#3b27b1',
                    600: '#311da6',
                    700: '#28168c',
                    800: '#1f116d',
                    900: '#150958',
                },
                secondary: {
                    "50": "#f2f4ff",
                    "100": "#e6e9ff",
                    "200": "#d3d8ff",
                    "300": "#c1c7ff",
                    "400": "#b0b6ff",
                    "500": "#aeb8fe",
                    "600": "#9da4e5",
                    "700": "#8b90cc",
                    "800": "#7a7db4",
                    "900": "#696a9c",
                },
                tertiary: {
                    50: '#f8e4f7',
                    100: '#f4caf3',
                    200: '#eeafee',
                    300: '#e994e9',
                    400: '#e479e3',
                    500: '#dd45d0',
                    600: '#c73cc3',
                    700: '#b034a7',
                    800: '#992c8b',
                    900: '#7d236d',
                },
                accent: {
                    50: '#ffedcc',
                    100: '#ffdfb3',
                    200: '#ffd199',
                    300: '#ffc380',
                    400: '#ffb566',
                    500: '#ff8600',
                    600: '#e07700',
                    700: '#c16900',
                    800: '#a35b00',
                    900: '#854d00',
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxs: '0.75rem',
            },
            spacing: {
                px: '1px',
                0: '0',
                0.5: '2px',
                1: '4px',
                1.5: '6px',
                2: '8px',
                2.5: '10px',
                3: '12px',
                3.5: '14px',
                4: '16px',
                4.5: '18px',
                5: '20px',
                5.5: '22px',
                6: '24px',
                6.5: '26px',
                7: '28px',
                7.5: '30px',
                8: '32px',
                8.5: '34px',
                9: '36px',
                9.5: '38px',
                10: '40px',
                11: '44px',
                12: '48px',
                14: '56px',
                16: '64px',
                20: '80px',
                24: '96px',
                28: '112px',
                32: '128px',
                36: '144px',
                40: '160px',
                44: '176px',
                48: '192px',
                52: '208px',
                56: '224px',
                60: '240px',
                64: '256px',
                72: '288px',
                80: '320px',
                96: '384px',
            },
            borderWidth: {
                0.5: '0.5px',
                1.5: '1.5px',
                3: '3px',
                6: '6px',
            },
            borderRadius: {
                '4xs': '0.5px',
                '3xs': '1px',
                '2xs': '1px',
                xs: '1.5px',
            },
            screens: {
                'xs': '380px',
            },
            backgroundSize: {
                auto: 'auto',
                '4': '16px',
                '5': '20px',
                '6': '30px',
                '7': '28px',
                '8': '32px',
            },
            opacity: {
                '5': '0.05',
                '10': '0.10',
                '15': '0.15',
                '20': '0.20',
                '25': '0.25',
                '30': '0.30',
                '35': '0.35',
                '40': '0.40',
                '45': '0.45',
                '50': '0.50',
                '55': '0.55',
                '60': '0.60',
                '65': '0.65',
                '70': '0.70',
                '75': '0.75',
                '80': '0.80',
                '85': '0.85',
                '90': '0.90',
                '95': '0.95',
            },
            zIndex: {
                'z-bottom': '-2147483648',
                'z-below': '-1',
                'z-default': '0',
                'z-above': '1',
                'z-2': '2',
                'z-3': '3',
                'z-4': '4',
                'z-5': '5',
                'z-6': '6',
                'z-7': '7',
                'z-8': '8',
                'z-9': '9',
                'z-10': '10',
                'z-15': '15',
                'z-20': '20',
                'z-30': '30',
                'z-40': '40',
                'z-50': '50',
                'z-100': '100',
                'z-top': '2147483647',
            },
            transitionTimingFunction: {
                'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
                'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
                'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
                'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
                'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
                'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
                'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
                'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
                'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
                'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
                'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
                'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },

    plugins: [
        headlessui,
        forms,
        typography,
    ],
};