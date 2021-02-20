module.exports = function({ addComponents, theme }) {
	const ul = {
		'.project-container': {
            marginBottom: '1rem',
        },
        
        '.project-title': {
            fontWeight: '700',
            fontSize: '1.25rem',
        },

        '.project-description-container': {
            paddingLeft: '0.5rem',
        },

        '.project-goals-title': {
            color: theme('colors.primary'),
            marginTop: '1rem',
        }
	};

	addComponents(ul);
};
