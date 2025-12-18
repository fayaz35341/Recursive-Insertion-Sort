class Solution:
    def insertionSort(self, nums):
        def insertionSort_R(i):
            if i== len(nums):
                return 
            def insertionSort_R2(j):
                if j==0 or nums[j-1]<=nums[j]:
                    return
                nums[j-1],nums[j]= nums[j], nums[j-1]
                insertionSort_R2(j-1)
            insertionSort_R2(i)
            insertionSort_R(i+1)

        insertionSort_R(1)
        return nums
nums=[2,55,0,6,31,9]
print(Solution().insertionSort(nums))
