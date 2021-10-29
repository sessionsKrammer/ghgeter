import { Repository } from "global";

export interface RepoCabinet {
  repo: Repository | null;
  loading: boolean;
}
