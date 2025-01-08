namespace customBlocks {
    /**
     * Place a custom block
     * @param blockType the block to place
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     */
    //% block="place custom block %blockType at x %x y %y z %z"
    export function placeCustomBlock(blockType: Block, x: number, y: number, z: number): void {
        blocks.place(blockType, positions.create(x, y, z));
    }
}
