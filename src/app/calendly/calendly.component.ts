import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendly',
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.css']
})
export class CalendlyComponent implements OnInit {
  ngOnInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      // O script foi carregado, agora você pode incorporar o Calendly
      // Certifique-se de que o código de incorporação seja executado aqui
    };

    document.body.appendChild(script);
  }
}
