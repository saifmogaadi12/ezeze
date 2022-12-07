import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chapter } from '../model/Chapter';
import { Group } from '../model/User';
import { ChapitreServiceService } from '../service/chapitre-service.service';
import { UserService } from '../services/userservice.service';
import { prerquis } from '../model/prerquis';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = ['blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];
@Component({
  selector: 'app-ajouter-chapitre',
  templateUrl: './ajouter-chapitre.component.html',
  styleUrls: ['./ajouter-chapitre.component.scss']
})
export class AjouterChapitreComponent implements OnInit {
  regiForm: FormGroup;
  chapitre: Chapter;
  serieex: Group[];
  Prer: prerquis[];
  chap: Chapter[];
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private fb: FormBuilder,
    private chapterservice: ChapitreServiceService,
    private Userservice: UserService,
    private route: Router,
    public dialogRef: MatDialogRef<AjouterChapitreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Chapter,
    public dialog: MatDialog
  ) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.regiForm = fb.group({
      NomChap: [null, Validators.required],
      Module: [null, Validators.required],
      Course: [null, Validators.required],
      IsAccepted: [null],
      ChapPrerquis: [null, Validators.required],
      resumer_cour: [null],
      catre_conceptuelle: [null],
      groupe: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllGroupe();
    this.getPrerequis();
  }

  onFileSelected(event) {}

  onFormSubmit(): void {
    this.chapterservice.ajouterchapitre(this.regiForm.value, this.regiForm.value.groupe).subscribe((data) => {
      this.chapitre = data;
    });
    // this.route.navigate[("/dashboard")];
    alert('chapitre a été ajouter ');
  }

  getAllGroupe() {
    this.Userservice.getGroups().subscribe((serie) => {
      this.serieex = serie;
    });
  }
  getPrerequis() {
    this.chapterservice.getPreRequis().subscribe((data) => {
      this.Prer = data;
    });
  }
  toppings = new FormControl('');
  toppingList: string[] = ['etudefonction', 'division', 'multiplication', 'addition', 'soustraction', 'springboot'];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
}
