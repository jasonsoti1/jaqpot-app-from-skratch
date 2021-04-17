"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jaqpotAppFromScratch = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
function jaqpotAppFromScratch(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read("angular.json");
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException("Not an Angular CLI workspace");
        }
        if (tree.exists('package.json')) {
            const jsonStr = tree.read('package.json').toString('utf-8');
            const json = JSON.parse(jsonStr);
            const type = 'dependencies';
            if (!json[type]) {
                json[type] = {};
            }
            const packages = {
                "@angular/animations": "^11.0.9",
                "@angular/cdk": "^11.2.7",
                "@angular/common": "~11.0.1",
                "@angular/compiler": "~11.0.1",
                "@angular/core": "~11.0.1",
                "@angular/flex-layout": "^11.0.0-beta.33",
                "@angular/forms": "^11.0.9",
                "@angular/material": "^11.2.7",
                "@angular/platform-browser": "~11.0.1",
                "@angular/platform-browser-dynamic": "~11.0.1",
                "@angular/router": "~11.0.1",
                "@euclia/jaqpot-client": "^1.0.4",
                "angular-auth-oidc-client": "^11.6.4",
                "material-design-icons": "^3.0.1",
                "oidc-client": "^1.11.5",
                "rxjs": "~6.6.0",
                "tslib": "^2.0.0",
                "zone.js": "~0.10.2"
            };
            for (let key of Object.keys(packages)) {
                if (!json[type][key]) {
                    json[type][key] = packages[key];
                }
            }
            tree.overwrite('package.json', JSON.stringify(json, null, 2));
            _context.addTask(new tasks_1.NodePackageInstallTask());
        }
        else {
            throw new schematics_1.SchematicsException("Cannot find package.json. Please make sure you are on the root of the project!");
        }
        const title = _options.title;
        const description = _options.description;
        const modelId = _options.modelId;
        const sourceTemplate = schematics_1.url("./files");
        const sourceParametrizedTemplate = schematics_1.apply(sourceTemplate, [
            schematics_1.template(Object.assign(Object.assign({}, _options), { title,
                description,
                modelId })),
        ]);
        return schematics_1.mergeWith(sourceParametrizedTemplate)(tree, _context);
    };
}
exports.jaqpotAppFromScratch = jaqpotAppFromScratch;
//# sourceMappingURL=index.js.map