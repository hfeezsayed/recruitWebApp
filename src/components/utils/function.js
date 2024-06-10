export const checkSkillLevel = (value) => {
  let skillLevel = "";
  if (value < 25) {
    skillLevel = "Beginners";
  } else if (value < 70) {
    skillLevel = "Intermediate";
  } else {
    skillLevel = "Advanced";
  }
  return skillLevel;
};
