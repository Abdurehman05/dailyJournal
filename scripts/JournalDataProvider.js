import { JournalEntryComponent } from "./JournalEntry.js";

let journal = [];

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    );
    return sortedByDate;
};

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(entries => {
            let allEntries = entries.map(entry => {
                let entryHTML = JournalEntryComponent(entry);
                allEntries += entryHTML;
                return allEntries;
            });
            entryLog.innerHTML = allEntries.join("");
        });
};