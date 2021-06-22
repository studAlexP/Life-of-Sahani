/**
 * Creates the feedback form
 */
function createFeedBack() {
    let form = document.getElementById("form");
    form.appendChild(createPTag("Is this the first time you have visited our website?", "question"))
    form.appendChild(createInput("yes", "answer", "radio", "yes"));
    form.appendChild(createLabel("yes", " yes "));
    form.appendChild(createInput("no", "answer", "radio", "no"));
    form.appendChild(createLabel("no", " no "));
    form.appendChild(createPTag("What is the primary reason you came to our website?", "question"));
    form.appendChild(createTextarea("answerToReason", "reason", "20"));
    form.appendChild(createPTag("Did you find what you needed?", "question"));
    form.appendChild(createInput("all", "found", "radio", "Yes, all of it"));
    form.appendChild(createLabel("all", "Yes, all of it"));
    form.appendChild(createInput("some", "found", "radio", "Yes, some of it"));
    form.appendChild(createLabel("some", "Yes, some of it"));
    form.appendChild(createInput("none", "found", "radio", "No, none of it"));
    form.appendChild(createLabel("none", "No, none of it"));
    form.appendChild(createPTag("Is our website easy to use?", "question"));
    form.appendChild(createInput("very_professional", "professional", "radio", "answer"));
    form.appendChild(createLabel("very_easy", "Very Easy"));
    form.appendChild(createInput("easy", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("easy", "Easy"));
    form.appendChild(createInput("average", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("average", "Average"));
    form.appendChild(createInput("difficult", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("difficult", "Difficult"));
    form.appendChild(createInput("very_difficult", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("very_difficult", "Very Difficult"));
    form.appendChild(createPTag("Is our website professional?", "question"));
    form.appendChild(createInput("very_professional", "professionall", "radio", "answer"));
    form.appendChild(createLabel("very_professional", "Very Professional"));
    form.appendChild(createInput("professional", "professionall", "radio", "answer"));
    form.appendChild(createLabel("professional", "Professional"));
    form.appendChild(createInput("average", "professionall", "radio", "answer"));
    form.appendChild(createLabel("average", "Average"));
    form.appendChild(createInput("difficult", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("difficult", "Difficult"));
    form.appendChild(createInput("very_difficult", "difficulty", "radio", "answer"));
    form.appendChild(createLabel("very_difficult", "Very Difficult"));
    form.appendChild(createPTag("Is our website informative?", "question"));
    form.appendChild(createInput("very_informative", "informative", "radio", "answer"));
    form.appendChild(createLabel("very_informative", "Very Informative"));
    form.appendChild(createInput("informative", "informative", "radio", "answer"));
    form.appendChild(createLabel("informative", "Informative"));
    form.appendChild(createInput("average", "average", "radio", "answer"));
    form.appendChild(createLabel("average", "Average"));
    form.appendChild(createInput("notinformative", "notinformative", "radio", "answer"));
    form.appendChild(createLabel("notinformative", "Not informative"));
    form.appendChild(createPTag("Is our website visually pleasing?", "question"));
    form.appendChild(createInput("yes", "visuallypleasing", "radio", "answer"));
    form.appendChild(createLabel("yes", "Yes"));
    form.appendChild(createInput("not_at_all", "not_at_all", "radio", "answer"));
    form.appendChild(createLabel("not_at_all", "Not at all"));
    form.appendChild(createInput("no", "no", "radio", "answer"));
    form.appendChild(createLabel("no", "No"));
    form.appendChild(createPTag("What is the likelihood that you will visit our website again?", "question", null));
    form.appendChild(createInput("very_likely", "visit_again", "radio", "answer"));
    form.appendChild(createLabel("very_likely", "Very likely"));
    form.appendChild(createInput("likely", "visit_again", "radio", "answer"));
    form.appendChild(createLabel("likely", "Likely"));
    form.appendChild(createInput("slightly_likely", "visit_again", "radio", "answer"));
    form.appendChild(createLabel("slightly_likely", "Slightly Likely"));
    form.appendChild(createInput("not_at_all", "visit_again", "radio", "answer"));
    form.appendChild(createLabel("not_at_all", "Not at all likely"));
    form.appendChild(createPTag("Please add any comments you have for improving the website.  We welcome suggestions on specific areas for improvements, features you would like to see added to the site, and examples of what you consider good websites", "question", "comments"));
    form.appendChild(createTextarea("improvements", "improvements", "20"));
}

/**
 * Creates HTML p
 * @param {string} text - innerHTMl Text
 * @param {string} className - Class Name
 * @param {string} id - ID
 * @returns p tag
 */
function createPTag(text, className, id) {
    let p = document.createElement("p");
    if (text != null) {
        p.innerHTML = text;
    }
    if (className != null) {
        p.className = className;
    }
    if (id != null) {
        p.id = id;
    }
    return p;
}

/**
 * Creates HTML Input
 * @param {string} id 
 * @param {string} name 
 * @param {string} type 
 * @param {string} value 
 * @returns input element
 */
function createInput(id, name, type, value) {
    let input = document.createElement("input");
    if (id != null) {
        input.id = id;
    }
    if (name != null) {
        input.name = name;
    }
    if (type != null) {
        input.type = type;
    }
    if (value != null) {
        input.value = value;
    }
    return input;
}

/**
 * Creates HTML Label
 * @param {string} htmlFor - for
 * @param {string} text - Test
 * @returns label element
 */
function createLabel(htmlFor, text) {
    let label = document.createElement("label");
    if (htmlFor != null) {
        label.htmlFor = htmlFor;
    }
    if (text != null) {
        label.innerHTML = text;
    }
    return label;
}

/**
 * Creates a HTMl Textarea
 * @param {string} id - id of textarea
 * @param {string} name - name of textarea
 * @param {string} rows - rows of textarea
 * @returns textarea element
 */
function createTextarea(id, name, rows) {
    let textarea = document.createElement("textarea");
    if (id != null) {
        textarea.id = id;
    }
    if (name != null) {
        textarea.name = name
    }
    if (rows != null) {
        textarea.rows = rows
    }
    return textarea;
}

createFeedBack();