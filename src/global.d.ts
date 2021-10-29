declare module "*.css";
declare module "*.scss";
declare module "*.json";
declare module "*.svg";

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

export { Repository, Issue, IssueComment };
