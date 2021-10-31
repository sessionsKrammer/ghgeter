import { AppState } from "global";
import GithubApolloService from "services/githubApolloService";
import { Action, ActionTypes } from "store/actions/app";

const initialState: AppState = {
  apolloClient: new GithubApolloService(),
};

const updateApp = (app: AppState, action: Action): AppState => {
  if (typeof app === "undefined") return initialState;

  switch (action.type) {
    case ActionTypes.SET_APOLLO_CLIENT: {
      return {
        ...app,
        apolloClient: action.payload.client,
      };
    }

    default:
      return app;
  }
};

export { updateApp };
export type { AppState };
