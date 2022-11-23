
//Remake of the avatar teleportation challenge - CodingGame:

// ---- RULES ------- //

//1 - The avatar cannot go beyond the grid's surface.
// 2 - If the avatar steps into the portal A, he gets teleported to the portal B's position and vice versa
// Regarding the commands : "U" stands for "UP" - "D" stands for "DOWN" - "L" stands for "LEFT" , "R" stands for "RIGHT"

function movingAvatar (width, height, position, portalA, portalB, commands){
    //
    let horizontalPosition = position[0], //for the rows
                             verticalPosition = position[1], //for the columns
                             finalPosition = [verticalPosition, horizontalPosition] 

    // Looping into the commands: for each command, we make sure that the avatar's position doesnt exceed the grid's surface. If so, his position doesn't change. Otherwise, he can move according to the command's direction. 

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        if (command === "U" && verticalPosition > 0 ) {
            verticalPosition -= 1
        } else if (command === "D" && verticalPosition < height) {
            verticalPosition += 1
        } else if (command === "L" && horizontalPosition > 0) {
            horizontalPosition -= 1
        } else if (command === "R" && horizontalPosition < width) {
            horizontalPosition += 1
        }
        //Updating the final position
        finalPosition = [horizontalPosition, verticalPosition]

        //If the avatar steps into the portal A, he will teleport himself to portal B's position, and vice versa:

        if (finalPosition.join() === portalA.join()) {
            finalPosition = portalB
        } else if (finalPosition.join() === portalB.join()) {
            finalPosition = portalA
        }
    }

    return finalPosition;
}

console.log(movingAvatar(3, 3, [0,0], [2, 2], [3, 0], ["D","D","D","D", "R", "R", "R", "U", "L"])) //Should return [3, 0]
console.log(movingAvatar(3, 3, [0,0], [2, 2], [3, 0], ["R", "R", "D"])) // Should return [2, 1]

