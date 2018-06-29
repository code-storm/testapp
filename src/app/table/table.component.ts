import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TableService } from './table.service';
import { Hits } from './table';
import { Observable } from 'rxjs/Observable';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService, private popupService: PopupService) { }
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer: ViewContainerRef;
  tableData: Hits[] = [];
  interval: number;
  filterText: string = '';
  filteredData: Hits[] = [];

  ngOnInit() {
    this.getTableData();
    this.interval = window.setInterval(() => {
      this.getTableData();
    }, 10 * 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getTableData(): void {
    this.tableService.getData().subscribe(this.addTableData.bind(this));
  }

  addTableData(hits: Hits[]): void {
    for (let index = 0; index < hits.length; index++) {
      if (!this.tableData.some((data: Hits) => data.objectID === hits[index].objectID)) {
        this.tableData.push(hits[index]);
      } else {
        break;
      }
    }
  }

  onFilterData(event: KeyboardEvent): void {
    const target = <HTMLInputElement>event.target;
    console.log(event, target.value);
    const inputValue = target.value.trim().toLowerCase();
    if (target.value.length > 0) {
      this.filteredData = this.tableData.filter(t => t.title.toLowerCase().indexOf(inputValue) > -1);
    }
  }

  onRowClick(hit: Hits, event: MouseEvent): void {
    event.stopPropagation();
    const setting = {
      popupContainer: this.popupContainer,
      popupHeading: 'RAW JSON Data',
      popupBody: hit,
    };
    this.popupService.openStartTestDialog(setting);
  }
}
