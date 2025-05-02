export const getInfoData = async (url) => {
    const rest = await fetch(url);
    const data = await rest.json();
    return data;
}