import React from "react";

import CustomText from "../UIElements/CustomText";

import useServerCall from "../../hooks/useServerCall";

const WithAPIAccess = ({
  promiseFunc,
  OnSuccessComponent,
  retrieveSuccessData,
  deps = [],
}: {
  promiseFunc: () => void;
  OnSuccessComponent: any;
  retrieveSuccessData?: any;
  deps: any[];
}) => {
  const { data, error, loading } = useServerCall(
    promiseFunc,
    deps,
    retrieveSuccessData
  );
  if (loading) return <CustomText>Loading ...</CustomText>;
  if (error) return <CustomText>Error ...</CustomText>;

  return <OnSuccessComponent data={data} />;
};

export default WithAPIAccess;
