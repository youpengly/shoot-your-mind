import { 
  ChangeDetectionStrategy,
  Component, 
  EventEmitter,
  Input,
  Output } from '@angular/core';

import { Idea } from  '../shared/idea';

@Component({
  selector: 'sym-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryListComponent {
  @Input() set historyIdeas(value: Idea[]) {
    this._historyIdeas = value;
    this.hasHistory = value.length > 0;
  }
  @Input() set deletedIdeas(value: Idea[]) {
    this._deletedIdeas = value;
    this.hasDeletedIdeas = value.length > 0;
  }
  @Input() listHeight: number;
  @Output() historyIdeaRecover = new EventEmitter<Idea>();
  @Output() historyIdeasDelete = new EventEmitter<Idea[]>();
  @Output() deletedIdeaRecover = new EventEmitter<Idea>();
  @Output() deletedIdeasDelete = new EventEmitter<Idea[]>();
  _historyIdeas: Idea[];
  hasHistory: boolean;
  _deletedIdeas: Idea[];
  hasDeletedIdeas: boolean;
  isShowCurrent: boolean = true;
  isShowDeleted: boolean = false;

  onHistoryIdeaRecover(idea: Idea) {
    this.historyIdeaRecover.next(idea);
  }
  onHistoryIdeaDelete(idea: Idea) {
    this.historyIdeasDelete.next([idea]);
  }
  onDeletedIdeaRecover(idea: Idea) {
    this.deletedIdeaRecover.next(idea);
  }
  onDeletedIdeaDelete(idea: Idea) {
    this.deletedIdeasDelete.next([idea]);
  }

  stopPropagationPlease(e: MouseEvent) {
    e.stopPropagation();
  }
  onShowCurrent(e: MouseEvent) {
    this.stopPropagationPlease(e);
    this.isShowDeleted = false;
    this.isShowCurrent = true;
  }
  onShowDeleted(e: MouseEvent) {
    this.stopPropagationPlease(e);
    this.isShowCurrent = false;
    this.isShowDeleted = true;
  }
  onDeleteAllHistory(e: MouseEvent) {
    this.stopPropagationPlease(e);
    this.historyIdeasDelete.next(this._historyIdeas);
  }
  onDeleteAllDeleted(e: MouseEvent) {
    this.stopPropagationPlease(e);
    this.deletedIdeasDelete.next(this._deletedIdeas);
  }
}
