import fs from "fs";

/* <T> is a reference to a generic type */
export abstract class CsvFileReader<T> {
    data: T[] = [];

    /* Declare class member 'filename' */
    /* automatically initialized with constructor paramter */
    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row: string): string[] => row.split(","))
            .map(this.mapRow);
    }

}
