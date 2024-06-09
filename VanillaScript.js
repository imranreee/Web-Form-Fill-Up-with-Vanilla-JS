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
    const number = Math.floor(100000000 + Math.random() * 900000000).toString();
    return `${number.substring(2)}`;
}

function getRandomPostCode() {
    // Generate a random number between 1000 and 9999
    const postcode = Math.floor(1000 + Math.random() * 9000).toString();
    return postcode;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function fillAndSubmitForm() {
    const myFirstName = "IMRAN";

    for (let i = 0; i < 1; i++) {
        document.querySelector('.minor-nav-buttons-first.no-second button.mat-flat-button').click();

        sleep(1000);
        const randomName = getRandomFullName();
        const randomEmail = getRandomEmail();
        const randomPhone = getRandomPhoneNumber();
        const randomPostCode = getRandomPostCode();
        //console.log(randomName+" : "+randomPhone+" :"+randomEmail);
        document.querySelector('input[name="name"]').value = randomName;
        document.querySelector('input[formcontrolname="email"]').value = randomEmail;
        document.querySelector('input[id="phone"]').value = randomPhone;
        document.querySelector('input[name="postCode"]').value = randomPostCode;

        const dropdown = document.querySelector('select[name="options"]');
        if (dropdown) {
            const options = dropdown.options;
            const randomOption = Math.floor(Math.random() * options.length);
            dropdown.selectedIndex = randomOption;
        }

        document.querySelectorAll('input[type="checkbox"][name="checkbox"]').forEach(checkbox => {
            checkbox.checked = Math.random() > 0.5;
        });


        document.querySelector('textarea[name="message"]').value = `${myFirstName} functionality ${i + 1}`;

        document.querySelector('button[type="submit"]').click();
    }
}

// Execute the function
fillAndSubmitForm();
