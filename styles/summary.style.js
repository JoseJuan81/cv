module.exports = function({ addComponents }) {
	const summary = {
		'.summary': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            textAlign: 'justify',
            fontSize: '0.875rem',
            
            '@media print': {
                fontSize: '0.6rem',
                fontWeight: '300',
            }
		},
	}

	addComponents(summary);
};
