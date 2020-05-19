import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
    data: string[][];
    read(): void;
}

export class MatchReader {
    /**
     * Array of MatchData tuples.
     */
    matches: MatchData[] = [];
    /**
     * Defines public member 'reader' and initializes it with given argument
     * @param reader Object that satisfies the DataReader interface.
     */
    constructor(public reader: DataReader) {}
    /**
     * Takes the name of a CSV file and uses it to initialize a MatchReader with
     * 'CsvFileReader' as its reader.
     * @param filename name of the CSV file to read.
     */
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }
    /**
     * Parses's the reader's data into an array of MatchData tuples.
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