import {
    saveJournalEntry,
    getEntries,
    useJournalEntries
} from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryLists.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".entryFormContainer");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordJournal") {
        const entryContent = document.querySelector("#journalEntry");
        const dateContent = document.querySelector("#journalDate");
        const conceptContent = document.querySelector("#conceptsCovered");
        const moodContent = document.querySelector("#mood--list");

        if (moodContent.value !== "0") {
            const newEntry = {
                date: dateContent.value,
                concept: conceptContent.value,
                entry: entryContent.value,
                mood: moodContent.value
            };
            saveJournalEntry(newEntry);
            render();
        } else {
            window.alert("Mood is not chosen");
        }
    }
});
const render = entryArray => {
    contentTarget.innerHTML = `

    <form>

        <fieldset>
            <div class="box"> <label for="journalDate">Date of entry </label></div>
            <div class="box"> <input class="box" type="date" name="journalDate" id="journalDate"></div>
        </fieldset>
        
        <fieldset>
            <div class="box"> <label for="conceptsCovered">Concepts Covered </label></div>
            <div class="box"> <input type="text" name="conceptsCovered" id="conceptsCovered"></div>
        </fieldset>
                
        <fieldset>
            <div class="box"> <label for="journalEntry">Journal Entry </label></div>
            <div class="box"> <textarea type="text" name="journalEntry" id="journalEntry" cols="70" rows="15"></textarea></div>
        </fieldset>
                
        <fieldset>
            <div class="box"> <label for="mood">Mood for the day</label></div>
            <div class="box"> 
                <select class="dropdown" name="mood" id="mood--list">
                    <option value="0">Mood for the day</option>
                    <option value="ok">OK</option>
                    <option value="sad">Sad</option>
                    <option value="exited">Exited</option>
                    <option value="content">Content</option>
                    <option value="stressed">Stressed</option>
                    <option value="energetic">Energetic</option>
                </select>
            </div>  
        </fieldset>
            <button id="recordJournal" type="button">Record Journal Entry</button>
    </form>

    `;
};

export const JournalFormComponent = () => {
    getEntries().then(() => {
        render(useJournalEntries());
    });
};