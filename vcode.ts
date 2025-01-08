namespace vcode {
    /**
     * Place 4 iron blocks in a row
     * @param blockType the block to place
     * @param startPosition the position to place the block
     */
    //% block="fill with 4 blocks"
    export function fillBllocks(startPosition: Position): void {
        blocks.fill(
            IRON_BLOCK,
            startPosition,
            positions.add(
            startPosition,
            pos(3, 0, 0)
            ),
            FillOperation.Replace
            );
    }
}
