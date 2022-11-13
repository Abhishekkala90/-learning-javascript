const isIdealPermutation = (nums) => {
    for (let i = 0; i < nums.length; ++i) {
      const tmp = nums[i] - i;
      if (tmp > 1 || tmp < -1) return false;
    }
    return true;
  };
let arr=[1,2,0];
  console.log(isIdealPermutation(arr));