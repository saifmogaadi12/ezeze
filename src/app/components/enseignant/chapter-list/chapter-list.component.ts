import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AjouterChapitreComponent } from 'src/app/ajouter-chapitre/ajouter-chapitre.component';
import { Course } from 'src/app/model/Course';
import { Module } from 'src/app/model/Module';
import { Chapter, ChapterChildren } from 'src/app/model/Chapter';

import { ChapitreService } from 'src/app/services/chapitre.service';
import { SerieService } from 'src/app/services/serie.service';

import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { DataSource } from '@angular/cdk/collections';
import { AddSerieComponent } from './add-chapter/add-serie/add-serie.component';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {
  chapp: Chapter[];
  name: string;
  module: Module;
  course: Course;
  pre_required_chapter: string;
  resumer_cour: any;
  catre_conceptuelle: any;
  dataSource: ChapterChildren[];
  matTableSources = Array(6).fill(null);
  chapitre: Chapter[];
  // dataSource = new MatTableDataSource<Chapter>(this.chapp);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private chapterService: ChapitreService, private serieService: SerieService, public dialog: MatDialog) {}
  displayedColumns: string[] = ['Classe', 'Trimestre', 'Matiere', 'Chapitre', 'Action'];

  ngOnInit(): void {
    this.getallchapters();
  }

  getallchapters() {
    this.chapterService.getchapitre().subscribe((chapt) => {
      this.dataSource = chapt.filter((chap) => chap.chapterType !== 'MATIERE');
      this.handleSourceSeparationBasedOnGroupName(this.dataSource);
    });
  }

  deleteChapter(id) {
    this.chapterService.deleteChapter(id).subscribe((res) => {
      this.getallchapters();
    });
  }

  openSerieDialog(element) {
    this.serieService.getSerieByChapter(element.chapter_id).subscribe((res) => {
      const serie = res;
      this.chapterService.isMenuOpened.next(false);
      const dialogRef = this.dialog.open(AddSerieComponent, {
        width: '1200px',
        height: 'fit-content',
        disableClose: true,
        data: {
          series: res,
          chapter_id: element.chapter_id
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.chapterService.isMenuOpened.next(true);

        if (result) this.getallchapters();
      });
    });
  }

  openDialog(element?): void {
    this.chapterService.isMenuOpened.next(false);

    const dialogRef = this.dialog

      .open(AddChapterComponent, {
        width: '50%',
        height: '70vh',
        disableClose: true,
        data: element
      })
      .afterClosed()
      .subscribe((result) => {
        this.chapterService.isMenuOpened.next(true);

        this.getallchapters();
      });
  }

  handleSourceSeparationBasedOnGroupName(dataSource: any) {
    const classes = ['السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة', 'السنة الخامسة', 'السنة السادسة'];
    classes.map((cName, index) => {
      this.matTableSources[index] = dataSource.filter((ds) => ds['group'].name.trim() === cName);
    });
  }
}
