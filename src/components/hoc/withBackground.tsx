import React, { FC } from "react";

const withBackground = (BG: FC) => (Wrapped: FC) => (props: any) => {
  return (
    <>
      <BG />
      <Wrapped {...props} />
    </>
  );
};

export default withBackground;
