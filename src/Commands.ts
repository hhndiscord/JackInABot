import { Command } from "./Command";
import { Weeknd } from "./commands/Weeknd";
import { EarlyEntry } from "./commands/EarlyEntry";
import { ShowSpoilers } from "./commands/ShowSpoilers";
import { Countdown } from "./commands/Countdown";
import { Roles } from "./commands/Roles";
import {
  CheckTime,
  ResetTime,
  StartTime,
  StopTime,
} from "./commands/MovieNight/MovieNightCommands";

export const Commands: Command[] = [
  Weeknd,
  EarlyEntry,
  Roles,
  StartTime,
  StopTime,
  CheckTime,
  ResetTime,
];
export const EphemeralCommands: Command[] = [];
