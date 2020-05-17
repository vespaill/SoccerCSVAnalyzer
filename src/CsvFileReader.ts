import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

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
            .map((row: string[]): any => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    /* Type assertion. Consider this value as one of the
                       possible values of MatchResult ('H', 'A', 'D')  */
                    row[5] as MatchResult,
                    row[6]
                ];
            });
    }
}
