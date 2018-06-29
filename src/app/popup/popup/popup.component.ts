import { Component, OnInit } from '@angular/core';
import { Hits } from '../../table/table';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }
  popupHeading: string = '';
  popupBody: Hits;
  _ref: any;
  closePopup: Function;
  ngOnInit() {
  }

  onClickOutside(value) {
    console.log('outside clicked', value);
  }


}
