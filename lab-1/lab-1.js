async function startProgram() {
    // Move straight 75 cm
    await roll(0, 50, 75)

    // Turn right 90 degrees and move 30 cm
    await roll(90, 50, 30)

    // Move straight 30 cm
    await roll(0, 50, 30)

    // Turn left 270 degrees and move 30 cm
    await roll(270, 50, 30)

    // Move straight 30 cm
    await roll(0, 50, 30)

    // Turn right 90 degrees and move 30 cm
    await roll(90, 50, 30)

    // Move straight 30 cm
    await roll(0, 50, 30)

    // Turn left 270 degrees and move 30 cm
    await roll(270, 50, 30)

    // Move straight 30 cm
    await roll(0, 50, 30)

    // Turn right 90 degrees and move 30 cm
    await roll(90, 50, 30)

    // Move straight 30 cm
    await roll(0, 50, 30)
}
