export default {
	"scopeName": "source.gyro",
	"patterns": [{
			name: "comment.line.double-slash.gyro",
			match: "//.*",
		},

		// Multi-Line comments
		{
			name: "comment.block.gyro",
			begin: "/\\*",
			end: "\\*/",
			patterns: [{
				name: "comment.block.gyro",
				match: "\\*",
			}, ],
		},

		// Control Keywords
		{
			name: "keyword.control.gyro",
			match: "\\b(?:if|else|while|loop|for|match|return|continue|break)\\b",
		},

		// Assignment keywords
		{
			name: "storage.type.gyro",
			match: "\\b(?:let|const|mut)\\b",
		},

		// Function
		{
			"name": "keyword.function.gyro",
			"match": "\\bfn\\b",
		},

		// Function name
		{
			"name": "entity.name.function.gyro",
			"match": "\\b\\w+\\b(?=\\()",
		},
		{
			"name": "punctuation.definition.parameters.gyro",
			"match": "\\(|\\)",
		},
		{
			"name": "storage.type.gyro",
			"match": "\\blet\\b|\\bmut\\b",
		},
		{
			"name": "punctuation.definition.array.gyro",
			"match": "\\[|\\]",
		},
		{
			"name": "support.type.gyro",
			"match": "\\bfn\\b",
		},
		{
			"name": "variable.parameter.function.gyro",
			"match": "\\b\\w+\\b(?=:)|(?<=,\\s*)\\b\\w+\\b",
		},
		{
			"name": "punctuation.separator.gyro",
			"match": ",",
		},
		{
			"name": "punctuation.definition.block.gyro",
			"begin": "{",
			"end": "}",
			"patterns": [{
					"name": "variable.other.gyro",
					"match": "\\b\\w+\\b(?=\\s*=)",
				},
				{
					"name": "constant.numeric.gyro",
					"match": "\\b\\d+\\b",
				},
				{
					"name": "support.function.builtin.gyro",
					"match": "\\bprint\\b",
				},
				{
					"name": "keyword.operator.gyro",
					"match": "\\+|\\*",
				},
				{
					"name": "variable.other.gyro",
					"match": "\\b\\w+\\b",
				},
			],
		},
		{
			"name": "constant.numeric.gyro",
			"match": "\\b\\d+\\b",
		},
		{
			"name": "support.function.builtin.gyro",
			"match": "\\bprint\\b",
		},
		{
			"name": "punctuation.separator.function-call.gyro",
			"match": "\\(|\\)",
		},
		{
			"name": "punctuation.definition.string.begin.gyro",
			"match": "\"",
		},
		{
			"name": "punctuation.definition.string.end.gyro",
			"match": "\"",
		},
		{
			"name": "variable.other.gyro",
			"match": "\\b\\w+\\b(?=\\s*=)",
		},
		{
			"name": "support.function.builtin.gyro",
			"match": "\\bmap\\b",
		},
		{
			"name": "punctuation.definition.function.gyro",
			"match": "\\b\\:\\:\\b",
		},
		{
			"name": "keyword.operator.gyro",
			"match": "\\*",
		},
	]
}