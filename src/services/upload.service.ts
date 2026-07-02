import Backendless from "../lib/backendless";

export const uploadImage = async (file: File) => {
    const result = await Backendless.Files.upload(
        file,
        "blog-images",
        true
    );

    return result.fileURL;
};