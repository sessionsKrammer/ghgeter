import { assert } from "console";
import React, { useState, FC } from "react";

const withInputFetch = (Wrapped: FC<any>) => (props: any) => {
  const a = 1;

  const b = 2;

  return <Wrapped {...props} />;
};

export default withInputFetch;
