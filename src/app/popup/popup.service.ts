import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { Hits } from '../table/table';

@Injectable()
export class PopupService {

  constructor(private resolver: ComponentFactoryResolver) { }

  openStartTestDialog(setting: {
    popupContainer: ViewContainerRef,
    popupHeading: string,
    popupBody: Hits,
  }): void {
    setting.popupContainer.clear();
    const factory = this.resolver.resolveComponentFactory(PopupComponent);
    const componentRef = setting.popupContainer.createComponent(factory);
    if (setting.popupHeading) {
      componentRef.instance.popupHeading = setting.popupHeading;
    }
    if (setting.popupBody) {
      componentRef.instance.popupBody = setting.popupBody;
    }
    componentRef.instance._ref = componentRef;
    componentRef.instance.closePopup = () => {
      componentRef.destroy();
    }
  }

}
