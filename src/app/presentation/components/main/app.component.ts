import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
    displayedColumns: string[] = ['id', 'name', 'phone', 'status', 'action']
    personList: PeopleList = new PeopleList()
    dataSource = new MatTableDataSource<Person>(this.personList.people)

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort

    ngOnInit(){
        this.dataSource.sort = this.sort
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}

export class Person {
    id: number
    name: string
    phone: string
    status: string
    action: string

    constructor(id: number, name: string, phone: string, status: string, action: string) {
        this.id = id
        this.name = name
        this.phone = phone
        this.status = status
        this.action = action
    }
}

export class PeopleList {
    people: Person[]

    constructor() {
        const peopleData = [
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' }
        ]

        // Create an array of Person objects and assign to the class property
        this.people = peopleData.map(personData => new Person(personData.id, personData.name, personData.phone, personData.status, personData.action))
    }
}