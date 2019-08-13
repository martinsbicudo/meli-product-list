import { renderHook, act } from '@testing-library/react-hooks';
import useLoadingStatus from '.';

describe('Hooks - useLoadingStatus()', () => {
  test('Should return "false" for "loading"', () => {
    const { result } = renderHook(() => useLoadingStatus());

    expect(result.current[0].loading).toBe(false);
  });

  test('Should change "loading" value for "true"', () => {
    const { result } = renderHook(() => useLoadingStatus());

    act(() => {
      result.current[1].setLoading(true);
    });

    expect(result.current[0].loading).toBe(true);
  });

  test('Should return "false" for "success" and "error" status', () => {
    const { result } = renderHook(() => useLoadingStatus());

    expect(result.current[0].status.success).toBe(false);
    expect(result.current[0].status.error).toBe(false);
  });

  test('Should change "success" status for "true"', () => {
    const { result } = renderHook(() => useLoadingStatus());

    act(() => {
      result.current[1].setStatus((previousStatus) => ({
        ...previousStatus,
        success: true,
      }));
    });

    expect(result.current[0].status.success).toBe(true);
  });

  test('Should change "error" status for "true"', () => {
    const { result } = renderHook(() => useLoadingStatus());

    act(() => {
      result.current[1].setStatus((previousStatus) => ({
        ...previousStatus,
        error: true,
      }));
    });

    expect(result.current[0].status.error).toBe(true);
  });
});
