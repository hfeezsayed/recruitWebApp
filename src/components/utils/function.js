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

const getCompetencyObject = (competency, name) => {
  const mappings = [];

  if (name === "Sociability") {
    mappings.push(
      { name: "Empathy", innerRadius: 100, outerRadius: 90, color: "#FBE29F" },
      {
        name: "Resilience",
        innerRadius: 85,
        outerRadius: 75,
        color: "#E8A09A",
      },
      {
        name: "Stress- Managment",
        innerRadius: 70,
        outerRadius: 60,
        color: "#C6D68F",
      },
      {
        name: "Self- Awareness",
        innerRadius: 55,
        outerRadius: 45,
        color: "#9BBFE0",
      }
    );
  } else if (name === "Cognitive") {
    mappings.push(
      { name: "Empathy", innerRadius: 100, outerRadius: 90, color: "#62B2FD" },
      {
        name: "Resilience",
        innerRadius: 85,
        outerRadius: 75,
        color: "#F99BAB",
      },
      {
        name: "Stress- Managment",
        innerRadius: 70,
        outerRadius: 60,
        color: "#FFB44F",
      },
      {
        name: "Self- Awareness",
        innerRadius: 55,
        outerRadius: 45,
        color: "#9BDFC4",
      }
    );
  } else {
    mappings.push(
      { name: "Empathy", innerRadius: 100, outerRadius: 90, color: "#AED7B7" },
      {
        name: "Resilience",
        innerRadius: 85,
        outerRadius: 75,
        color: "#A8A3CF",
      },
      {
        name: "Stress- Managment",
        innerRadius: 70,
        outerRadius: 60,
        color: "#F9D4DE",
      },
      {
        name: "Self- Awareness",
        innerRadius: 55,
        outerRadius: 45,
        color: "#BFE1F4",
      }
    );
  }

  console.log(mappings);

  const mapping = mappings.find((data) => data.name === competency.name);

  return {
    innerRadius: mapping.innerRadius,
    outerRadius: mapping.outerRadius,
    data: [
      {
        label: competency.name,
        value: competency.percentage,
        rating: competency.rating,
        color: mapping.color,
      },
      { value: 100 - competency.percentage, color: "#D0D5DD45" },
    ],
    cornerRadius: 10,
  };
};

export const convertCompetencies = (competencies, name) => {
  return competencies.map((competency) =>
    getCompetencyObject(competency, name)
  );
};
