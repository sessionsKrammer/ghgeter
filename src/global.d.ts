import GithubApolloService from "services/githubApolloService";

declare module "*.css";
declare module "*.scss";
declare module "*.json";
declare module "*.svg";

interface RepoItem {
  id: string;
  name: string;
  nameWithOwner: string;
  owner: {
    login: string;
  };
}

interface Repository {
  id: string;
  nameWithOwner: string;
  issues: {
    totalCount: number;
    edges: Issue[];
  };
}

interface Issue {
  node: {
    title: string;
    body: string;
    id: string;
    createdAt: string;
    comments: {
      totalCount: number;
    };
    author: {
      login: string;
      avatarUrl: string;
    };
    state: string;
  };
  cursor: string;
}

interface IssueComment {
  cursor: string;
  node: {
    id: string;
    body: string;
    createdAt: string;
    author: {
      avatarUrl: string;
      login: string;
    };
  };
}

interface RepoSearchState {
  searchInput: string;
  repoList: RepoItem[];
  selected: RepoItem | null;
  fetching: boolean;
  status: string;
}

interface RepoSearchView extends RepoSearchState {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRepoSelect: (repo: RepoItem) => void;
  onClear: () => void;
  setStatus: (status: string) => void;
  onFetchRepo: (id: string) => void;
}

// store

interface AppState {
  apolloClient: GithubApolloService;
}

export {
  Repository,
  Issue,
  IssueComment,
  RepoSearchState,
  RepoSearchView,
  AppState,
  RepoItem,
};
