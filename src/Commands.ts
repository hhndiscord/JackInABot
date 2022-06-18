import { Command } from "./Command";
import { Weeknd } from "./commands/Weeknd";
import { ShowSpoilers } from "./commands/ShowSpoilers";

export const Commands: Command[] = [Weeknd, ShowSpoilers];
export const EphemeralCommands: Command[] = [ShowSpoilers];
