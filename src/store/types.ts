import ILoginModule from "./login/types";

export default interface IRootStore {
  name: string;
}

interface IRootWithModules {
  loginModule: ILoginModule;
}

export type IStoreTypes = IRootStore & IRootWithModules;
