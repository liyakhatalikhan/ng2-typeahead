import { OnInit } from '@angular/core';
export declare class Typeahead implements OnInit {
    private list;
    private placeholder;
    private searchProperty;
    private displayProperty;
    private maxSuggestions;
    private suggestionSelected;
    private inputElement;
    private input;
    private typeahead;
    private previousInput;
    private suggestions;
    private areSuggestionsVisible;
    private selectedSuggestion;
    private activeSuggestion;
    constructor();
    ngOnInit(): void;
    inputKeyDown(event: KeyboardEvent): void;
    setActiveSuggestion(suggestion: any): void;
    getActiveSuggestionIndex(): number;
    indexOfObject(array: any[], property: string, value: string): number;
    inputKeyUp(event: KeyboardEvent): void;
    inputFocus(event: FocusEvent): void;
    inputBlur(event: Event): void;
    suggestionMouseOver(suggestion: any): void;
    suggestionMouseDown(suggestion: any): void;
    suggestionsMouseOut(event: MouseEvent): void;
    populateSuggestions(): void;
    populateTypeahead(): void;
    selectSuggestion(suggestion: any): void;
    blurInputElement(): void;
    hasSelection(): boolean;
}
