import { Command } from "./Command";
import { Weeknd } from "./commands/Weeknd";
import { EarlyEntry } from "./commands/EarlyEntry";
import { ShowSpoilers } from "./commands/ShowSpoilers";
import { Countdown } from "./commands/Countdown";

export const Commands: Command[] = [Weeknd, EarlyEntry];
export const EphemeralCommands: Command[] = [];
