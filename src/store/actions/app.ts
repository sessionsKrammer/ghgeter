import GithubApolloService from "services/githubApolloService";

type Action = setAppoloClient;

export enum ActionTypes {
  SET_APOLLO_CLIENT = "SET_APOLLO_CLIENT",
}

export interface setAppoloClient {
  type: ActionTypes.SET_APOLLO_CLIENT;
  payload: {
    client: GithubApolloService;
  };
}

export function setAppoloClient(client: GithubApolloService): setAppoloClient {
  return {
    type: ActionTypes.SET_APOLLO_CLIENT,
    payload: { client },
  };
}

export type { Action };
