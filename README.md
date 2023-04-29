# Backend

> NodeJS Versão
```
> node -v
v12.20.0
```

> Setup backend
- `npm i`
- `npm start`

> Iniciar servidor MongoDB:
- `mongod.exe --config "C:\Program Files\MongoDB\Server\4.4\bin\mongod.cfg"`

> Iniciar o backend:
- `npm start`

# Frontend

> Instalar:
- `npm i -g @angular/cli@~13.1.0`

> Angular Versão
```
> ng version   

     _                      _                 ____ _     ___ 
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.1.2
Node: 12.20.0
Package Manager: npm 6.14.8
OS: win32 x64

Angular: 13.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------       
@angular-devkit/architect       0.1301.2
@angular-devkit/build-angular   13.1.2
@angular-devkit/core            13.1.2
@angular-devkit/schematics      13.1.2
@angular/cli                    13.1.2
@schematics/angular             13.1.2
rxjs                            7.4.0
typescript                      4.5.4
```
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