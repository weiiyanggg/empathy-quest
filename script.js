// --- Story Data Definition ---
// This object holds all the story nodes. Each key is a unique ID for a node,
// and its value is an object containing the text for that node and an array of choices.
// Each choice has text to display and a 'nextNode' property indicating which node to go to next.
const story = {
    start: {
        text: "You stand at the edge of the Whispering Woods, a place shrouded in ancient mystery. A faint, ethereal glow emanates from within, beckoning you. Do you dare to enter?",
        choices: [
            { text: "Enter the woods.", nextNode: "path_entrance" },
            { text: "Turn back and leave.", nextNode: "path_turn_back" }
        ]
    },
    path_entrance: {
        text: "As you step into the woods, the air grows heavy and the trees seem to lean in, their branches forming a tangled canopy. You hear a soft, melodic hum. Ahead, the path splits.",
        choices: [
            { text: "Follow the hum deeper into the woods.", nextNode: "path_hum" },
            { text: "Take the less-traveled, darker path.", nextNode: "path_darker" }
        ]
    },
    path_turn_back: {
        text: "You decide the woods are too foreboding and turn back. The mysterious glow fades behind you as you return to the familiar world. Your adventure ends here, for now.",
        choices: [
            { text: "Start Over", nextNode: "start" }
        ]
    },
    path_hum: {
        text: "The melodic hum grows louder, leading you to a clearing bathed in moonlight. In the center, a shimmering pool glows with an otherworldly light. A small, glowing orb floats above it.",
        choices: [
            { text: "Touch the orb.", nextNode: "action_touch_orb" },
            { text: "Drink from the pool.", nextNode: "action_drink_pool" },
            { text: "Observe from a distance.", nextNode: "action_observe" }
        ]
    },
    path_darker: {
        text: "The darker path is overgrown and silent. You stumble upon an ancient, moss-covered stone altar. Strange symbols are carved into its surface.",
        choices: [
            { text: "Examine the symbols closely.", nextNode: "action_examine_symbols" },
            { text: "Leave the altar and search for another path.", nextNode: "action_leave_altar" }
        ]
    },
    action_touch_orb: {
        text: "As your fingers brush the orb, a surge of energy flows through you. You feel connected to the woods, understanding its ancient secrets. You gain knowledge.",
        choices: [
            { text: "Continue your journey with new insight.", nextNode: "ending_knowledge" }
        ]
    },
    action_drink_pool: {
        text: "The water tastes like starlight and ancient earth. You feel invigorated, your senses heightened. The woods seem more vibrant, alive. You gain strength.",
        choices: [
            { text: "Continue your journey with new vitality.", nextNode: "ending_strength" }
        ]
    },
    action_observe: {
        text: "You observe the orb and pool from a safe distance. Nothing happens immediately, but you feel a subtle shift in the air, a quiet understanding of the woods' magic. You gain wisdom.",
        choices: [
            { text: "Continue your journey with newfound wisdom.", nextNode: "ending_wisdom" }
        ]
    },
    action_examine_symbols: {
        text: "The symbols pulse faintly as you touch them. A vision flashes before your eyes: ancient guardians of the woods. You realize you've awakened something. You gain a quest.",
        choices: [
            { text: "Seek out the ancient guardians.", nextNode: "ending_quest" }
        ]
    },
    action_leave_altar: {
        text: "You decide not to disturb the altar and find a winding path that leads you out of the deeper woods and back towards the edge. You feel relieved but also a sense of missed opportunity.",
        choices: [
            { text: "Return to the start of the woods.", nextNode: "start" }
        ]
    },
    ending_knowledge: {
        text: "With newfound knowledge, you become a revered scholar of the Whispering Woods, deciphering its mysteries for generations to come. A peaceful and insightful end.",
        choices: [
            { text: "Play Again", nextNode: "start" }
        ]
    },
    ending_strength: {
        text: "Empowered by the pool, you become a protector of the Whispering Woods, safeguarding its magic from all threats. A brave and enduring end.",
        choices: [
            { text: "Play Again", nextNode: "start" }
        ]
    },
    ending_wisdom: {
        text: "Your quiet observation grants you profound wisdom. You become a silent guide, subtly influencing the balance of the woods. A subtle and impactful end.",
        choices: [
            { text: "Play Again", nextNode: "start" }
        ]
    },
    ending_quest: {
        text: "Your quest to find the ancient guardians leads you on many perilous adventures, forever entwined with the fate of the Whispering Woods. An epic and challenging end.",
        choices: [
            { text: "Play Again", nextNode: "start" }
        ]
    }
};

// --- Game State Variables ---
// `currentStoryNode` keeps track of the player's current position in the story.
let currentStoryNode = 'start';

// --- DOM Element References ---
// Get references to the HTML elements where the story text and choices will be displayed.
const storyTextElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');

// --- Functions ---

/**
 * Updates the display with the text and choices of the current story node.
 */
function updateDisplay() {
    // Get the data for the current node from the 'story' object.
    const node = story[currentStoryNode];

    // Update the story text element with the current node's text.
    storyTextElement.textContent = node.text;

    // Clear any existing choice buttons to prepare for new ones.
    choicesElement.innerHTML = '';

    // Loop through each choice defined for the current node.
    node.choices.forEach(choice => {
        // Create a new button element for each choice.
        const button = document.createElement('button');
        // Add the 'choice-button' class for styling (from style.css).
        button.classList.add('choice-button');
        // Set the button's text content.
        button.textContent = choice.text;

        // Add an event listener to the button. When clicked, call handleChoice with the nextNode ID.
        button.addEventListener('click', () => {
            handleChoice(choice.nextNode);
        });

        // Append the newly created button to the choices container.
        choicesElement.appendChild(button);
    });
}

/**
 * Handles a user's choice, updates the current story node, and refreshes the display.
 * @param {string} nextNodeId - The ID of the next story node to transition to.
 */
function handleChoice(nextNodeId) {
    // Update the current story node to the chosen next node.
    currentStoryNode = nextNodeId;
    // Refresh the display to show the new story text and choices.
    updateDisplay();
}

// --- Initial Game Setup ---
// Call updateDisplay() once when the script loads to show the very first story node.
// This effectively starts the interactive story.
updateDisplay();
