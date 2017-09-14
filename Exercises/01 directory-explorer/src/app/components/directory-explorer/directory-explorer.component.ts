import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directory, Item} from "../../common/appState";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-directory-explorer',
  templateUrl: './directory-explorer.component.html',
  styleUrls: ['./directory-explorer.component.css']
})
export class DirectoryExplorerComponent {
  @Input() directory: Directory;

  @Output() itemClicked: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private appService: AppService) {
  }

  onItemClicked(item: Item) {
    this.itemClicked.emit(item);
  }

  gotoParent() {
    this.appService.gotoParent();
  }

  get hasParent() {
    return this.directory.parent != null;
  }
}
