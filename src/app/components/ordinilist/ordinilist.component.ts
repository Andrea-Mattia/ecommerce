import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordine } from 'src/app/models/ordine';
import { OrdineService } from 'src/app/service/ordine.service';

@Component({
  selector: 'app-ordinilist',
  templateUrl: './ordinilist.component.html',
  styleUrls: ['./ordinilist.component.css'],
})
export class OrdinilistComponent implements OnInit {
  ordini!: Ordine[];

  constructor(private _ordineService: OrdineService, private _router: Router) {}

  ngOnInit(): void {
    this._ordineService.getOrdini().subscribe({
      next: (ordini) => (this.ordini = ordini),
      error: (e) => console.log(e),
      complete: () => console.info('Operazione completata'),
    });
  }

  createOrdine() {
    let ordine = new Ordine();
    this._ordineService.setter(ordine);
    this._router.navigate(['/form']);
  }

  updateOrdine(ordine: Ordine) {
    this._ordineService.setter(ordine);
    this._router.navigate(['/form']);
  }

  deleteOrdine(ordine: Ordine) {
    this._ordineService.deleteOrdine(ordine.idOrdine).subscribe((dati: any) => {
      this.ordini.splice(this.ordini.indexOf(ordine), 1);
    });
  }
}
