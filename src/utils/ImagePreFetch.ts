import fs from "fs";
import path from "path";

function isValidPublicAsset(url: string): boolean {
    const publicPath = path.join(process.cwd(), "public", url);
    return fs.existsSync(publicPath);
}

export async function isValidImage(url: string): Promise<boolean> {
    if (url.startsWith("/")) return isValidPublicAsset(url);

    try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
    } catch (error) {
        console.error(error);
        return false;
    }
}
