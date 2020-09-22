const journalURL = "http://localhost:8088/entries";

let journal = [];

const eventHub = document.querySelector(".container");
// broadcast to the application that the state of the journal entries has changed
const dispatchStateChangeEvent = () => {
    const journalEntryStateChangeEvent = new CustomEvent("journalStateChanged");
    eventHub.dispatchEvent(journalEntryStateChangeEvent);
};

export const getEntries = () => {
    return fetch(journalURL)
        .then(response => response.json())
        .then(parsedRes => {
            journal = parsedRes;
        });
};

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    );
    return sortedByDate;
};

export const saveJournalEntry = newEntryObj => {
    return fetch(journalURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObj)
        })
        .then(() => {
            getEntries();
        })
        .then(dispatchStateChangeEvent);
};

export const deleteEntry = id => {
    return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE"
        })
        .then(getEntries)
        .then(dispatchStateChangeEvent);
};