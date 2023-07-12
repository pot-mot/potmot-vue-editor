<script setup lang="ts">
import {getLeadingMarks} from "../../utils/editor/textUtils";

const marksTestCases = new Map<string, string>([
	["> text", "> "],
	["- text", "- "],
	["* text", "* "],
	["+ text", "+ "],

	[">  \t text", ">  \t "],
	["- \t \t text", "- \t \t "],
	["* \t \t text", "* \t \t "],

	["\t >  \t text", "\t >  \t "],
	["\t - \t \t text", "\t - \t \t "],
	[" \t* \ttext", " \t* \t"],
	["\t+ text", "\t+ "],
	["\t+test", "\t"],

	["\t +\t - test", "\t "],


	["1. text", "1. "],
	["\t1. \ttext", "\t1. \t"],
	["\t1223123. \ttext", "\t1223123. \t"],
	["\t6.text", "\t"],

	["\t1. \t> \t+ \t- \t* \ttext", "\t1. \t> \t+ \t- \t* \t"],
	["\t1. \t> \t+ \t- \t*\ttext", "\t1. \t> \t+ \t- \t"],
	["> > text", "> > "],
	["\t  21. text\t> \t", "\t  21. "],
])

marksTestCases.forEach((value, key) => {
	const result = getLeadingMarks(key, 0)
	const judge = result == value
	if (!judge) {
		console.log(`result: '${result}' target: '${value}'`)
	}
})
</script>