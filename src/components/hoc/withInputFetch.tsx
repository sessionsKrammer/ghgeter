import React, { useState, FC } from "react";

const withInputFetch = (Wrapped: FC<any>) => (props: any) => {
  return <Wrapped {...props} />;
};

export default withInputFetch;
