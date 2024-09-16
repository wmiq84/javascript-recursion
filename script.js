function generateFibonacci(num) {
	if (num === 1) return 0;
	else if (num === 2) return 1;

	return generateFibonacci(num - 1) + generateFibonacci(num - 2);
}

console.log(generateFibonacci(13));

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	const midpoint = Math.floor(array.length / 2);
	const leftArray = array.slice(0, midpoint);
	const rightArray = array.slice(midpoint);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
	let resultArray = [],
		leftIndex = 0,
		rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

console.log(mergeSort([0, 2, 3, 4, 6, 4, 7, 9, 1]));
