describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('returns an already sorted small array', function() {
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('sorts a small array', function() {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(window.swap.calls.count()).toEqual(2);
  });

  it('sorts a slightly bigger array', function() {
    expect(bubbleSort([1, 8, 5, 2, 4, 9, 3, 6, 7])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(window.swap.calls.count()).toEqual(15);
  });
  it('sorts an array with 2 digit numbers', function() {
    expect(bubbleSort([1, 11, 8, 5, 12, 2, 4, 10, 9, 3, 6, 7])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ]);
    expect(window.swap.calls.count()).toEqual(48);
  });
});
