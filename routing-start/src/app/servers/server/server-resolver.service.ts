import { Observable } from "rxjs";
import { Resolve, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { ServersService } from "../servers.service";

interface Server {
  id: number;
  name: string;
  status: string;
}

export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params["id"]);
  }
}
