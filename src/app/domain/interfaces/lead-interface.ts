export interface ILeadEntity {
    id?: string
    typeClient: number
    fullName: string
    status: number
    phone: string
    state: string
    document: string
    createdAt?: number
    completedAt?: number
}