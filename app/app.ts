import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MainComponent } from './view/main/main.component';
import { SalesService } from './service/sales.service';

enableProdMode();
bootstrap(MainComponent, [ SalesService, ROUTER_PROVIDERS ]);
