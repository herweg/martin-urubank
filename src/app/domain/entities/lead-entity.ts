import { ILeadEntity } from "../interfaces/lead-interface";

export class LeadEntity implements ILeadEntity {
    id?: string
    typeClient: number
    fullName: string
    status: number
    phone: string
    state: string
    document: string
    createdAt?: number | undefined
    completedAt?: number | undefined

    constructor(data: ILeadEntity) {
        this.id = data.id
        this.typeClient = data.typeClient
        this.fullName = data.fullName
        this.status = data.status
        this.phone = data.phone
        this.state = data.state
        this.document = data.document
        this.createdAt = data.createdAt
        this.completedAt = data.completedAt
    }
}
