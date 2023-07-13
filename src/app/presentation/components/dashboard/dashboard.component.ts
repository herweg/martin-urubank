import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { AuthService } from '@auth0/auth0-angular'
import { LeadEntity } from 'src/app/domain/entities/lead-entity';
import { LeadsTableEntity } from 'src/app/domain/entities/leads.table-entity';
import { GetLeadsRepository } from 'src/app/infrastructure/api/repositories/get.leads.repository';
import { SideBarToggle } from '../../../domain/interfaces/sidebar-toggle.interface'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {

    displayedColumns: string[] = [
        'id',
        'createdAt',
        //'completedAt',
        'fullName',
        'phone',
        'document',
        'email',
        'state',
        'city',
        'amount',
        'applicationStatus',
        'processStatus',
        'campaign',
        'financiera',
        'pdf',
        'action',
        'send'
    ]
    dataSource: MatTableDataSource<LeadEntity> = new MatTableDataSource<LeadEntity>()

    leadsTable: LeadsTableEntity = new LeadsTableEntity()

    autorizados = 0
    noAutorizados = 0
    pendientes = 0

    constructor(
        private readonly auth0: AuthService,
        private readonly getleadsrepository: GetLeadsRepository,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.loadLeads()
    }

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator
    @ViewChild(MatSort, { static: true }) sort!: MatSort

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
    }

    //Sidebar
    isSideBarCollapsed = false
    screenWidth = 0

    onToggleSideBar(data: SideBarToggle): void {
        this.screenWidth = data.screenWidth
        this.isSideBarCollapsed = data.collapsed
    }

    logOut(): void {
        this.auth0.logout()
    }

    loadLeads(): void {
        this.getleadsrepository.getLeads()
            .subscribe(res => {
                if (res.success && res.data) {
                    const data: LeadEntity[] = res.data
                    this.leadsTable = new LeadsTableEntity(data.map(item => new LeadEntity(item)))
                    this.dataSource.data = this.leadsTable.leadEntities

                    this.getStatus()
                } else {
                    console.error('No data received from the API.')
                }
            },
                error => {
                    console.error('Error occurred during API call:', error)
                })
    }

    getStatus(): void {
        const autorizado = this.leadsTable.leadEntities.filter(lead => lead.processStatus === 1)
        this.autorizados = autorizado.length

        const noAutorizado = this.leadsTable.leadEntities.filter(lead => lead.processStatus === 2)
        this.noAutorizados = noAutorizado.length

        const pendiente = this.leadsTable.leadEntities.filter(lead => lead.processStatus === 3)
        this.pendientes = pendiente.length

        this.changeDetectorRef.detectChanges()
    }
}