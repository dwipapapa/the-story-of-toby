namespace MakingText {
    //% block
    export function makeheadings(text: string,) {
        const font = image.font12;
        const width = font.charWidth * text.length;
        const height = font.charHeight;

        const res = image.create(width, height);
        res.fill(0);
        res.print(text, 0, 0, 7, font);

        const sprite = sprites.create(res, SpriteKind.Food);
        return sprite;
    }
}
