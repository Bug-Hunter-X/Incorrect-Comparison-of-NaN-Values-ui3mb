# Incorrect Comparison of NaN Values

This repository demonstrates a common bug in JavaScript/TypeScript related to comparing NaN (Not a Number) values.

## Bug Description
The `compare` function attempts to compare two numbers and return 0 if they are equal, 1 if the first is greater, and -1 otherwise. However, it incorrectly handles NaN values.  NaN is not equal to itself or any other value (including NaN), so any comparison involving NaN should always return false. The current implementation incorrectly returns 1 when comparing NaN to NaN.

## Bug Reproduction
1. Clone this repository.
2. Open `compare.ts`.
3. Run the code. You'll see that `compare(NaN, NaN)` outputs 1, which is incorrect.

## Solution
The solution involves using the `Number.isNaN()` function to explicitly check if a value is NaN before performing any comparison. The improved code can be found in `compareSolution.ts`

## Lessons Learned
- Always handle NaN values explicitly using `Number.isNaN()` when making comparisons to avoid unexpected behavior. Direct comparisons with NaN will always result in false, even if comparing NaN with NaN.