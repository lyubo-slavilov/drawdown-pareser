import { FlowParser } from './FlowParser';
import { GraphParser } from './GraphParser';
import { SequenceParser } from './SequenceParser';

const createdParsers = {};

export function factory(diagramType) {
  let parser;
  const dt = diagramType.toLowerCase();
  if (createdParsers[dt]) {
    parser = createdParsers[dt]
  } else {
    parser = createParser(dt);
    createdParsers[dt] = parser;
  }
  return parser;
}

function createParser(diagramType) {
  switch (diagramType) {
    case 'flow':
      return new FlowParser();
    case 'graph':
      return new GraphParser();
    case 'sequence':
      return new SequenceParser();
    default:
      throw `Unknown Drawdown diagram "${diagramType}"`;
  }
}
