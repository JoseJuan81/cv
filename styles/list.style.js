module.exports = function({ addComponents }) {
	const ul = {
		'.list-container': {
            paddingLeft: '2rem',
            
            'li': {
                listStyle: 'disc',
                marginBottom: '0.5rem',
                marginTop: '0.5rem',
            }
		},
	}

	addComponents(ul);
};
