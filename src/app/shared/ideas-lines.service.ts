import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Idea } from './idea';
import { Line } from './line';
import { Mind } from './mind';
import { AppStore } from './reducers';

import {
    initialIdeas,

    LOAD_MINDS,
    ADD_MIND,
    DELETE_MIND,
    UPDATE_MIND,
    DELETE_MIND_FOREVER,
    CLEAR_MIND_TRASH,

    LOAD_IDEAS,
    UPDATE_IDEA,
    ADD_IDEA,
    DELETE_IDEA,
    SELECT_IDEA,

    LOAD_LINES,
    UPDATE_LINES,
    ADD_LINE,
    DELETE_LINES_WHEN_DELETE_IDEA,
    DELETE_MOVING_LINE,
    DELETE_LINES
} from './reducers';

@Injectable()
export class IdeasLinesService {

    constructor(private store: Store<AppStore>) {}

    loadMinds() {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let mindsKeys = Object.keys(minds);
        let mindsInfo: Mind[] = [];
        mindsKeys.forEach(k => {
            let info = {
                id: k,
                title: minds[k].title,
                description: minds[k].description,
                deleted: minds[k].deleted
            };
            mindsInfo.push(info);
        });
        this.store.dispatch({type: LOAD_MINDS, payload: mindsInfo});
    }

    addMind(mind: Mind) {
        this.addMindToServer(mind);
        let newMind = {
            id: mind.id,
            title: mind.title,
            description: mind.description,
            deleted: mind.deleted
        };
        this.store.dispatch({type: ADD_MIND, payload: newMind});
    }

    deleteMind(mind: Mind) {
        this.deleteMindFromServer(mind);
        this.store.dispatch({type: DELETE_MIND, payload: mind});
    }

    updateMind(mind: Mind) {
        this.updateMindInServer(mind);
        this.store.dispatch({type: UPDATE_MIND, payload: mind});
    }

    deleteMindForever(mind: Mind) {
        this.deleteMindForeverFromServer(mind);
        this.store.dispatch({type: DELETE_MIND_FOREVER, payload: mind});
    }

    clearMindTrash() {
        this.clearMindTrashFromServer();
        this.store.dispatch({type: CLEAR_MIND_TRASH, payload: ""});
    }

    loadIdeasAndLines(mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let mind = minds[mindId];
        let ideas = mind.ideas;
        let lines = mind.lines;
        let ideasKeys = Object.keys(ideas);
        let linesKeys = Object.keys(lines);
        let ideasForStore = ideasKeys.map(k => {
            return ideas[k].history[0];
        });
        let linesForStore = linesKeys.map(k => {
            return lines[k].history[0];
        });
        this.store.dispatch({type: LOAD_IDEAS, payload: ideasForStore});
        this.store.dispatch({type: LOAD_LINES, payload: linesForStore});
        return mind.deleted;
    }

    updateIdea(idea: Idea, mindId: string) {
        this.updateIdeasInServer(idea, mindId);
        this.updateLinesInServer(idea, mindId);
        this.store.dispatch({type: UPDATE_IDEA, payload: idea});
        this.store.dispatch({type: UPDATE_LINES, payload: idea});
    }

    addIdea(idea: Idea, mindId: string) {
        this.addIdeaToServer(idea, mindId);
        this.store.dispatch({type: ADD_IDEA, payload: idea});
    }

    deleteIdea(idea: Idea, mindId: string) {
        this.deleteIdeaFromServer(idea, mindId);
        this.deleteLinesWhenDeleteIdeaFromServer(idea, mindId);
        this.store.dispatch({type: DELETE_IDEA, payload: idea});
        this.store.dispatch({type: DELETE_LINES_WHEN_DELETE_IDEA, payload: idea});
    }

    moveIdea(idea: Idea) {
        this.store.dispatch({type: UPDATE_IDEA, payload: idea});
    }

    selectIdea(idea: Idea, mindId: string) {
        this.selectIdeaFromServer(idea, mindId);
        this.store.dispatch({type: SELECT_IDEA, payload: idea});
    }

    addIdeaCenter(idea: Idea) {
        this.store.dispatch({type: UPDATE_IDEA, payload: idea});
        //TODO: if no line on this idea, donot run UPDATE_LINES
        this.store.dispatch({type: UPDATE_LINES, payload: idea});
    }

    addLine(line: Line, mindId: string) {
        this.addLineToServer(line, mindId);
        let movingLine = Object.assign({}, line, {id: "addMovingLine"});
        this.deleteMovingLine(movingLine);
        this.store.dispatch({type: ADD_LINE, payload: line});
    }

    addMovingLine(line: Line) {
        this.deleteMovingLine(line);
        this.store.dispatch({type: ADD_LINE, payload: line});
    }

    deleteMovingLine(line: Line) {
        this.store.dispatch({type: DELETE_MOVING_LINE, payload: line});
    }

    deleteLines(lines: Line[], mindId: string) {
        this.deleteLinesFromServer(lines, mindId);
        this.store.dispatch({type: DELETE_LINES, payload: lines});
    }

    private addMindToServer(mind: Mind) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mind.id] = mind;
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private deleteMindFromServer(mind: Mind) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mind.id].deleted = true;
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private updateMindInServer(mind: Mind) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mind.id] = mind;
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private deleteMindForeverFromServer(mind: Mind) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        delete minds[mind.id];
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private clearMindTrashFromServer() {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let keys = Object.keys(minds);
        keys.forEach(k => {
            if(minds[k].deleted) {
                delete minds[k];
            }
        });
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private updateIdeasInServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mindId].ideas[idea.id].history.unshift(idea);       
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private addIdeaToServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mindId].ideas[idea.id] = {history: [idea], deleted: false};     
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private deleteIdeaFromServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mindId].ideas[idea.id].deleted = true;        
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private selectIdeaFromServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mindId].ideas[idea.id].history.unshift(Object.assign({}, idea, {isSelected: true}));        
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private updateLinesInServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let lines = minds[mindId].lines;
        let linesKeys = Object.keys(lines);
        linesKeys.forEach(k => {
            if(lines[k].ideaAId === idea.id) {
                lines[k].history.unshift(
                    Object.assign(
                    {}, 
                    lines[k].history[0], 
                    {ideaA: Object.assign({}, idea)})
                );
            } else if(lines[k].ideaBId === idea.id) {
                lines[k].history.unshift(
                    Object.assign(
                    {}, 
                    lines[k].history[0], 
                    {ideaB: Object.assign({}, idea)})
                );
            }
        });
        minds[mindId].lines = lines;       
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private deleteLinesWhenDeleteIdeaFromServer(idea: Idea, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let lines = minds[mindId].lines;
        let linesKeys = Object.keys(lines);
        linesKeys.forEach(k => {
            if(lines[k].ideaAId === idea.id || lines[k].ideaBId === idea.id) {
                lines[k].deleted = true;
            }
        });
        minds[mindId].lines = lines;        
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private deleteLinesFromServer(ls: Line[], mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        let lines = minds[mindId].lines;
        let linesKeys = Object.keys(lines);
        linesKeys.forEach(k => {
            ls.forEach(l => {
                if(l.id === k) {
                    lines[k].deleted = true;
                }
            });
        });
        minds[mindId].lines = lines;        
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }

    private addLineToServer(line: Line, mindId: string) {
        let minds = JSON.parse(localStorage.getItem("sym-minds"));
        minds[mindId].lines[line.id] = {
            history: [line],
            ideaAId: line.ideaA.id,
            ideaBId: line.ideaB.id,
            deleted: false
        };       
        localStorage.setItem("sym-minds", JSON.stringify(minds));
    }
}
