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

  if (name === "Sociability Skill") {
    mappings.push(
      { name: "Communication skills", innerRadius: 100, outerRadius: 90, color: "#FBE29F" },
      {
        name: "Collaboration",
        innerRadius: 85,
        outerRadius: 75,
        color: "#E8A09A",
      },
      {
        name: "Relationship building",
        innerRadius: 70,
        outerRadius: 60,
        color: "#C6D68F",
      },
      {
        name: "Conflict management",
        innerRadius: 55,
        outerRadius: 45,
        color: "#9BBFE0",
      }
    );
  } else if (name === "Cognitive Agility") {
    mappings.push(
      { name: "Adaptability", innerRadius: 100, outerRadius: 90, color: "#62B2FD" },
      {
        name: "Decision Making",
        innerRadius: 85,
        outerRadius: 75,
        color: "#F99BAB",
      },
      {
        name: "Problem Solving",
        innerRadius: 70,
        outerRadius: 60,
        color: "#FFB44F",
      },
      {
        name: "Time Management",
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
        name: "Stress management",
        innerRadius: 70,
        outerRadius: 60,
        color: "#F9D4DE",
      },
      {
        name: "Self-awareness",
        innerRadius: 55,
        outerRadius: 45,
        color: "#BFE1F4",
      }
    );
  }

  console.log(mappings);
  console.log(competency);

  const mapping = mappings.find((data) => data.name === competency.name);

  console.log(mapping);

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

export const convertCompetencies = (competencyList) => {
  console.log(competencyList);
  const name = competencyList.pillar2
  console.log(name);
  const competencies = competencyList.competencies
  return competencies.map((competency) =>
    getCompetencyObject(competency, name)
  );
};


export const convertCompetencies1 = (data) => {
  console.log(data);
}