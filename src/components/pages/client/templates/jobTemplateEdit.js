import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";
import { ClientSideNav } from "../../../widgets/clientSideNav";
import { Footer } from "../../../widgets/footer";
import { TopNav } from "../../../widgets/topNav";

export const JobTemplateEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState();
  const [locations, setLocation] = useState();
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  const options = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleSubmit = async () => {
    console.log(location.state);
    const user = JSON.parse(localStorage.getItem("token"));
    if(location.state){
      const jobId = localStorage.getItem("jobId");
      axios
        .post(`http://localhost:8080/xen/saveJobTemplateForJob?clientId=${user.userId}&jobId=${jobId}`, 
        { id, title, locations, salary, description },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
        )
        .then((data) =>{
          console.log(data.data);
          navigate("/templates/workValueTemplate", { state : { "job" : true , "jobId" : location.state.jobId }})
        })
        .catch((e) => console.log(e));
    }
    else{
      axios
        .post(`http://localhost:8080/xen/saveJobTemplate?clientId=${user.userId}`, 
        {id, title, locations, salary, description },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
        )
        .then((data) => console.log(data.data))
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    console.log(location.state);
    if (location.state) {
      if(location.state?.job){
        axios
            .get(
              `http://localhost:8080/xen/getJobTemplate?clientId=${user.userId}&templateId=${location.state.jobData.jobDetailId}`
            )
            .then((data) => {
              console.log(data);
              setId(data.data.id);
              setTitle(data.data?.title);
              setLocation(data.data?.location);
              setSalary(data.data?.salary);
              setDescription(data.data?.description);
            },
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
            )
            .catch((e) => {
              console.log(e);
            });
      }
      else{
        setId(location.state.details.id);
        setTitle(location.state?.details.title);
        setLocation(location.state?.details.location);
        setSalary(location.state?.details.salary);
        setDescription(location.state?.details.description);
      }
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex">
        <ClientSideNav />
        <div className="w-full min-h-screen">
          <TopNav />
          <div className="p-8">
            <div>
              <p style={{ color: "#101828", fontSize: 22, fontWeight: 700 }}>
                Pre- Fill Job Details: Template 1
              </p>
              <p style={{ color: "#475467", fontSize: 14, fontWeight: 400 }}>
                Please review and edit the information as needed, or use the
                same template
              </p>
            </div>
            <div className="grid-cols-3 grid gap-8 mt-8">
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Title
                </p>
                <TextField
                  size="small"
                  disablePortal
                  value={title || null}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="type"
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Location
                </p>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={options.map((option) => option.label)}
                  value={locations || null}
                  onChange={(e, newvalue) => setLocation(newvalue)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select" />
                  )}
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                  Salary Compensation
                </p>
                <TextField
                  size="small"
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="type"
                />
              </div>
            </div>
            <div className="grid grid-flow-row gap-2 py-8">
              <p style={{ color: "#344054", fontSize: 14, fontWeight: 500 }}>
                Job Description
              </p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="type"
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D5DD",
                  borderRadius: 8,
                  padding: 5,
                }}
              />
            </div>
            <div className="py-8 gap-8 flex justify-end">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                style={{ color: "#475467", borderColor: "#D0D5DD" }}>
                back
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ color: "#ffffff", backgroundColor: "#008080" }}>
                CONFIRM
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
