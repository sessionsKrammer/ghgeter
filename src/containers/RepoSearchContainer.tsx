import React, { useState, FC } from "react";
import { connect } from "react-redux";

import { compose } from "utils";

import { RepoSearchState, RepoItem, RepoSearchView } from "global";

const RepoSearchContainer = (Wrapped: FC<RepoSearchView>) =>
  compose(connect(mapStateToProps, mapDispatchToProps))(() => {
    const [state, setState] = useState<RepoSearchState>({
      searchInput: "",
      repoList: [],
      selected: null,
      fetching: false,
      status: "",
    });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      return setState({ ...state, searchInput: e.target.value });
    };

    const onRepoSelect = (repo: RepoItem) =>
      setState({ ...state, selected: repo, searchInput: "", repoList: [] });

    const onClear = () => setState({ ...state, selected: null });

    const setStatus = (status: string) => setState({ ...state, status });

    const propsToNext: RepoSearchView = {
      ...state,
      onChangeInput,
      onRepoSelect,
      onClear,
      setStatus,
      onFetchRepo: (id: string) => {},
    };

    return <Wrapped {...propsToNext} />;
  });

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default RepoSearchContainer;

//export type { SelectedRepo, RepoSearchComponent };
