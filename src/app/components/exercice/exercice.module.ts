import { NgModule } from '@angular/core';
import { MultipleChoiceComponent } from './exercice-types/multiple-choice/multiple-choice.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MultipleAnswersComponent } from './exercice-types/multiple-answers/multiple-answers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TrueFalseComponent } from './exercice-types/true-false/true-false.component';
import { ShortResponseComponent } from './exercice-types/short-response/short-response.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FillEmptyFieldsComponent } from './exercice-types/fill-empty-fields/fill-empty-fields.component';
import { CorrespondenceComponent } from './exercice-types/correspondence/correspondence.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NumericComponent } from './exercice-types/numeric/numeric.component';
import { LikertScaleComponent } from './exercice-types/likert-scale/likert-scale.component';
import { WritingComponent } from './exercice-types/writing/writing.component';
import { SelectFromListComponent } from './exercice-types/select-from-list/select-from-list.component';
import { MatSelectModule } from '@angular/material/select';
import { SequencingComponent } from './exercice-types/sequencing/sequencing.component';
import { PassTestComponent } from './pass-test/pass-test.component';
import { ColorTheTextComponent } from './exercice-types/color-the-text/color-the-text.component';
import { ColorTheTextElementComponent } from './exercice-types/color-the-text/color-the-text-element/color-the-text-element.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';


import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorPaletteElementComponent } from './exercice-types/color-the-text/color-palette-element/color-palette-element.component';

import { DragDropComponent } from './exercice-types/drag-drop/drag-drop.component';

import { DragWordsComponent } from './drag-words/drag-words.component';
import { HotspotComponent } from './exercice-types/hotspot/hotspot.component';
import { TranslateModule } from '@ngx-translate/core';
import { EspaceProfComponent } from './espace-prof/espace-prof.component';
import { CorrespondingArrowComponent } from './exercice-types/corresponding-arrow/corresponding-arrow.component';
import { DrawLinesComponent } from './exercice-types/corresponding-arrow/draw-lines/draw-lines.component';
import { LineAnchorDirective } from './exercice-types/corresponding-arrow/draw-lines/line-anchor.directive';
import { FalfoulComponent } from './falfoul/falfoul.component';
import { TextUnderImageComponent } from './exercice-types/tables/text-under-image/text-under-image.component';
import { InitEquationFormComponent } from './exercice-types/tables/vertical-equations/init-equation-form/init-equation-form.component';
import { EquationLayoutBuilderComponent } from './exercice-types/tables/vertical-equations/equation-layout-builder/equation-layout-builder.component';
import { EquationDisplayComponent } from './exercice-types/tables/vertical-equations/equation-display/equation-display.component';
// EDIROE
import { AngularEditorModule } from '@kolkov/angular-editor';
import { GeneralTablesBuilderComponent } from './exercice-types/tables/general-purpose-tables/general-tables-builder/general-tables-builder.component';
import { GeneralTablesTeacherStudentComponent } from './exercice-types/tables/general-purpose-tables/general-tables-teacher-student/general-tables-teacher-student.component';
import { GeneralTablesStudentDisplayComponent } from './exercice-types/tables/general-purpose-tables/general-tables-student-display/general-tables-student-display.component';
import { SentenceBuilderComponent } from './exercice-types/stroke-wrong-answer/stroke-sentence/sentence-builder/sentence-builder.component';
const MaterialModules = [MatStepperModule, MatDialogModule, MatIconModule, MatCardModule, MatRadioModule, MatCheckboxModule, MatFormFieldModule, DragDropModule, MatSelectModule, MatButtonModule, MatTooltipModule,
];


@NgModule({
  imports: [
    MaterialModules,
    TranslateModule,
    FormsModule,
    MatInputModule,
    CommonModule,
    AngularEditorModule,
    ReactiveFormsModule
  ],
  declarations: [
    MultipleChoiceComponent,
    MultipleAnswersComponent,
    TrueFalseComponent,
    ShortResponseComponent,
    FillEmptyFieldsComponent,
    CorrespondenceComponent,
    NumericComponent,
    LikertScaleComponent,
    WritingComponent,
    SelectFromListComponent,
    SequencingComponent,
    PassTestComponent,
    ColorTheTextComponent,
    ColorTheTextElementComponent,
    ColorPaletteElementComponent,
    DragDropComponent,
    DragWordsComponent,
    HotspotComponent,
    EspaceProfComponent,
    CorrespondingArrowComponent,
    DrawLinesComponent,
    LineAnchorDirective,
    FalfoulComponent,
    TextUnderImageComponent,
    InitEquationFormComponent,
    EquationLayoutBuilderComponent,
    EquationDisplayComponent,
    GeneralTablesBuilderComponent,
    GeneralTablesTeacherStudentComponent,
    GeneralTablesStudentDisplayComponent,
    SentenceBuilderComponent
  ],
  providers: [],
  exports: [
    MultipleChoiceComponent,
    MultipleAnswersComponent,
    TrueFalseComponent,
    ShortResponseComponent,
    FillEmptyFieldsComponent,
    CorrespondenceComponent,
    NumericComponent,
    LikertScaleComponent,
    WritingComponent,
    SelectFromListComponent,
    SequencingComponent,
    PassTestComponent,
    ColorTheTextComponent,
    ColorTheTextElementComponent,
    ColorPaletteElementComponent,
    DragDropComponent,
    DragWordsComponent,
    HotspotComponent,
    EspaceProfComponent,
    CorrespondingArrowComponent,
    DrawLinesComponent,
    LineAnchorDirective,
    FalfoulComponent,
    TextUnderImageComponent,
    InitEquationFormComponent,
    EquationDisplayComponent,
    GeneralTablesStudentDisplayComponent
  ]
})
export class ExerciceModule { }
