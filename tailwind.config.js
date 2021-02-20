const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const Layout = require('./styles/layout.style');
const Titles = require('./styles/titles.style');
const List = require('./styles/list.style');
const Project = require('./styles/project.style');
const Summary = require('./styles/summary.style');

module.exports = {
	purge: [
		'./index.html',
	],
	theme: {
		extend: {
			fontFamily: {
				'body': ['Poppins'],
			},
			colors: {
				primary: colors.indigo['400'],
			},
			screens: {
				'print': { 'raw': 'print' },
			},
		},
	},
	variants: {},
	plugins: [
		plugin(Layout),
		plugin(List),
		plugin(Titles),
		plugin(Project),
		plugin(Summary),
	],
}
