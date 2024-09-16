function generateFibonacci(num) {
	if (num === 1) return 0;
	else if (num === 2) return 1;

	return generateFibonacci(num - 1) + generateFibonacci(num - 2);
}

function mergeSort(array) {
	let emptyArray = [];
	let leftArray = [];
	let rightArray = [];

	if (leftArray.length === 1 && rightArray.length === 1) {
		emptyArray.push(newArray);
		emptyArray.sort((a, b) => {
			return a - b;
		});
	}

	leftArray = array.slice(0, array.length / 2);
	rightArray = array.slice(array.length / 2);

	console.log(leftArray);
	console.log(rightArray);

	return
	// return (newArray = array.slice(newArray.length / 2));
}

console.log(mergeSort([0, 2, 3, 4, 6, 4, 7, 9, 1]));
