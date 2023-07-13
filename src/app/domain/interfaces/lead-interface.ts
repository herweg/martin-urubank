export interface ILeadEntity {
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
}