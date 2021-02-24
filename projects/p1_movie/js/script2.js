//
//
// function createDialogue(character, sentence) {
//   let dialogue = {
//     character: character,
//     sentence: sentence,
//   };
//
//   return dialogue;
// }
//
//
// function updateCharacterDialogue() {
//   if (currentCharacter === `Johanna`) {
//     generateDialogue(characterDialogue.johanna_dialogue);
//   }
// }
//
//
// function generateDialogue(dialogueData) {
//
//     let dialogue = createDialogue(characterDialogue.character, characterDialogue.sentence);
//     dialogues.push(dialogue);
//
//   displayDialogue();
//
// }
//
//
// function displayDialogue() {
//
//   //dialoguebox
//   push();
//   fill(0);
//   rect(200, 400);
//   pop();
//
//   //display current character dialogue
//   push();
//   textSize(24);
//   textAlign(LEFT);
//   text(`${characterDialogue.character} :`, 550, 525);
//   text(`${characterDialogue.sentence}`, 550, 550); //dialogue
//   pop();
//
// }
