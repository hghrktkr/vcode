namespace vcodeCustomBlocks {
    /**
     * Place a custom block
     * @param blockType the block to place
     * @param startPosition the position to place the block
     */
    //% block="fill with 4 blocks"
    export function fillWith4Blocks(startPosition: Position): void {
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
