import React from "react";

import CustomText from "../UIElements/CustomText";
import Loader from "../UIElements/Loader";

import useServerCall from "../../hooks/useServerCall";

const WithAPIAccess = ({
  promiseFunc,
  OnSuccessComponent,
  OnFailureComponent,
  retrieveSuccessData,
  deps = [],
  idleMessage = "",
}: {
  promiseFunc: () => void;
  OnSuccessComponent: any;
  OnFailureComponent?: any;
  retrieveSuccessData?: any;
  deps: any[];
  idleMessage?: string;
}) => {
  const { data, error, loading } = useServerCall(
    promiseFunc,
    deps,
    retrieveSuccessData
  );

  if (loading) return <Loader secondary message={idleMessage} />;
  if (error)
    return (
      <OnFailureComponent error={error} /> || (
        <CustomText>{error}</CustomText>
      )
    );

  return <OnSuccessComponent data={data} />;
};

export default WithAPIAccess;
