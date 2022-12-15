// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
    let longPasswords = [];

    passwords.forEach(password => {
            if (password.length >= 9) {
                longPasswords.push(password);
            }
        }
    )
    return longPasswords;
}
