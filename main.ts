// One line of earned pride, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "She fixed the neighbor's leaking sink with a wrench she'd never held before, and when the water stopped, she stood there a moment longer, just listening to the quiet.";

// The competition gate for this entry: 1 to 240 characters.
const LIMIT = 240;

function checkEntry(line: string, limit: number): void {
  if (line.length < 1 || line.length > limit) {
    console.error(`entry is ${line.length} characters, outside the 1-${limit} range`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: entry.txt holds exactly the line, byte for byte.
