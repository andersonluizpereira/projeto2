import { Injectable } from '@angular/core';
import { MeuLogService } from "app/di/meu-log.service";

@Injectable()
export class NomesTecService {
meuLog: MeuLogService;
  constructor(meulog: MeuLogService) {
    this.meuLog = meulog;
   }

  getNomesTec(): string [] {
this.meuLog.setLog('consultou o array de tecnologias');
return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2'];
}

}
