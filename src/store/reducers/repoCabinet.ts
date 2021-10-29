import { RepoCabinet } from "store/models/repoCabinet";

const initialState: RepoCabinet = {
  repo: null,
  loading: false,
};

const updateRepoCabinet = (
  repoCabinet: RepoCabinet,
  action: any
): RepoCabinet => {
  if (typeof repoCabinet === "undefined") return initialState;

  return repoCabinet;

  /*switch (action.type) {
    default:
      return repoCabinet;
  }*/
};

export { updateRepoCabinet };
