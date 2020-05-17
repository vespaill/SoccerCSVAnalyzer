import fs from "fs";

/* Enum - Enumeration: Used to let other engineers know that this is a
   collection of closely related values.
   We only use enums when we know all the possible values while we are writing
   our code. */
   enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}

export class CsvFileReader {
    data: string[][] = [];
    /* Declare class member 'filename' */
    /* automatically initialized with constructor paramter */
    constructor(public filename: string) {}
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row: string): string[] => row.split(","))
            .forEach((row: string[]) => {
                row[0] = new Date(row[0]);
            })
    }
}
