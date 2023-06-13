import { Component } from '@angular/core'
import { SideBarToggle } from 'src/app/domain/interfaces/sidebar-toggle.interface'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {//implements AfterViewInit

    isSideBarCollapsed = false
    screenWidth = 0

    onToggleSideBar(data: SideBarToggle): void {
        this.screenWidth = data.screenWidth
        this.isSideBarCollapsed = data.collapsed
    }
}