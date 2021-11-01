import React from "react";
import RepoSearchContainer from "containers/RepoSearchContainer";
import FetchStatus from "components/helpers/fetchStatus";

import { RepoSearchView, RepoItem } from "global";

import "./RepoSearch.scss";

const RepoSearch = ({
  searchInput,
  repoList,
  selected,
  fetching,
  status,
  onChangeInput,
  onRepoSelect,
  onClear,
  setStatus,
  onFetchRepo,
}: RepoSearchView) => {
  return (
    <div className="RepoSearchWrapper">
      <div className="main">
        <div className="input-wrapper">
          <label>Pick a repository...</label>
          <div className="selectedInput">
            <input
              type="text"
              value={selected ? selected.nameWithOwner : searchInput}
              {...(!selected && { onChange: onChangeInput })}
            />
            <i
              className="fas fa-times"
              onClick={onClear}
              style={{
                visibility: selected && selected.id ? "visible" : "hidden",
              }}
            ></i>
          </div>
          <ul
            style={{
              visibility:
                repoList.length > 0 || fetching || status
                  ? "visible"
                  : "hidden",
            }}
          >
            <FetchStatus
              onReset={() => setStatus!("")}
              fetching={fetching!}
              status={status!}
              render={() => (
                <>
                  {repoList.length > 0 &&
                    repoList.map((node: RepoItem, i: number) => (
                      <li key={i} onClick={() => onRepoSelect(node)}>
                        <span className="repo">{node.name}</span>{" "}
                        <span className="owner">{node.owner.login}</span>
                      </li>
                    ))}
                </>
              )}
            />
          </ul>
          <button
            className="btn btn--medium"
            style={{ display: selected ? "inline-block" : "none" }}
            {...(selected && { onClick: () => onFetchRepo(selected.id) })}
          >
            Select Repository
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoSearchContainer(RepoSearch);
