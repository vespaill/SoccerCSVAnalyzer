/**
 * Takes a 'dd/mm/yyyy' date string and returns a Date object.
 * @param dateString String representing a date with format 'dd/mm/yyyy'
 */
export const dateStringToDate = (dateString: string): Date => {
    /* '20/10/2018'  =>  [20, 10, 2018] */
    const dateParts = dateString.split("/").map(value => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
