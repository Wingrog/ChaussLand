import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ToastrService } from 'ngx-toastr';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-edit-chaussure',
  templateUrl: './edit-chaussure.component.html',
  styleUrls: ['./edit-chaussure.component.css']
})
export class EditChaussureComponent implements OnInit {

  chaussure: Chaussure;
  typeChaussure = ['Sport', 'Ville', 'Football'];


  constructor(private activatedRoute: ActivatedRoute, private chaussureService: ChaussureService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.chaussureService.getOneChaussure(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });
  }

  isLoading: boolean;

  // JE MODIFIE MA CHAUSSURE

  editChaussure(): void {
    this.isLoading = true;
    this.chaussureService.editChaussure(this.chaussure).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/chaussure']); // Redirection de l'utilisateur
      this.toastr.success("La chaussure à bien été modifiée !"); // On affiche une notification
    })
  }


}
