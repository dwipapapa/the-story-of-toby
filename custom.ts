namespace MakingText {
    //% block
    export function createTextSprite(text: string,) {
        const font = image.font8;
        const width = font.charWidth * text.length;
        const height = font.charHeight;

        const res = image.create(width, height);
        res.fill(0);
        res.print(text, 0, 0, 1, font);

        const sprite = sprites.create(res, SpriteKind.Food);
        return sprite;
    }
} 