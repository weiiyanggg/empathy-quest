// --- Story Data Definition ---
// This object holds all the story nodes. Each key is a unique ID for a node,
// and its value is an object containing the text for that node and an array of choices.
// Each choice has text to display and a 'nextNode' property indicating which node to go to next.
// New properties for empathy project:
// - 'videoUrl': (Optional) URL of a video to play before displaying text/choices.
// - 'pov': (Optional) Text for the "Foreign domestic worker’s POV".
// - 'consequence': (Optional) Text for the "Consequence".
// - 'otherPersonThought': (Optional) Text for the "Other-Person Perspective".
// - 'imageDescription': (Optional) Text describing the image for this scene.
// - 'emotionalCue': (Optional) Text for the "Emotional Reinforcement/Discomfort Cue".
const story = {
    start: {
        // The story text will now include a placeholder for the player's name
        text: "You, <playerName>, stand at the edge of the Whispering Woods, a place shrouded in ancient mystery. A faint, ethereal glow emanates from within, beckoning you. Do you dare to enter?",
        choices: [
            { text: "Enter the woods.", nextNode: "stage1_ordering_food" }, // Changed to go to the new scene
            { text: "Turn back and leave.", nextNode: "path_turn_back" }
        ]
    },
    // --- Stage 1: Ordering Food ---
    stage1_ordering_food: {
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video added here for the first scene!
        text: "You are queuing at your favourite chicken rice stall. It's lunch hour, and the line is long. In front of you is a foreign domestic worker holding a small piece of paper with a few food orders scribbled on it. She seemed unsure and hesitant, and the stall uncle looked increasingly impatient. People behind you start sighing loudly. Your friends wave from another stall, shouting, “Just come over here lah.”",
        question: "How did you react?", // New property for a question
        choices: [
            { text: "A. I stepped out of the queue and joined my friends, it wasn’t worth the wait.", nextNode: "stage1_abd_outcome" },
            { text: "B. I stayed in line but kept my head down, it wasn’t my problem.", nextNode: "stage1_abd_outcome" },
            { text: "C. I gently offered to help the lady read out her order to the uncle.", nextNode: "stage1_c_outcome" },
            { text: "D. I walked away and complained to my friends that she was holding everyone up.", nextNode: "stage1_abd_outcome" }
        ]
    },
    stage1_c_outcome: {
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Video for positive outcome
        pov: "I’m not used to speaking Mandarin. I was afraid the uncle would scold me if I got the order wrong. When someone helped me, I felt seen and less alone.",
        consequence: "The lady smiles gratefully and thanks you in a soft voice. The stall uncle nods curtly but processes the order. The line moves on.",
        otherPersonThought: "“Thank you… I was so scared I would hold everyone up again.”",
        imageDescription: "Relief washing over her face.",
        emotionalCue: "Sometimes, a little help can lift the weight of someone else’s day.",
        choices: [
            { text: "Continue", nextNode: "stage2_seating_situation" } // Leads to Stage 2
        ]
    },
    stage1_abd_outcome: {
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video for negative outcome
        pov: "I felt so embarrassed. Everyone looked annoyed, and I wished someone could just help me. Maybe they thought I was just being slow or troublesome.",
        consequence: "The domestic worker fumbles with the order. The stall uncle snaps at her, “Next time be faster lah.” She walks away with teary eyes, muttering apologies.",
        otherPersonThought: "“I just want to get the food right. My employer will scold me again if I mess this up.”",
        imageDescription: "Her looking down at the paper, trying to pronounce the words.",
        emotionalCue: "She wasn’t just ordering food — she was carrying someone else’s expectations. You could’ve made it easier.",
        choices: [
            { text: "Continue", nextNode: "stage2_seating_situation" } // Leads to Stage 2
        ]
    },
    // --- Stage 2: The Seating Situation ---
    stage2_seating_situation: {
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Example video URL - REPLACE WITH YOUR VIDEO
        text: "After you got your food, your friends and you found a free table. You quickly chope-d it with tissue packets and bags. Just as you sat down, a pregnant woman with a small child approached and politely asked if she could share your table. You had three people and six seats.",
        question: "How did you respond?",
        choices: [
            { text: "A. I told her the seats were taken and avoided eye contact.", nextNode: "stage2_ab_outcome" },
            { text: "B. I let her sit but rolled my eyes and mumbled to my friends.", nextNode: "stage2_ab_outcome" },
            { text: "C. I offered her two seats with a smile and made space.", nextNode: "stage2_cd_outcome" },
            { text: "D. I asked my friends if we could give up the table for her and find another spot.", nextNode: "stage2_cd_outcome" }
        ]
    },
    stage2_ab_outcome: {
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video for negative outcome
        pov: "It’s hard to carry my child around looking for seats. I was hoping someone might let me rest. When they didn’t even look at me, I just felt invisible.",
        consequence: "The pregnant woman nods politely but walks away, guiding her child as they search for a seat.",
        otherPersonThought: "Child’s whispered voice: “Mommy, my legs hurt.”",
        imageDescription: "Child clutching her hand, tired.",
        emotionalCue: "Comfort doesn’t cost much. But choosing not to share has its own weight.",
        choices: [
            { text: "Continue", nextNode: "stage3_cleaning_up" } // Leads to Stage 3
        ]
    },
    stage2_cd_outcome: {
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Video for positive outcome
        pov: "She smiled at me and made space. I felt a bit more human again.",
        consequence: "The woman thanks you with a smile.",
        otherPersonThought: "A quiet thought from her: “So kind… my feet are so swollen today.”",
        imageDescription: "Her rubbing her back while smiling gently at you.",
        emotionalCue: "A small gesture. A big difference. This is how empathy lives — in the everyday.",
        choices: [
            { text: "Continue", nextNode: "stage3_cleaning_up" } // Leads to Stage 3
        ]
    },
    // --- Stage 3: Cleaning Up ---
    stage3_cleaning_up: {
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL - REPLACE WITH YOUR VIDEO
        text: "You finished eating and were ready to go. The tray return area was just a few steps away, but your friends walked off, leaving everything on the table. “The auntie will clear lah,” they said casually. You looked over and saw the elderly cleaner nearby, slowly pushing a heavy trolley, clearly worn out.",
        question: "What did you do?",
        choices: [
            { text: "A. I left my tray and followed my friends, it’s not like I’m paid to clean.", nextNode: "stage3_ab_outcome" },
            { text: "B. I returned my own tray but didn’t say anything about theirs.", nextNode: "stage3_ab_outcome" },
            { text: "C. I quietly cleared all our trays, even if it took longer.", nextNode: "stage3_cd_outcome" },
            { text: "D. I asked my friends to return the trays together and smiled at the cleaner auntie.", nextNode: "stage3_cd_outcome" }
        ]
    },
    stage3_ab_outcome: {
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Video for negative outcome
        consequence: "The cleaner auntie walks over slowly, sighs, and starts clearing multiple trays alone. You see her hand trembling slightly.",
        otherPersonThought: "Her tired inner voice: “Ah, my back hurts again… So many young ones don’t bother anymore.”",
        imageDescription: "Her pausing briefly to catch her breath.",
        emotionalCue: "She’s not invisible. Just overlooked.",
        choices: [
            { text: "Continue", nextNode: "end_story" } // Leads to a final end scene
        ]
    },
    stage3_cd_outcome: {
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video for positive outcome
        consequence: "You clear the trays. The auntie nods gratefully, her eyes softening. You notice a faint smile.",
        otherPersonThought: "Her thought: “Wah, so polite. Good kids still exist.”",
        imageDescription: "Her watching you walk away with a small nod.",
        emotionalCue: "Respect isn’t about doing big things. Sometimes, it’s just about noticing others.",
        choices: [
            { text: "Continue", nextNode: "end_story" } // Leads to a final end scene
        ]
    },
    // --- Final End Scene ---
    end_story: {
        text: "You have reached the end of this empathy journey. Every choice, big or small, shapes the world around us. Thank you for playing, <playerName>!",
        choices: [
            { text: "Play Again", nextNode: "start" }
        ]
    },
    // --- Existing Story Nodes (Kept for now, but will be replaced by your empathy scenarios) ---
    path_turn_back: {
        text: "You decide the woods are too foreboding and turn back. The mysterious glow fades behind you as you return to the familiar world. Your adventure ends here, for now.",
        choices: [
            { text: "Start Over", nextNode: "start" }
        ]
    },
    // The following nodes from the old story are no longer part of the main empathy flow.
    // They are kept here for reference but will eventually be removed or repurposed.
    // path_entrance: { ... }, path_hum: { ... }, path_darker: { ... },
    // action_touch_orb: { ... }, action_drink_pool: { ... }, action_observe: { ... },
    // action_examine_symbols: { ... }, action_leave_altar: { ... },
    // ending_knowledge: { ... }, ending_strength: { ... }, ending_wisdom: { ... }, ending_quest: { ... }
};

// --- Game State Variables ---
let currentStoryNode = 'start';
let playerName = 'Adventurer'; // Default name
let playerGender = null; // Stores the selected gender ('male' or 'female')

// --- DOM Element References ---
// General Body Reference
const bodyElement = document.body; // Reference to the body element

// Home Page Elements
const homePage = document.getElementById('home-page');
const playerNameInput = document.getElementById('playerName');
const startButton = document.getElementById('startButton');
const genderMaleInput = document.getElementById('genderMale');
const genderFemaleInput = document.getElementById('genderFemale');
const genderOptions = document.querySelectorAll('.gender-option'); // For styling updates

// Background Sprite Elements
const backgroundMaleSprite = document.getElementById('backgroundMaleSprite');
const backgroundFemaleSprite = document.getElementById('backgroundFemaleSprite');

// Story Page Elements
const storyPage = document.getElementById('story-page');
const storyTextElement = document.getElementById('story-text');
const storyQuestionElement = document.getElementById('story-question');
const choicesElement = document.getElementById('choices');
const videoContainer = document.getElementById('video-container');
const storyVideo = document.getElementById('story-video');
const videoLoadingSpinner = document.getElementById('video-loading-spinner');

// Elements for empathy project feedback
const povElement = document.getElementById('pov-text');
const consequenceElement = document.getElementById('consequence-text');
const otherPersonThoughtElement = document.getElementById('other-person-thought');
const imageDescriptionElement = document.getElementById('image-description');
const emotionalCueElement = document.getElementById('emotional-cue');


// --- Functions ---

/**
 * Clears all dynamic content elements.
 */
function clearContent() {
    storyTextElement.textContent = '';
    storyQuestionElement.textContent = '';
    choicesElement.innerHTML = '';
    povElement.textContent = '';
    consequenceElement.textContent = '';
    otherPersonThoughtElement.textContent = '';
    imageDescriptionElement.textContent = '';
    emotionalCueElement.textContent = '';

    // Hide all empathy-specific elements by default
    storyTextElement.classList.add('hidden');
    storyQuestionElement.classList.add('hidden');
    choicesElement.classList.add('hidden');
    videoContainer.classList.add('hidden');
    videoLoadingSpinner.classList.add('hidden');
    povElement.classList.add('hidden');
    consequenceElement.classList.add('hidden');
    otherPersonThoughtElement.classList.add('hidden');
    imageDescriptionElement.classList.add('hidden');
    emotionalCueElement.classList.add('hidden');

    // Ensure video is paused and reset when content is cleared
    storyVideo.pause();
    storyVideo.currentTime = 0;
}


/**
 * Updates the display with the text and choices of the current story node.
 * Handles video playback if a videoUrl is present for the node.
 */
function updateDisplay() {
    clearContent(); // Clear all content before displaying new scene

    const node = story[currentStoryNode];

    // If the node has a video, play it first
    if (node.videoUrl) {
        // Add 'video-playing' class to body to trigger full-screen video overlay
        bodyElement.classList.add('video-playing');
        videoContainer.classList.remove('hidden'); // Show video container
        storyVideo.src = node.videoUrl;
        storyVideo.load(); // Load the video

        // Show spinner while video is loading
        videoLoadingSpinner.classList.remove('hidden');

        storyVideo.oncanplaythrough = () => {
            videoLoadingSpinner.classList.add('hidden'); // Hide spinner once playable
            storyVideo.play().catch(error => {
                console.error("Autoplay prevented:", error);
                // Inform user to manually play or provide a play button
                storyTextElement.textContent = "Video requires user interaction to play. Please click the video to continue.";
                storyTextElement.classList.remove('hidden');
                // Still hide choices until manually played or a timeout
                choicesElement.classList.add('hidden');
                // Even with autoplay prevented, remove video-playing class to show content
                bodyElement.classList.remove('video-playing');
                displayStoryContent(node); // Show text and choices
            });
        };

        // When video ends, show story text and choices
        storyVideo.onended = () => {
            storyVideo.pause();
            videoContainer.classList.add('hidden'); // Hide video container
            bodyElement.classList.remove('video-playing'); // Remove video-playing class
            displayStoryContent(node); // Show text and choices
        };

        // Handle video errors
        storyVideo.onerror = () => {
            console.error("Error loading video:", storyVideo.error);
            videoLoadingSpinner.classList.add('hidden'); // Hide spinner on error
            videoContainer.classList.add('hidden'); // Hide video container
            bodyElement.classList.remove('video-playing'); // Remove video-playing class
            storyTextElement.textContent = "Error loading video. Skipping to story content.";
            storyTextElement.classList.remove('hidden');
            displayStoryContent(node); // Fallback to story content
        };

        // Disable choices while video is playing/loading
        choicesElement.innerHTML = ''; // Clear choices
    } else {
        // If no video, just display story content immediately
        bodyElement.classList.remove('video-playing'); // Ensure video-playing class is off
        displayStoryContent(node);
    }
}

/**
 * Displays the story text, question, choices, and empathy feedback for a given node.
 * @param {object} node - The current story node object.
 */
function displayStoryContent(node) {
    // Replace the placeholder with the actual player's name
    let displayText = node.text ? node.text.replace(/<playerName>/g, playerName) : '';
    storyTextElement.textContent = displayText;
    if (node.text) storyTextElement.classList.remove('hidden');

    // Display question if present
    if (node.question) {
        storyQuestionElement.textContent = node.question;
        storyQuestionElement.classList.remove('hidden');
    }

    // Display choices if present
    if (node.choices && node.choices.length > 0) {
        choicesElement.innerHTML = ''; // Clear previous choices
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice.text;

            button.addEventListener('click', () => {
                handleChoice(choice.nextNode);
            });

            choicesElement.appendChild(button);
        });
        choicesElement.classList.remove('hidden'); // Show choices
    }

    // Display empathy feedback elements if present
    if (node.pov) {
        povElement.textContent = `Foreign domestic worker’s POV: "${node.pov}"`;
        povElement.classList.remove('hidden');
    }
    if (node.consequence) {
        consequenceElement.textContent = `Consequence: ${node.consequence}`;
        consequenceElement.classList.remove('hidden');
    }
    if (node.otherPersonThought) {
        otherPersonThoughtElement.textContent = `Other-Person Perspective: ${node.otherPersonThought}`;
        otherPersonThoughtElement.classList.remove('hidden');
    }
    if (node.imageDescription) {
        imageDescriptionElement.textContent = `[Image: ${node.imageDescription}]`; // Display as text for now
        imageDescriptionElement.classList.remove('hidden');
    }
    if (node.emotionalCue) {
        emotionalCueElement.textContent = `Emotional Reinforcement: "${node.emotionalCue}"`;
        emotionalCueElement.classList.remove('hidden');
    }
}


/**
 * Handles a user's choice, updates the current story node, and refreshes the display.
 * @param {string} nextNodeId - The ID of the next story node to transition to.
 */
function handleChoice(nextNodeId) {
    currentStoryNode = nextNodeId;
    updateDisplay();
    // If returning to the start, remove the full-screen class
    if (nextNodeId === 'start') {
        bodyElement.classList.remove('story-active');
    }
}

/**
 * Updates the visual state of gender options (labels and background sprites) based on selection.
 */
function updateGenderSelectionVisuals() {
    // Update the clickable labels (text)
    genderOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio.checked) {
            option.classList.add('selected'); // Add a class for selected state
        } else {
            option.classList.remove('selected'); // Remove for unselected
        }
    });

    // Update the background sprites
    if (playerGender === 'male') {
        backgroundMaleSprite.classList.add('selected-sprite');
        backgroundFemaleSprite.classList.remove('selected-sprite');
    } else if (playerGender === 'female') {
        backgroundFemaleSprite.classList.add('selected-sprite');
        backgroundMaleSprite.classList.remove('selected-sprite');
    } else {
        // No gender selected, reset both sprites
        backgroundMaleSprite.classList.remove('selected-sprite');
        backgroundFemaleSprite.classList.remove('selected-sprite');
    }
}

/**
 * Handles the start of the game from the home page.
 * Gets the player's name, hides the home page, and shows the story page.
 */
function startGame() {
    // Get the player's name from the input field.
    // Trim whitespace and use a default if empty.
    playerName = playerNameInput.value.trim();
    if (playerName === '') {
        playerName = 'Adventurer'; // Default name if nothing is entered
    }

    // Check if a gender has been selected
    if (!playerGender) {
        // Using a custom message box instead of alert()
        const messageBox = document.createElement('div');
        messageBox.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50');
        messageBox.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-xl text-center">
                <p class="text-xl font-semibold text-gray-800 mb-6">Please select your avatar gender to begin your story!</p>
                <button id="closeMessageBox" class="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors">
                    OK
                </button>
            </div>
        `;
        document.body.appendChild(messageBox);

        document.getElementById('closeMessageBox').addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
        return; // Stop the function if no gender is selected
    }

    // Add the 'story-active' class to the body to trigger full-screen styles and hide sprites
    bodyElement.classList.add('story-active');

    // Hide the home page
    homePage.classList.add('hidden');
    // Show the story page
    storyPage.classList.remove('hidden');

    // Start the story display
    updateDisplay();
}

// --- Event Listeners ---
// Add event listener to the start button to begin the game.
startButton.addEventListener('click', startGame);

// Add event listeners for gender selection radio buttons
genderMaleInput.addEventListener('change', (event) => {
    if (event.target.checked) {
        playerGender = 'male';
        updateGenderSelectionVisuals();
    }
});

genderFemaleInput.addEventListener('change', (event) => {
    if (event.target.checked) {
        playerGender = 'female';
        updateGenderSelectionVisuals();
    }
});

// Initial update of gender visuals (in case one is pre-selected or for default state)
// This is important if you later decide to pre-select one gender
updateGenderSelectionVisuals();

// --- Initial Setup ---
// Initially, only the home page is visible (handled by HTML 'hidden' class on story-page).
// No initial updateDisplay call needed here as the game starts via button click.
