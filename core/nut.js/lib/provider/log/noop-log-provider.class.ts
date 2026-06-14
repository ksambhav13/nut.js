import { LogProviderInterface } from "@kumar-sambhav/provider-interfaces";

export class NoopLogProvider implements LogProviderInterface {
  public trace(_: string, __?: {}) {
  }

  public debug(_: string, __?: {}) {
  }

  public info(_: string, __?: {}) {
  }

  public warn(_: string, __?: {}) {
  }

  public error(_: Error, __?: {}) {
  }
}
