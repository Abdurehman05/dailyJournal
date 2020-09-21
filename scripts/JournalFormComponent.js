import { getEntries, useJournalEntries } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".entryFormContainer");

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
            <div class="box"> <textarea type="text" name="journalEntry" d="conceptsCovered" cols="70" rows="15"></textarea></div>
        </fieldset>
                
        <fieldset>
            <div class="box"> <label for="mood">Mood for the day</label></div>
            <div class="box"> 
                <select class="dropdown" name="mood" id="mood--list">
                    <option value="0">Please select mood for the day...</option>
                    ${entryArray
                      .map(entryObj => {
                        return `<option value="${entryObj.id}">${entryObj.mood}</option>`;
                      })
                      .join("")} 
                </select>
            </div>  
        </fieldset>
            <button type="submit">Record Journal Entry</button>
    </form>

    `;
};

export const JournalFormComponent = () => {
  getEntries().then(() => {
    render(useJournalEntries());
  });
};