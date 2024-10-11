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
      {
        name: "Communication skills",
        innerRadius: 100,
        outerRadius: 90,
        color: "#FBE29F",
      },
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
      {
        name: "Adaptability",
        innerRadius: 100,
        outerRadius: 90,
        color: "#62B2FD",
      },
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
  } else if (name === "Candidate Profile") {
    mappings.push(
      {
        name: "Candidate Details",
        innerRadius: 55,
        outerRadius: 45,
        color: "#9B88ED",
      },
      {
        name: "Preference",
        innerRadius: 70,
        outerRadius: 60,
        color: "#FB67CA",
      },
      {
        name: "Value Assesment",
        innerRadius: 85,
        outerRadius: 75,
        color: "#FFA84A",
      },
      {
        name: "Talent Spectrum Analysis",
        innerRadius: 100,
        outerRadius: 90,
        color: "#04BFDA",
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

  const mapping = mappings.find((data) => data.name === competency.name);

  return {
    innerRadius: mapping.innerRadius,
    outerRadius: mapping.outerRadius,
    data: [
      {
        label: competency.name,
        value: competency.percentage,
        rating: competency.rating,
        attribute: competency.attribute,
        color: mapping.color,
      },
      { value: 100 - competency.percentage, color: "#D0D5DD45" },
    ],
    cornerRadius: 10,
  };
};

export const convertCompetencies = (competencyList) => {
  const name = competencyList?.pillar2;
  const competencies = competencyList?.competencies;
  return competencies?.map((competency) =>
    getCompetencyObject(competency, name)
  );
};

export const AllJobDataTokanBan = (data) => {
  const result = {
    New_Requirement: { name: "New Requirement", items: [] },
    Sourcing_Candidates: { name: "Sourcing Candidates", items: [] },
    "Screening_&_Evaluation": { name: "Screening & Evaluation", items: [] },
    Interviewing: { name: "Interviewing", items: [] },
    // Offer_Processing: { name: "Offer Processing", items: [] },
    // Placement_Confirmed: { name: "Placement Cofirmed", items: [] },
    // Onboarding: { name: "Onboarding", items: [] },
    // Closed_Successful: { name: "Closed Successful", items: [] },
    // Closed_Onhold: { name: "Closed Position Onhold", items: [] },
    // Closed_Unsuccessful: { name: "Closed UnSuccessful", items: [] },
  };

  data.forEach((post) => {
    let status = post.jobStatus || "";
    status = post?.jobStatus?.replace("/react-site/public/g", "");
    console.log(status);
    if (result[status]) {
      result[status].items.push({
        ...post,
        id: post.id.toString(),
      });
    }
  });

  return result;
};

export const CreateJobDataTokanBan = (data) => {
  const result = {
    Initiated: { name: "Initiated", items: [] },
    In_Progress: { name: "In Progress", items: [] },
    Approved: { name: "Approved", items: [] },
    Rejected: { name: "Rejected", items: [] },
    Sourced: { name: "Sourced", items: [] },
    Contracted: { name: "Contracted", items: [] },
    Screened: { name: "Screened", items: [] },
    Shortlisted: { name: "Shortlisted", items: [] },
    Hiring_Manager_Submission: { name: "Hiring Manager Submission", items: [] },
    Hiring_Manager_Approved: { name: "Hiring Manager Approved", items: [] },
    Hiring_Manager_Interview_Scheduled: {
      name: "Hiring Manager Interview Scheduled",
      items: [],
    },
    Interviewing: { name: "Interviewing", items: [] },
    Offer_Extended: { name: "Offer Extended", items: [] },
    Offer_Accepted: { name: "Offer Accepted", items: [] },
    Onboarding: { name: "Onboarding", items: [] },
    Placed: { name: "Placed", items: [] },
    "Closed-Not_Selected": { name: "Closed - Not Selected", items: [] },
  };

  data.forEach((post) => {
    const status = post.applicationStatus.replace(/\s+/g, "_");
    if (result[status]) {
      result[status].items.push({
        ...post,
        id: post.id.toString(),
      });
    }
  });

  return result;
};
