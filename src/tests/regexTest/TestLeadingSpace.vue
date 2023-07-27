<script setup lang="ts">
import {getLeadingMarks} from "../../utils/markdown/break";

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

	["\t +\t - test", "\t +\t - "],


	["1. text", "2. "],
	["\t1. \ttext", "\t2. \t"],
	["\t1223123. \ttext", "\t1223124. \t"],
	["\t6.text", "\t"],

	["\t1. \t> \t+ \t- \t* \ttext", "\t2. \t> \t+ \t- \t* \t"],
	["\t1. \t> \t+  2. \t- \t*\ttext", "\t2. \t> \t+  3. \t- \t*\t"],
	["> > text", "> > "],
	["\t  21. text\t> \t", "\t  22. "],
]);

marksTestCases.forEach((value, key) => {
	const result = getLeadingMarks(key, key.length);
	const judge = result == value
	if (!judge) {
		console.log(`value: '${key}' target: '${value}' result: '${result}'`);
	}
});
</script>