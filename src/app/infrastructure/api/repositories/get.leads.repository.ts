import { Observable } from "rxjs";
import { LeadsService } from "../../services/leads.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponse } from "src/app/domain/interfaces/response-interface";
import { LeadEntity } from "src/app/domain/entities/lead-entity";

@Injectable()
export class GetLeadsRepository extends LeadsService {

    url: string = "http://localhost:3000/api/clients/findall"

    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
            'Access-Control-Allow-Origin': '*'
        })
    }

    constructor(private http: HttpClient) {
        super();
    }

    override getLeads(): Observable<IResponse<LeadEntity[]>> {
        return this.http.get<IResponse<LeadEntity[]>>(this.url, this.httpOptions)
    }

}
// export class Person {
//     id: string
//     phone: string
//     status: string
//     createdAt: Date | string
//     completedAt: Date | string | undefined

//     constructor(id: string, phone: string, status: string, createdAt: string, completedAt: string) {
//         this.id = id
//         this.phone = phone
//         this.status = status
//         this.createdAt = createdAt
//         this.completedAt = completedAt
//     }
// }

// export class PeopleList {
//     people: Person[]

//     constructor() {
//         const peopleData = [
//             {
//                 id: '1',
//                 phone: '59891805883',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T13:43:00.000Z",
//                 completedAt: "2022-07-19T13:44:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59899086351',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:30:00.000Z",
//                 completedAt: "2022-08-24T16:31:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59897121331',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T14:58:00.000Z",
//                 completedAt: "2022-08-24T15:04:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59895504897',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:07:00.000Z",
//                 completedAt: "2022-08-24T15:14:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892740746',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:47:00.000Z",
//                 completedAt: "2022-08-24T15:48:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898459004',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:48:00.000Z",
//                 completedAt: "2022-08-24T15:50:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898674247',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-28T12:11:00.000Z",
//                 completedAt: "2022-06-28T12:16:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59895980773',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T14:39:00.000Z",
//                 completedAt: "2022-07-19T14:40:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898447159',
//                 status: "Aprobadas",
//                 createdAt: "2022-07-19T13:53:00.000Z",
//                 completedAt: "2022-07-19T14:00:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896804242',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:26:00.000Z",
//                 completedAt: "2022-08-24T15:27:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59899201536',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:45:00.000Z",
//                 completedAt: "2022-08-24T15:46:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898273876',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:53:00.000Z",
//                 completedAt: "2022-08-24T15:54:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892623808',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:05:00.000Z",
//                 completedAt: "2022-08-24T16:06:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898928443',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T14:07:00.000Z",
//                 completedAt: "2022-07-19T14:18:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59899428266',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-05T12:27:00.000Z",
//                 completedAt: "2022-08-05T12:35:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896033144',
//                 status: "Aprobadas",
//                 createdAt: "2022-08-22T20:08:00.000Z",
//                 completedAt: "2022-08-22T20:15:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892721912',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:07:00.000Z",
//                 completedAt: "2022-08-24T16:09:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59897904064',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:14:00.000Z",
//                 completedAt: "2022-08-24T16:16:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59895298539',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:48:00.000Z",
//                 completedAt: "2022-08-24T16:49:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892847878',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T15:11:00.000Z",
//                 completedAt: "2022-07-19T15:12:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '5216361306676',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T15:14:00.000Z",
//                 completedAt: "2022-07-19T15:15:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896248326',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-29T13:01:00.000Z",
//                 completedAt: "2022-06-29T13:11:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896512152',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:49:00.000Z",
//                 completedAt: "2022-08-24T16:50:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896351419',
//                 status: "No Finalizó",
//                 createdAt: "2022-08-23T14:05:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59898928443',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T16:54:00.000Z",
//                 completedAt: "2022-08-24T16:55:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892682528',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-29T14:48:00.000Z",
//                 completedAt: "2022-06-29T14:54:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896107328',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-29T14:38:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59896623164',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T15:55:00.000Z",
//                 completedAt: "2022-07-19T15:55:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59891712684',
//                 status: "Aprobadas",
//                 createdAt: "2022-08-22T11:23:00.000Z",
//                 completedAt: "2022-08-22T11:58:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898161984',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-22T16:07:00.000Z",
//                 completedAt: "2022-08-22T17:34:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59895118284',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-05T12:57:00.000Z",
//                 completedAt: "2022-08-05T12:59:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898043609',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T16:03:00.000Z",
//                 completedAt: "2022-07-19T16:03:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59899560188',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T16:11:00.000Z",
//                 completedAt: "2022-07-19T16:12:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59896940544',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-22T15:44:00.000Z",
//                 completedAt: "2022-08-22T16:07:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59897577288',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T15:36:00.000Z",
//                 completedAt: "2022-08-24T15:44:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59891291450',
//                 status: "No Finalizó",
//                 createdAt: "2022-08-24T16:04:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59898049610',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-29T15:59:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59899138710',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-29T16:33:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59894108481',
//                 status: "No Finalizó",
//                 createdAt: "2022-08-23T12:30:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59899818708',
//                 status: "Aprobadas",
//                 createdAt: "2022-08-23T15:32:00.000Z",
//                 completedAt: "2022-08-23T15:37:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59895266188',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-28T11:15:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59894465664',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-25T12:08:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59898753081',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-05T14:05:00.000Z",
//                 completedAt: "2022-08-05T14:06:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59894123699',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T19:46:00.000Z",
//                 completedAt: "2022-07-19T19:47:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892072458',
//                 status: "Rechazadas",
//                 createdAt: "2022-07-19T19:57:00.000Z",
//                 completedAt: "2022-07-19T19:58:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59892978243',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T17:31:00.000Z",
//                 completedAt: "2022-08-24T17:38:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59898105627',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T17:45:00.000Z",
//                 completedAt: "2022-08-24T17:46:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59891353826',
//                 status: "Rechazadas",
//                 createdAt: "2022-08-24T17:47:00.000Z",
//                 completedAt: "2022-08-24T17:48:00.000Z"
//             },
//             {
//                 id: '1',
//                 phone: '59893342899',
//                 status: "No Finalizó",
//                 createdAt: "2022-07-17T0:17:00.000Z",
//                 completedAt: ""
//             },
//             {
//                 id: '1',
//                 phone: '59892436026',
//                 status: "Rechazadas",
//                 createdAt: "2022-06-28T10:45:00.000Z",
//                 completedAt: "2022-06-29 14:32:44"
//             }

//         ]

//         this.people = peopleData.map(personData => new Person(personData.id, personData.phone, personData.status, personData.createdAt, personData.completedAt))
//     }
// }