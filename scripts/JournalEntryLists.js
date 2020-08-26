import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {

    const contentElement = document.querySelector(".journalEntry")

    const entries = useJournalEntries()

    let entryHTMLRepresentations = "";

    for (const entry of entries) {

        entryHTMLRepresentations += JournalEntryComponent(entry)

    }

    contentElement.innerHTML += `
    ${entryHTMLRepresentations}
    `
}