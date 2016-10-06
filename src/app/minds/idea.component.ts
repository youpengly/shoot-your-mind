import { 
    Component, 
    Input, 
    OnInit, 
    Output, 
    AfterViewInit, 
    ElementRef,
    EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

import { Idea } from '../shared/idea';
import { Position } from '../shared/position';

@Component({
    selector: "sym-idea",
    templateUrl: "./idea.component.html",
    styleUrls: ["./idea.component.css"]
})
export class IdeaComponent implements AfterViewInit, OnInit {
    @Input() idea: Idea;
    @Output() addCenter = new EventEmitter<Idea>();
    @Output() ideaUpdated = new EventEmitter<Idea>();
    @Output() ideaDeleted = new EventEmitter<Idea>();
    hasNote: boolean = false;
    showNote: boolean = false;
    showColor: boolean = false;
    showHistory: boolean = false;

    constructor(private er: ElementRef) {}

    ngOnInit() {
        if(this.idea.note && this.idea.note.length > 0) {
            this.hasNote = true;
        }            
    }

    ngAfterViewInit() {
        let width = this.er.nativeElement.offsetWidth;
        let height = this.er.nativeElement.offsetHeight;
        let centerX = this.idea.left + width / 2;
        let centerY = this.idea.top + height / 2;
        if(centerX !== this.idea.centerX || centerY !== this.idea.centerY) {
            let data = Object.assign({}, this.idea, {centerX, centerY, width, height});
            this.addCenter.next(data);
        }

        if(this.idea.isEditing === true) {
            let node = this.er.nativeElement.querySelector("#" + this.idea.id);
            window.getSelection().selectAllChildren(node);
        } 
    }

    onUpdateIdea(e: KeyboardEvent) {
        if(e.keyCode === 13) {
            e.preventDefault();
            let text = (<HTMLParagraphElement>e.target).innerText;
            let idea = Object.assign({}, this.idea, {text: text, isEditing: false});
            this.ideaUpdated.next(idea);
        }
    }

    onToggleNote(e: MouseEvent) {
        e.stopPropagation();
        this.showNote = !this.showNote;
    }

    onToggleColor(e: MouseEvent) {
        e.stopPropagation();
        this.showColor = !this.showColor;
    }

    onToggleHistory(e: MouseEvent) {
        e.stopPropagation();
        this.showHistory = !this.showHistory;
    }

    onToggleEdit(e: MouseEvent) {
        e.stopPropagation();
        let idea = Object.assign({}, this.idea, {isEditing: !this.idea.isEditing});
        this.ideaUpdated.next(idea);
    }

    onDelete(e: MouseEvent) {
        e.stopPropagation();
        this.ideaDeleted.next(this.idea);
    }

    onCancelNote(e: MouseEvent) {
        e.stopPropagation();
        this.showNote = false;
    }

    onSaveNote(e: MouseEvent, note: string) {
        e.stopPropagation();
        let idea = Object.assign({}, this.idea, {note});
        this.ideaUpdated.next(idea);
        this.showNote = false;
    }
}