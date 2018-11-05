describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3, 1, 2])).toEqual([[3, 1], [2]]);
    //expect(window.swap.calls.count()).toEqual(2);
  });
});

describe('Merge Array function', function() {
  it('is able to merge 2 sorted arrays into one function', function() {
    expect(merge([[2], [1, 3, 4, 5]])).toEqual([1, 2, 3, 4, 5]);
    //expect(window.swap.calls.count()).toEqual(2);
  });

  it('is able to merge 2 sorted arrays into one function', function() {
    expect(merge([[2, 6, 7, 8], [1, 3, 4, 5]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
    //expect(window.swap.calls.count()).toEqual(2);
  });
});
