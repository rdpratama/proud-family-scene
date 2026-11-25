// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene to /output/entry.txt.
// The scene is 181 characters, one line: a thermostat war Dad always
// loses — and the warmest blanket he sneaks onto Mum's side anyway,
// because losing the argument was never the point. Warm, funny,
// heartfelt: a small domestic moment with a twist, not a greeting-card
// line. Verified locally: 181 characters, 181 bytes, no trailing
// newline, inside the gate's 1-to-280 range.
import { mkdirSync, writeFileSync } from "node:fs";

const SCENE = "Every winter Mum and Dad fight over the thermostat, and every winter Dad loses. Last night I caught him sneaking the warmest blanket onto Mum's side of the bed before she got there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
