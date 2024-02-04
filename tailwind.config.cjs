/** @type {import('tailwindcss').Config} */

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : '';
}

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        'bg-rose-100',
        'bg-red-100',
        'bg-purple-100',
        'bg-lime-100',
        'bg-orange-100',
        'bg-sky-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-amber-100',
        'bg-fuchsia-100',
        'bg-violet-100',
        'bg-yellow-100',
        'bg-emerald-100',
        'bg-teal-100',
        'bg-indigo-100',
        'bg-cyan-100',
        'bg-rose-200',
        'bg-red-200',
        'bg-purple-200',
        'bg-lime-200',
        'bg-orange-200',
        'bg-sky-200',
        'bg-green-200',
        'bg-blue-200',
        'bg-amber-200',
        'bg-fuchsia-200',
        'bg-violet-200',
        'bg-yellow-200',
        'bg-emerald-200',
        'bg-teal-200',
        'bg-indigo-200',
        'bg-cyan-200',
        'hover:bg-rose-200',
        'hover:bg-red-200',
        'hover:bg-purple-200',
        'hover:bg-lime-200',
        'hover:bg-orange-200',
        'hover:bg-sky-200',
        'hover:bg-green-200',
        'hover:bg-blue-200',
        'hover:bg-amber-200',
        'hover:bg-fuchsia-200',
        'hover:bg-violet-200',
        'hover:bg-yellow-200',
        'hover:bg-emerald-200',
        'hover:bg-teal-200',
        'hover:bg-indigo-200',
        'hover:bg-cyan-200',
    ],
    theme: {
        extend: {
            fontFamily: {
                'emoji': ['OpenMoji', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            function extractColorVars(colorObj, colorGroup = '') {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];

                    let newVars;
                    if (typeof value === 'string') {
                        newVars = {
                            [`--color${colorGroup}-${colorKey}`]: value,
                            [`--rgb${colorGroup}-${colorKey}`]: hexToRgb(value),
                        };
                    } else {
                        newVars = extractColorVars(value, `-${colorKey}`);
                    }

                    return { ...vars, ...newVars };
                }, {});
            }

            addBase({
                ':root': extractColorVars(theme('colors')),
            });
        },
    ],
}

