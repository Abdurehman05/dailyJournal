const journalURL = "http://localhost:8088/entries";

let journal = [];

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    );
    return sortedByDate;
};

export const getEntries = () => {
    return fetch(journalURL)
        .then(response => response.json())
        .then(parsedRes => {
            journal = parsedRes;
        });
};