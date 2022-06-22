import classNames from '@/utils/classNames';

describe('Check if classes can be expanded', () => {
  test('Check if classes can be expanded when using ternary operators', () => {
    const tabIndex = 2;
    expect(classNames(tabIndex === 2 ? 'aaa' : 'bbb ccc')).toBe('aaa');
  });
});
