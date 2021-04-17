import { JaqpotAppsSchematics } from "./schema";
import { Rule } from '@angular-devkit/schematics';
export interface Deps {
    [propertyName: string]: string;
}
export declare function jaqpotAppFromScratch(_options: JaqpotAppsSchematics): Rule;
