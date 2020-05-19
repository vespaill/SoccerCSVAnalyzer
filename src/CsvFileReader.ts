import fs from "fs";

/**
 * Class for reading entries from a CSV file and store as rows in an array.
 */
export class CsvFileReader {
    /**
     * A 2D array of strings where the 1st dimension specifies a text line from
     * a CSV file and the 2nd dimension specifies one of the comma separated
     * value from that line.
     */
    data: string[][] = [];

    /**
     * Declares a public class member called 'filename' and gives it the given
     * argument value.
     * @param filename the name of the CSV file to be read.
     */
    constructor(public filename: string) {}

    /**
     * Reads a CSV file and stores it as a 2D array of strings.
     */
    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row: string): string[] => row.split(","));
    }
}
