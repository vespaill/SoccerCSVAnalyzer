import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
    data: string[][];
    read(): void;
}

export class MatchReader {
    /**
     *
     */
    matches: MatchData[] = [];

    /* This constructor defines another public member 'reader' and this is
       initialized with a given argument that must satiesfy the DataReader
       interface. */
    constructor(public reader: DataReader) {}

    /**
     * Parses's the reader's data into an array of MatchData.
     */
    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            /* Type assertion. Consider this value as one of the possible
               values of MatchResult ('H', 'A', 'D')  */
            row[5] as MatchResult,
            row[6]
        ])
    }
}