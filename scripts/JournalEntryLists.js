import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".journalEntry");

export const EntryListComponent = () => {
    getEntries()
        .then(useJournalEntries)
        .then(addEntriesToDom);
};

const addEntriesToDom = anEntryArray => {
    let HTMLArray = anEntryArray.map(entryObj => {
        return JournalEntryComponent(entryObj);
    });
    contentTarget.innerHTML = HTMLArray.join("");
};

eventHub.addEventListener("journalStateChanged", () => {
    EntryListComponent();
});