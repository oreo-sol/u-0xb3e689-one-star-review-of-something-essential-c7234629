// One-star review of something essential: the alarm clock.
// A deadpan complaint filed in earnest against a thing that cannot be fixed.
import { mkdirSync, writeFileSync } from "node:fs";

// The review itself: one line, no trailing newline, so the gate counts
// exactly the review text and nothing else.
const review =
  "My alarm wakes me at the time I chose, in the tone I chose, and I still hate it more than the job it wakes me for.";

const outputDir = "/output";
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, review, "utf8");
