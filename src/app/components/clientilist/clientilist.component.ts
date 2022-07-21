import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientilist',
  templateUrl: './clientilist.component.html',
  styleUrls: ['./clientilist.component.css'],
})
export class ClientilistComponent implements OnInit {
  clienti!: Cliente[];

  constructor(
    private _clienteService: ClienteService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._clienteService.getClienti().subscribe({
      next: (clienti) => (this.clienti = clienti),
      error: (e) => console.log(e),
      complete: () => console.info('Operazione completata'),
    });
  }

  createCliente() {
    let cliente = new Cliente();
    this._clienteService.setter(cliente);
    this._router.navigate(['/form']);
  }

  deleteCliente(cliente: Cliente) {
    this._clienteService.deleteCliente(cliente.id).subscribe((dati: any) => {
      // cancello dall'array clienti il cliente che elimino
      this.clienti.splice(this.clienti.indexOf(cliente), 1);
    });
  }

  updateCliente(cliente: Cliente) {
    this._clienteService.setter(cliente);
    this._router.navigate(['/form']);
  }
}
