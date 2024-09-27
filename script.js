// UI Elements
const categoriesContainer = document.getElementById('categories-container');
const questionsSection = document.getElementById('questions-section');
const questionsContainer = document.getElementById('questions-container');
const nfrsSection = document.getElementById('nfrs-section');
const nfrsList = document.getElementById('nfrs-list');

// Toggle selected state of a category button and show questions for that category
function toggleCategoryButton(button, category) {
    // If allowing multiple categories to be selected, this block can be omitted.
    // Only allow one selected category at a time
    Array.from(categoriesContainer.children).forEach(btn => btn.classList.remove('selected'));

    // Toggle the selected state
    button.classList.toggle('selected');

    // Show questions based on the selected state
    if (button.classList.contains('selected')) {
        showQuestions(category.subCategories);
    } else {
        questionsSection.style.display = 'none';  // Hide questions if deselected
    }
}

// Populate categories
categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category.category;

    button.onclick = () => toggleCategoryButton(button, category);
    
    categoriesContainer.appendChild(button);
});

// Show questions for selected category
function showQuestions(subCategories) {
    questionsContainer.innerHTML = ''; // Clear existing questions

    subCategories.forEach(subCategory => {
        if (questions[subCategory]) {
            questions[subCategory].forEach(questionObj => {
                const button = document.createElement('button');
                button.className = 'question-button';
                button.textContent = questionObj.question;
                button.onclick = () => toggleNFR(questionObj.subCategory, button);
                questionsContainer.appendChild(button);
            });
        }
    });

    questionsSection.style.display = 'block'; // Show questions section
}

// Toggle NFRs when a question is selected/deselected
function toggleNFR(subCategory, button) {
    button.classList.toggle('selected');
    const selected = button.classList.contains('selected');
    
    // Retrieve the current list of NFRs (existing + new ones to be added)
    let currentNfrs = Array.from(nfrsList.children).map(li => li.dataset.nfrId);

    if (selected) {
        // Add the new NFRs to the current list
        if (nfrs[subCategory]) {
            nfrs[subCategory].forEach(nfr => {
                if (!currentNfrs.includes(nfr.id)) {
                    currentNfrs.push(nfr.id);  // Only add if not already present

                    // Create an LI element to hold the NFR
                    const li = document.createElement('li');
                    li.dataset.nfrId = nfr.id;  // Store the NFR ID as a data attribute
                    
                    // Create individual span elements for each part
                    const statusSpan = document.createElement('span');
                    statusSpan.textContent = nfr.status === "M" ? "M" : "S";  // M for Must, S for Should
                    
                    const idSpan = document.createElement('span');
                    idSpan.textContent = `[${nfr.id}] `;
                    idSpan.style.fontWeight = 'bold';  // Make the ID bold

                    const labelSpan = document.createElement('span');
                    labelSpan.textContent = nfr.label;

                    // Append each part to the LI element
                    li.appendChild(statusSpan);
                    li.appendChild(idSpan);
                    li.appendChild(labelSpan);

                    // Add the LI element to the NFR list
                    nfrsList.appendChild(li);
                }
            });
        }
    } else {
        // Remove deselected NFRs from the current list
        currentNfrs = currentNfrs.filter(id => !nfrs[subCategory].some(nfr => nfr.id === id));
        Array.from(nfrsList.children).forEach(li => {
            if (nfrs[subCategory].some(nfr => nfr.id === li.dataset.nfrId)) {
                nfrsList.removeChild(li);
            }
        });
    }

    // Sort and toggle NFR section visibility
    nfrsSection.style.display = nfrsList.children.length > 0 ? 'block' : 'none';
    document.getElementById('download-button').style.display = nfrsList.children.length > 0 ? 'inline-block' : 'none';
}

