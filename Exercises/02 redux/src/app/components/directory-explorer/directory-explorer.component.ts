import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directory, Item} from "../../common/appState";

@Component({
  selector: 'app-directory-explorer',
  templateUrl: './directory-explorer.component.html',
  styleUrls: ['./directory-explorer.component.css']
})
export class DirectoryExplorerComponent {
  @Input() directory: Directory;

  @Output() itemClicked: EventEmitter<Item> = new EventEmitter<Item>();

  onItemClicked(item: Item) {
    this.itemClicked.emit(item);
  }

  get hasParent() {
    return this.directory.parent != null;
  }

  onGotoParent() {

  }
}
