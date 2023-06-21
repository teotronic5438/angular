import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contratado',
  templateUrl: './contratado.component.html',
  styleUrls: ['./contratado.component.css']
})
export class ContratadoComponent implements OnInit {
  indice: number | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
  }
}
