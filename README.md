# Backend

> Setup backend
- `npm i`
- `npm start`

> Iniciar servidor MongoDB:
- `mongod.exe --config "C:\Program Files\MongoDB\Server\4.4\bin\mongod.cfg"`

> Iniciar o backend:
- `npm start`

# Frontend

> Instalar:
- `npm i -g @angular/cli`

> Criar projeto:
- `ng new frontend --minimal`
- `npm i ngx-mask --save`
- `npm i angular2-text-mask --save`

> Alterar linhas do arquivo `frontend/angular.json`:
```
                "@schematics/angular:component": {
                    "inlineTemplate": false,
                    "inlineStyle": false,
                    "skipTests": true
                },
```

> Terminal 1: Iniciar servidor:

- `ng serve --host 0.0.0.0 --port 4200` ou `ng serve`

> Terminal 2: Pacotes, Componentes e services:

- `ng add @angular/material`
- `ng add @auth0/angular-jwt`
- `ng add @auth0/auth0-angular`
- `ng config -g cli.warnings.versionMismatch false`

> Terminal 2: Criar pastas em `frontend/src/app/`:

- `mkdir src/app/public`
- `mkdir src/app/public/_helpers`
- `mkdir src/app/private`
- `mkdir src/app/guards`
- `mkdir src/app/model`

> Adicionar Components em `src/app/public/`:

- `ng g c public/components/register`
- `ng g c public/components/login`

> Adicionar Services em `src/app/public/`:

- `ng g s public/services/user-service/user`
- `ng g s public/services/auth-service/auth`

> Adicionar Components de `src/app/private/`:

- `ng g c private/components/dashboard`

##

> Codificando arquivo `src/app/guards/auth.guard.ts`:
```
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtHelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.jwtService.isTokenExpired()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
```

> Criando o arquivo `src/app/model/login-response.interface.ts`:
```
export interface LoginResponseI {
  token: string;
  token_type: string;
  expires_in: number;
  errors: string;
}
```

> Alterando o arquivo de rotas`src/app/app-routing.module.ts`:

```
import { DashboardComponent } from './private/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  },
];
```

> Alterando a configuração dos módulos `src/app/app.module.ts`:

```
import { DashboardComponent } from './private/components/dashboard/dashboard.component';

export function tokenGetter() {
  return localStorage.getItem("sweethome_token");
}

HttpClientModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['0.0.0.0:3003']
      }
    }),
```

> Criando arquivo `src/app/private/private.module`:

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      PrivateRoutingModule,
    ]
  })
  
  export class PrivateModule { }
```

> Criando arquivo `src/app/private/private-routing.module.ts`:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }

```
> Criando arquivo `src/app/public/public-routing.module.ts`:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
```

> Criando arquivo `src/app/xxxxx`:

```

```