import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult"

/* Tuple declaration */
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            /* Type assertion. Consider this value as one of the possible
               values of MatchResult ('H', 'A', 'D')  */
            row[5] as MatchResult,
            row[6]
        ];
    }

}