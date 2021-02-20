import React from "react";

import CustomText from "../UIElements/CustomText";
import Loader from "../UIElements/Loader";

import useServerCall from "../../hooks/useServerCall";

const WithAPIAccess = ({
  promiseFunc,
  OnSuccessComponent,
  retrieveSuccessData,
  deps = [],
  idleMessage = "",
}: {
  promiseFunc: () => void;
  OnSuccessComponent: any;
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
  if (error) return <CustomText>Error ...</CustomText>;

  return <OnSuccessComponent data={data} />;
};

export default WithAPIAccess;
