import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

export const EntryListComponent = () => {
    getEntries().then(() => {
        const entryArray = useJournalEntries();
        console.log("EntryArray", entryArray);
        addEntriesToDom(entryArray);
    });
};

const addEntriesToDom = anEntryArray => {
    const contentElement = document.querySelector(".journalEntry");

    let HTMLArray = anEntryArray.map(singleEntry => {
        return JournalEntryComponent(singleEntry);
    });
    contentElement.innerHTML = HTMLArray.join("");
};