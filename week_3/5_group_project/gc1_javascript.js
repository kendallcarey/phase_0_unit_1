/*Test 1

Define a function called "sum" that takes an argument "arr"
	SET total to zero
	FOR each number in arr
		ADD the current element to total
	END
	PRINT total
END

Test 2

Define a function called "mean" that takes an argument "arr"
	CALL sum function
	SET answer to total / number of arguments in "arr"
	PRINT answer
END

Test 3

Define a function called "median" that takes an argument "arr"
	Sort the elements in arr
	IF the length of arr is odd
		SET answer to the element in arr at the index of half the length of the array rounded down.
	ELSE IF the length of arr is even
		SET the answer to the average of the element in arr at the index of half the length of the array rounded down and the element previous to that element.
	END
	PRINT answer
END
*/

//Test 1
var total=0

var sum=function(arr) {
	for(i=0, i<arr.length, i++) {
		total+=arr[i];
		console.log(i);
	}
}

//Test 2
	
var mean=function(arr) {
	total=sum(arr);
	answer=total/arr.length;
	console.log(answer);
}

//Test 3

var median=function(arr) {
	index.sort;
	if(arr[i]%2===1){
		answer=(arr.length/2).floor
		console.log(answer)
	} else {
		answer=((arr.length/2)+1).floor
		console.log(answer)
	}
}


