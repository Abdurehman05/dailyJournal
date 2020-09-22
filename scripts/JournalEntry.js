/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const eventHub = document.querySelector(".container");
export const JournalEntryComponent = entry => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concept}</h3>
            <p>${entry.entry}</p> 
            <p>${entry.date}</p> 
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
            
        </section>
    `;
};