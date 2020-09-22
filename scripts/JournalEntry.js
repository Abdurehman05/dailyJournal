/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const eventHub = document.querySelector(".container");
export const JournalEntryComponent = entry => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <p>${entry.entry} ${entry.date}</p> 
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
            
        </section>
    `;
};