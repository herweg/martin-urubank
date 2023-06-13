import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LeadEntity } from "src/app/domain/entities/lead-entity";
import { IResponse } from "src/app/domain/interfaces/response-interface";

@Injectable({
    providedIn:'root'
  })
export abstract class LeadsService {
    abstract getLeads(): Observable<IResponse<LeadEntity[]>>
}