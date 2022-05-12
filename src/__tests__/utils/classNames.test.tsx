import classNames from '@/utils/classNames';

describe('Check if classes can be expanded', () => {
  test('Check if classes can be expanded when using ternary operators', () => {
    const tabIndex = 1;
    expect(classNames(tabIndex === 0 ? 'aaa' : 'bbb', 'ccc')).toBe('bbb ccc');
  });
});
