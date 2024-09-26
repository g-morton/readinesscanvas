// UI Elements
const categoriesContainer = document.getElementById('categories-container');
const questionsSection = document.getElementById('questions-section');
const questionsContainer = document.getElementById('questions-container');
const nfrsSection = document.getElementById('nfrs-section');
const nfrsList = document.getElementById('nfrs-list');

// Populate categories
categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category.category;
    button.onclick = () => showQuestions(category.subCategories);
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

function toggleNFR(subCategory, button) {
    button.classList.toggle('selected');
    const selected = button.classList.contains('selected');
    
    // Retrieve the current list of NFRs (existing + new ones to be added)
    let currentNfrs = Array.from(nfrsList.children).map(li => li.textContent);

    if (selected) {
        // Add the new NFRs to the current list
        if (nfrs[subCategory]) {
            nfrs[subCategory].forEach(nfr => {
                if (!currentNfrs.includes(nfr)) {
                    currentNfrs.push(nfr);  // Only add if not already present
                }
            });
        }
    } else {
        // Remove deselected NFRs from the current list
        if (nfrs[subCategory]) {
            currentNfrs = currentNfrs.filter(nfr => !nfrs[subCategory].includes(nfr));
        }
    }

    // Sort the NFRs: 'MUST' items first
    let mustItems = currentNfrs.filter(nfr => nfr.includes('MUST'));
    let otherItems = currentNfrs.filter(nfr => !nfr.includes('MUST'));
    let sortedNfrs = [...mustItems, ...otherItems];  // 'MUST' first

    // Clear the list and repopulate it with the sorted NFRs
    nfrsList.innerHTML = '';
    sortedNfrs.forEach(nfr => {
        const li = document.createElement('li');
        li.textContent = nfr;
        nfrsList.appendChild(li);
    });

    // Toggle NFR section visibility
    nfrsSection.style.display = nfrsList.children.length > 0 ? 'block' : 'none';
}


function downloadNFRs() {
    let nfrText = Array.from(nfrsList.children).map(li => li.textContent).join('\n');
    
    // Create a Blob with the NFR text content
    let blob = new Blob([nfrText], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Requirement_Considerations.txt'; // File name
    link.click();
}

// Attach the download function to the button
document.getElementById('download-button').addEventListener('click', downloadNFRs);