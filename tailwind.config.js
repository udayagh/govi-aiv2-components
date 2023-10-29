/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        color: {
          DEFAULT: 'var(--g-neutrals-1000)',
          subtle: 'var(--g-neutrals-800)',
          subtlest: 'var(--g-neutrals-700)',
          disabled: 'var(--g-neutrals-alpha-400A)',
          inverse: 'var(--g-neutrals-0)',
          selected: 'var(--g-blue-700)',
          brand: 'var(--g-brand-700)',
          information: 'var(--g-blue-700)',
          danger: 'var(--g-red-700)',
          warning: 'var(--g-yellow-700)',
          success: 'var(--g-success-700)'
        }
      },
      backgroundColor: {
        color: {
          input: 'var(--g-neutrals-0)',
          disabled: 'var(--g-neutrals-alpha-100A)',
          neutral: {
            DEFAULT: 'var(--g-neutrals-alpha-200A)',
            hovered: 'var(--g-neutrals-alpha-300A)',
            pressed: 'var(--g-neutrals-alpha-400A)',
            bold: {
              DEFAULT: 'var(--g-neutrals-700)',
              hovered: 'var(--g-neutrals-800)',
              pressed: 'var(--g-neutrals-900)'
            },
            subtle: {
              DEFAULT: 'transparent',
              hovered: 'var(--g-neutrals-alpha-200A)',
              pressed: 'var(--g-neutrals-alpha-300A)'
            }
          },
          selected: {
            DEFAULT: 'var(--g-blue-50)',
            hovered: 'var(--g-blue-100)',
            pressed: 'var(--g-blue-200)',
            bold: {
              DEFAULT: 'var(--g-blue-700)',
              hovered: 'var()--g-blue-800',
              pressed: 'var(--g-blue-900)'
            }
          },
          danger: {
            DEFAULT: 'var(--g-red-50)',
            hovered: 'var(--g-red-100)',
            pressed: 'var(--g-red-200)',
            bold: {
              DEFAULT: 'var(--g-red-600)',
              hovered: 'var(--g-red-700)',
              pressed: 'var(--g-red-800)'
            }
          },
          success: {
            DEFAULT: 'var(--g-green-50)',
            hovered: 'var(--g-green-100)',
            pressed: 'var(--g-green-200)',
            bold: {
              DEFAULT: 'var(--g-green-600)',
              hovered: 'var(--g-green-700)',
              pressed: 'var(--g-green-800)'
            }
          },
          warning: {
            DEFAULT: 'var(--g-yellow-50)',
            hovered: 'var(--g-yellow-100)',
            pressed: 'var(--g-yellow-200)',
            bold: {
              DEFAULT: 'var(--g-yellow-300)',
              hovered: 'var(--g-yellow-400)',
              pressed: 'var(--g-yellow-500)'
            }
          }
        }
      },
      borderColor: {
        color: {
          DEFAULT: 'var(--g-neutral-alpha-300A)',
          hover: 'var(--g-blue-600)',
          bold: 'var(--g-neutrals-500)',
          input: 'var(--g-neutrals-alpha-300A)',
          disabled: 'var(--g-neutrals-alpha-200A)',
          focused: 'var(--g-blue-400)',
          selected: 'var(--g-blue-600)',
          brand: 'var(--g-brand-600)',
          danger: 'var(--g-red-500)',
          warning: 'var(--g-yellow-500)',
          information: 'var(--g-blue-500)',
          success: 'var(--g-green-500)'
        }
      },
      colors: {
        link: {
          DEFAULT: 'var(--g-blue-600)',
          pressed: 'var(--g-blue-700)'
        },
        surface: 'var(--g-neutrals-0)',
        overlay: 'var(--g-neutrals-0)',
        sunken: 'var(--g-neutrals-50)'
      },
      padding: {
          'space-0': '0rem',
          'space-50': '0.125rem',
          'space-100': '0.25rem',
          'space-150': '0.375rem',
          'space-200': '0.5rem',
          'space-300': '0.75rem',
          'space-400': '1rem',
          'space-500': '1.25rem',
          'space-600': '1.5rem',
          'space-800': '2rem',
          'space-1000': '2.5rem',
          'space-1200': '3rem',
          'space-1600': '4rem',
          'space-2000': '5rem'
      },
      borderRadius: {
        0: '0rem',
        50: '0.125rem',
        100: '0.25rem',
        150: '0.375rem',
        200: '0.5rem',
        300: '0.75rem'
      },
      boxShadow: {
        'shadow-100': '0px 1px 2px 0px rgba(27, 36, 44, 0.12)',
        'shadow-200': '0px 2px 8px -1px rgba(27, 36, 44, 0.08), 0px 2px 2px -1px rgba(27, 36, 44, 0.04)',
        'shadow-300': '0px 8px 12px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.33)',
        'shadow-400': '0px 16px 24px -6px rgba(27, 36, 44, 0.16), 0px 2px 2px -1px rgba(27, 36, 44, 0.04)'
      }
    }
  },
  plugins: []
}
