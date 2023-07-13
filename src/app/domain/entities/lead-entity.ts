import { ILeadEntity } from "../interfaces/lead-interface";

export class LeadEntity implements ILeadEntity {
    id?: string
    createdAt?: number
    completedAt?: number
    fullName: string
    phone: string
    document: string
    email: string
    state: string
    city: string
    amount: number
    applicationStatus: boolean
    processStatus: number //(pending, inProces, completed)
    campaign: string
    financiera: string

    constructor(data: ILeadEntity) {
        this.id = data.id
        this.createdAt = data.createdAt
        this.completedAt = data.completedAt
        this.fullName = data.fullName
        this.phone = data.phone
        this.document = data.document
        this.email = data.email
        this.state = data.state
        this.city = data.city
        this.amount = data.amount
        this.applicationStatus = data.applicationStatus
        this.processStatus = data.processStatus //(pending, inProces, completed)
        this.campaign = data.campaign
        this.financiera = data.financiera
    }
}
