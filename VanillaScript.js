function getRandomFullName() {
    const firstNames = ["Warnakulasuriya", "Patabendige", "Ushantha", "Joseph", "Chaminda", "Vaas", "Lakmal", "Nuwan", "Perera", "Kumar"];
    const lastNames = ["Silva", "Fernando", "Kumarasinghe", "Jayawardene", "Herath", "Dilshan", "Sangakkara", "Malinga", "Mathews", "Jayasuriya"];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function getRandomEmail() {
    const domains = ["example.com", "mail.com", "test.org", "random.net"];
    const user = `${Math.random().toString(36).substring(2, 10)}`;
    return `${user}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

function getRandomPhoneNumber() {
    const randomSixDigits = Math.floor(100000 + Math.random() * 900000).toString();
    return `222${randomSixDigits}`;
}

function getRandomPostCode() {
    const postcode = Math.floor(1000 + Math.random() * 9000).toString();
    return postcode;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to set the value of an input and trigger input and change events
function setValueAndTriggerEvents(element, value) {
    element.value = value;
    const inputEvent = new Event('input', { bubbles: true });
    const changeEvent = new Event('change', { bubbles: true });
    element.dispatchEvent(inputEvent);
    element.dispatchEvent(changeEvent);
}

async function fillAndSubmitForm() {
    const myFirstName = "AL IMRAN";

    for (let i = 0; i < 20; i++) {
        document.querySelector('.minor-nav-buttons-first.no-second button.mat-flat-button').click();

        await sleep(1000);
        const randomName = getRandomFullName();
        const randomEmail = getRandomEmail();
        const randomPhone = getRandomPhoneNumber();
        const randomPostCode = getRandomPostCode();

        setValueAndTriggerEvents(document.querySelector('input[name="name"]'), randomName);
        setValueAndTriggerEvents(document.querySelector('input[formcontrolname="email"]'), randomEmail);
        setValueAndTriggerEvents(document.querySelector('input[id="phone"]'), randomPhone);
        setValueAndTriggerEvents(document.querySelector('input[name="postCode"]'), randomPostCode);

        let dropdown = document.querySelector('select[name="buyerType"]');
        if (dropdown) {
            const options = dropdown.options;
            let randomOption = Math.floor(Math.random() * options.length);
            if (randomOption === 0) {
                randomOption = 1;
            }
            dropdown.selectedIndex = randomOption;
            setValueAndTriggerEvents(dropdown, dropdown.value);
        }

        dropdown = document.querySelector('select[name="priceRange"]');
        if (dropdown) {
            const options = dropdown.options;
            let randomOption = Math.floor(Math.random() * options.length);
            if (randomOption === 0) {
                randomOption = 1;
            }
            dropdown.selectedIndex = randomOption;
            setValueAndTriggerEvents(dropdown, dropdown.value);
        }

        dropdown = document.querySelector('select[name="buyingDuration"]');
        if (dropdown) {
            const options = dropdown.options;
            let randomOption = Math.floor(Math.random() * options.length);
            if (randomOption === 0) {
                randomOption = 1;
            }
            dropdown.selectedIndex = randomOption;
            setValueAndTriggerEvents(dropdown, dropdown.value);
        }

        dropdown = document.querySelector('select[name="contactMethod"]');
        if (dropdown) {
            const options = dropdown.options;
            let randomOption = Math.floor(Math.random() * options.length);
            if (randomOption === 0) {
                randomOption = 1;
            }
            dropdown.selectedIndex = randomOption;
            setValueAndTriggerEvents(dropdown, dropdown.value);
        }

        dropdown = document.querySelector('select[name="selectPreApproval"]');
        if (dropdown) {
            const options = dropdown.options;
            let randomOption = Math.floor(Math.random() * options.length);
            if (randomOption === 0) {
                randomOption = 1;
            }
            dropdown.selectedIndex = randomOption;
            setValueAndTriggerEvents(dropdown, dropdown.value);
        }

        document.querySelector('input[type="checkbox"][name="scheduleInspection"]').click();
        document.querySelector('input[type="checkbox"][name="priceInformation"]').click();
        document.querySelector('input[type="checkbox"][name="requestFloorPlans"]').click();
        document.querySelector('input[type="checkbox"][name="brochure"]').click();

        document.querySelector('label.add-message-toggle.add-message-toggle-inactive').click();
        setValueAndTriggerEvents(document.querySelector('textarea[name="message"][formcontrolname="message"].mat-input-element'), `${myFirstName} functionality ${i + 1}`);

        const buttons = document.querySelectorAll('button[type="submit"]');
        buttons.forEach(button => {
            if (button.classList.contains('enquiry-submit')) {
                button.click();
            }
        });

        await sleep(3000);

        document.querySelector('button.sms-close').click();
    }
}

// Execute the function
fillAndSubmitForm();
