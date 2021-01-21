import { useEffect, useReducer } from "react";

function useServerCall(
  resolvePromise: () => void,
  deps: any[],
  get: (result: any) => void = (_) => _
) {
  const [state, setState] = useReducer(
    (base: any, point: any) => ({ ...base, ...point }),
    {
      loading: true,
      error: null,
      data: null,
    }
  );
  
  useEffect(() => {
    (async () => {
      try {
        setState({ loading: true, error: null, data: null });

        const result = await resolvePromise();

        get(result);

        setState({ data: result, loading: false });
      } catch (error) {
        setState({
          error,
          loading: false,
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  
  return state;
}

export default useServerCall;
