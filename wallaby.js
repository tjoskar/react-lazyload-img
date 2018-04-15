module.exports = () => {
	return {
		files: ['tsconfig.json', 'src/**/*.ts*', '!src/**/*.test.ts*'],
		tests: ['src/**/*.test.ts*'],
		env: {
			type: 'node',
			runner: 'node'
		},
		testFramework: 'jest'
	}
}
