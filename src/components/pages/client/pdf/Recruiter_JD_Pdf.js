import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import BoldFont from "../../../../assets/fonts/DMSans-Bold.ttf";
import MediumFont from "../../../../assets/fonts/DMSans-Medium.ttf";
import RegularFont from "../../../../assets/fonts/DMSans-Regular.ttf";
import Logo from "../../../../assets/images/xenrecruit.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textHeader: {
    fontSize: 12,
    fontFamily: "DMSans",
    fontWeight: "medium",
    color: "#008080",
    marginTop: 8,
  },
  textQus: {
    fontSize: 10,
    fontFamily: "DMSans",
    color: "#475467",
    width: "48%",
  },
  textAns: {
    fontSize: 10,
    fontFamily: "DMSans",
    color: "#101828",
    width: "48%",
  },
  textParent: {
    width: "49%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  textAnsFul: {
    fontSize: 10,
    fontFamily: "DMSans",
    color: "#101828",
    marginTop: 2,
  },
});

// Create Document Component
export const Recruiter_JD_Pdf = (props) => {
  const jobDetailsData = props?.data;

  Font.clear();
  Font.reset();

  Font.register({
    family: "DMSans",
    fonts: [
      {
        src: RegularFont,
        fontWeight: "normal",
      },
      {
        src: BoldFont,
        fontWeight: "bold",
      },
      {
        src: MediumFont,
        fontWeight: "medium",
      },
    ],
  });

  return (
    <Document title="Recruiter_JD">
      <Page size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <View>
            <Text
              style={{
                color: "#008080",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "DMSans",
              }}>
              Output of Job Description
            </Text>
            <Text style={{ color: "#475467", fontSize: 10 }}>
              Below is the information for the created job description.
            </Text>
          </View>
          <View>
            <Image src={Logo} style={{ height: 60, width: 120 }} />
          </View>
        </View>
        <View>
          <Text style={styles.textHeader}>Job Description</Text>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Job Title:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.title}</Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Job Department:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.department}</Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Job Code:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.code}</Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Job Location:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.location}</Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Job Family:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.family}</Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Salary Compensation:</Text>
              <Text style={styles.textAns}>{jobDetailsData?.salary}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textHeader}>Company Overview</Text>
          <Text style={styles.textAnsFul}>
            {jobDetailsData?.teamWorkingProjectProblem}
          </Text>
        </View>
        <View>
          <Text style={styles.textHeader}>Job Summary</Text>
          <Text style={styles.textAnsFul}>
            {jobDetailsData?.jobDescription}
          </Text>
        </View>
        <View>
          <Text style={styles.textHeader}>Responsibilities</Text>
          {jobDetailsData?.responsibility.map((row, index) => {
            return (
              <Text style={styles.textAnsFul} key={index}>
                &#x2022; {`   ` + row}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.textHeader}>Benefits</Text>
          {jobDetailsData?.Compensation.map((row, index) => {
            return (
              <Text style={styles.textAnsFul} key={index}>
                &#x2022; {`   ` + row}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.textHeader}>Qualifications and Skills</Text>
          {jobDetailsData?.requirments.map((row, index) => {
            return (
              <Text style={styles.textAnsFul} key={index}>
                &#x2022; {`   ` + row}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.textHeader}>
            Equal Employee Opportunity (EEO)
          </Text>
          {jobDetailsData?.requirments.map((row, index) => {
            return (
              <Text style={styles.textAnsFul} key={index}>
                &#x2022; {`   ` + row}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.textHeader}>
            Role Requirements and Preferences
          </Text>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                Is it essential for the candidate to have experience in a
                specific industry?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.experianceIndustry ? "Yes" : "No"}
              </Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                If so, could you specify which industry and why that experience
                is critical?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.experienceCritical}
              </Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                Would industry knowledge be valued even without direct
                experience?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.experianceIndustry ? "Yes" : "No"}
              </Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                What is the work setting for the role?
              </Text>
              <Text style={styles.textAns}>{jobDetailsData?.settingRole}</Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>Type of role</Text>
              <Text style={styles.textAns}>{jobDetailsData?.roleType}</Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                What are the timings for the role?
              </Text>
              <Text style={styles.textAns}>{jobDetailsData?.roleTiming}</Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                How frequent does the role require to travel?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.requireTtravel}
              </Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                What kind of visa are you looking for ?
              </Text>
              <Text style={styles.textAns}>{jobDetailsData?.visa}</Text>
            </View>
          </View>
        </View>
        {/* Team Preference  */}
        <View wrap={false}>
          <Text style={styles.textHeader}>Team Preference</Text>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>What is the sizr of the team</Text>
              <Text style={styles.textAns}>{jobDetailsData?.teamSize}</Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                What is the location of the team where it works from?
              </Text>
              <Text style={styles.textAns}>{jobDetailsData?.teamLocation}</Text>
            </View>
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                Does the role have to work cross functionally?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.workCrossFunality ? "Yes" : "No"}
              </Text>
            </View>
            <View style={styles.textParent}>
              <Text style={styles.textQus}>
                What problem/project is the team working on which the candidate
                will be joining?
              </Text>
              <Text style={styles.textAns}>
                {jobDetailsData?.teamWorkingProject}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "DMSans",
                color: "#475467",
                width: "24%",
              }}>
              What problem/project is the team working on which the candidate
              will be joining?
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "DMSans",
                color: "#101828",
                width: "74%",
              }}>
              {jobDetailsData?.teamWorkingProjectProblem}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "DMSans",
                color: "#475467",
                width: "24%",
              }}>
              Could you describe the contributions of a particularly successful
              team member in a similar role and how they've impacted the team's
              success?
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "DMSans",
                color: "#101828",
                width: "74%",
              }}>
              {jobDetailsData?.contributionsTeam}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
