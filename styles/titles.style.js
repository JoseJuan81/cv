module.exports = function({ addComponents, theme }) {

    const titles = {
        '.section-title': {
            color: theme('colors.primary'),
            fontWeight: '700',
            marginBottom: '1.25rem',
            marginTop: '2rem',

            '@media print': {
                marginBottom: '1rem',
                marginTop: '1rem',
            }
        },

        '.job-position': {
            fontWeight: '700',
            marginTop: '0.75rem',
            marginBottom: '0.25rem',

            '@media print': {
                color: theme('colors.primary'),
            },

            '&-title': {
                color: theme('colors.gray.400'),

                '@media print': {
                    color: theme('colors.gray.600'),
                },
            },

            '&-description': {
                fontSize: '0.9rem',
                fontWeight: '300',
                textAlign: 'justify',
                
                '@media print': {
                    fontSize: '0.65rem',
                }
            }
        },

    };

    addComponents(titles);
};
