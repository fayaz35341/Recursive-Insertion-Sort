class Solution {
    insertionSort(nums) {
        function insertionSort_1(i){
            if (i===nums.length){
                return 
            }
            function insertionSort_2(j){
                if (j===0 || nums[j-1]<=nums[j]){
                    return 
                }
                [nums[j-1],nums[j]]=[nums[j],nums[j-1]]
                insertionSort_2(j-1)
            }
            insertionSort_2(i)
            insertionSort_1(i+1)
        }
        insertionSort_1(1)
        return nums
    }
}
let nums=[5, 1, 4, 2, 8]
console.log(new Solution().insertionSort(nums))
