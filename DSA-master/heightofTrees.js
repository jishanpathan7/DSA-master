

/* A Naive javascript Program for LIS Implementation */


	let max_ref; 
	function _lis(arr,n)
	{
		// base case
		if (n == 1)
			return 1;
		
		
		let res, max_ending_here = 1;
		
		for (let i = 1; i < n; i++)
		{
			res = _lis(arr, i);
			if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here)
				max_ending_here = res + 1;
		}
		
		if (max_ref < max_ending_here)
			max_ref = max_ending_here;
		
		
		return max_ending_here;
	}
	
	// The wrapper function for _lis()
	function lis(arr,n)
	{
		// The max variable holds the result
		max_ref = 1;
		
		// The function _lis() stores its result in max
		_lis( arr, n);
		
		// returns max
		return max_ref;
	}
	
	// driver program to test above functions
	let arr=[10, 22, 9, 33, 21, 50, 41, 60, 80 ]
	let n = arr.length;
	console.log("Length of lis is "
						+ lis(arr, n) + " ");
	
	// This code is contributed by avanitrachhadiya2155
	

