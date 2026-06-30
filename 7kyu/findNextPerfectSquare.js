/*

Find the next perfect square!
151333090% of 13,93665,909 of 187,379kphurley6 Issues Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square

*/

function findNextSquare(sq) {
  const root = Math.sqrt(sq);

  if (!Number.isInteger(root)) {
    return -1;
  }

  return (root + 1) ** 2;
}