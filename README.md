<!--
Key Angular Features in Use

 Standalone component (modern Angular approach) Reactive forms with validation.
 Signals instead of RxJS for simple local state (submitted).
 SweetAlert2 integration for user-friendly popups.
 Conditional rendering (*ngIf) for errors and thank-you message.
 Form disabling after submission (to prevent multiple submissions).


    Angular: 17.3.12
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1703.17
@angular-devkit/build-angular   17.3.17
@angular-devkit/core            17.3.17
@angular-devkit/schematics      17.1.0
@angular/cli                    17.1.0
@schematics/angular             17.1.0
rxjs                            7.8.2
typescript                      5.3.3
zone.js                         0.14.10
---------------------------------------------------------

bash
npm i -g @angular/cli@17
npm install
npm install sweetalert2

ng serve

------------------------------------------------------------------

Then open http://localhost:4200

## Project Structure
```
ceh-landing/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── src
    ├── index.html
    ├── main.ts
    ├── styles.scss
    ├── assets/
    │   ├── banner.svg
    │   ├── icon-*.svg
    └── app
        ├── app.component.ts
        ├── app.routes.ts
        └── sections/
            ├── header.component.ts
            ├── hero.component.ts
            ├── highlights.component.ts
            ├── curriculum.component.ts
            ├── about.component.ts
            ├── register.component.ts
            └── footer.component.ts
 -->