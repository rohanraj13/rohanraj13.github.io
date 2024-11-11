function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert("Email address copied to clipboard: " + email);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}