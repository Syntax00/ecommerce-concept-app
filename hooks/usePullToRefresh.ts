import { useEffect, useState } from "react";

const usePullToRefresh = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return [refresh, setRefresh];
};

export default usePullToRefresh;
