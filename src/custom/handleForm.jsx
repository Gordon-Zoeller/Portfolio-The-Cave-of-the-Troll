export function handleForm(e) {
    e.preventDefault();
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.message.value = "";
};