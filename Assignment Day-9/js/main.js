
function randomGen(max, min)
{
	if(typeof min == undefined)
	{
		min = 0;
	}
	return (Math.round(Math.random() * (max-min)+min)).toString();
}
// #1
function randElement(arr){
	var arrLen = arr.length;
	var randPos = randomGen(arrLen, 0);

	return arr[randPos];
}

// #2
function rot13Unencrypted()
{

}

// #3
function rot13Encrypted()
{

}

// #4
function rotN_Unencrypted (argument) {
	// body...
}

// #5
// Create a javascript function that takes an array of student names 
// and returns an array of randomly selected pairs of students (array of arrays).
function studentPairs(studArray)
{

}

// #6
// Create a function that takes a string and returns a string with a dash (-) in between each 
// character using .split and .join.
function stringDashes(text)
{

}

// #7
// Create a function that takes a string and returns a string with a dash (-) in between each 
// character WITHOUT using .split or .join.
function dashesNoSplitJoin (argument) {
	
}

// #8
// Create a function that takes two string strings and returns a string with a dash (-) in between 
// each character without using .split or .join.
function concatDash(str1, str2)
{

}






