import React from "react";

import CustomText from "../UIElements/CustomText";

import useServerCall from "../../hooks/useServerCall";

const WithAPIAccess = ({
  promiseFunc,
  OnSuccessComponent,
  retrieveSuccessData,
}: {
  promiseFunc: () => void;
  OnSuccessComponent: any;
  retrieveSuccessData?: any;
}) => {
  const { data, error, loading } = useServerCall(promiseFunc, [], retrieveSuccessData);
  if (loading) return <CustomText>Loading ...</CustomText>;
  if (error) return <CustomText>Error ...</CustomText>;

  return <OnSuccessComponent data={data} />;
};

export default WithAPIAccess;
