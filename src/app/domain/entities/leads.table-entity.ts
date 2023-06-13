import { LeadEntity } from './lead-entity';
export class LeadsTableEntity {
    leadEntities: LeadEntity[];

    constructor(leadEntities: LeadEntity[] = []) {
        this.leadEntities = leadEntities;
    }
}