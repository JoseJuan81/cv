module.exports = function({ addComponents, theme }) {
	const mainContainer = {
		'.main-container': {
			alignItems: 'flex-start',
			display: 'grid',
			gridTemplateColumns: '17rem 1fr',

			'@media print': {
				gridTemplateColumns: '12rem 1fr',
			}
		},

		'.side-bar': {
			backgroundColor: theme('colors.primary'),
			color: 'white',
			height: '100%',
			marginRight: '1rem',
			paddingLeft: '1rem',
			paddingRight: '1rem',
			paddingTop: '2rem',

			'@media print': {
				'-webkit-print-color-adjust': 'exact',
			}
		},
		
		'.main-content': {
			paddingLeft: '1rem',
			paddingRight: '1rem',
			paddingTop: '2rem',

			'@media print': {
				paddingTop: '1rem',
			}
		},
	}

	addComponents(mainContainer);
};
