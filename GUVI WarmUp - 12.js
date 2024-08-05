/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	const totalseconds = num1 * 60;
	const totalframes = totalseconds * num2;
	return totalframes;
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/