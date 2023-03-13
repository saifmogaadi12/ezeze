import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Exercice } from 'src/app/model/Exercice';
import { ExerciceBlockTypes } from 'src/app/model/ExerciceBlockTypes';
import * as _ from 'lodash';
@Component({
  selector: 'ines-word-coloration-display',
  templateUrl: './word-coloration-display.component.html',
  styleUrls: ['./word-coloration-display.component.scss']
})
export class WordColorationDisplayComponent implements OnInit, OnDestroy {

  @Input() exercice: Exercice;
  @Input() answer: boolean;
  @Output() answerChange = new EventEmitter<boolean>();
  @Output() canGoNext = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.initExercice();
  }

  private initExercice() {
    this.exercice.blocks.forEach((block: any) => {
      // SENTENCE BLOCKS  
      if (block.exerciceBlockType === ExerciceBlockTypes.ANSWER_TO_STROKE) {
        block.blockParams = JSON.parse(block.blockParams);
        // CUSTOM LOGIC
      }
    })
  }

  ngOnDestroy() {
    this.exercice.blocks.forEach((block: any) => {
      if (block.exerciceBlockType === ExerciceBlockTypes.ANSWER_TO_STROKE) {
        block.blockParams = JSON.stringify(block.blockParams);
      }
    })
  }

}