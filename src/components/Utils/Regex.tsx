export const regexNom = (nomTest?: any) => {

    let inputName = new RegExp("[a-zA-Z0-9._-]{2,30}$", 'g');
    return inputName.test(nomTest.trim());


};

export const regexEmail = (mailTest?: any) => {

    let email = new RegExp('^[a-zA-Z0-9._-]+[@]+[a-zA-Z0-9.-_]+[.]+[a-z]{1,10}[ ]{0,2}$', 'g');
    return email.test(mailTest.trim());

};

export const regexObjet = (objetTest?: any) => {

    if (objetTest.length < 5 || objetTest.length > 40) {
        return false;
    } else {
        return true;
    }

};

export const regexMessage = (messageTest?: any) => {

    if (messageTest.length < 5 || messageTest.length > 500) {
        return false;
    } else {
        return true;
    }

};
