import { chain, Rule, schematic, SchematicContext, Tree, } from '@angular-devkit/schematics';

export default function (options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      schematic('jaqpot-app-from-scratch', options)
    ])(tree, context);
  };
}