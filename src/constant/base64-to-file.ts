export function base64ToFile(base64String: string, fileName: string) {
    const [metadata, base64Content] = base64String.split(",");
    const mimeType = metadata.match(/data:(.*?);base64/)?.[1];

    if (!mimeType) {
        throw new Error("Invalid Base64 string");
    }

    const binaryData = atob(base64Content);
    const byteArray = new Uint8Array(binaryData.length);

    for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
    }

    return new File([byteArray], fileName, { type: mimeType });
}