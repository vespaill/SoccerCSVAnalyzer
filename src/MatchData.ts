import { MatchResult } from "./MatchResult";

/* Tuple declaration: a MatchData is an essentially an array that must have
   these types and in this exact order. */
export type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];
