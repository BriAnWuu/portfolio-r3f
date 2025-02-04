export const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        hexCode += letters[Math.floor(Math.random() * 16)];
    }

    return hexCode;
};
