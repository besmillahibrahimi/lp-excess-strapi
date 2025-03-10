import React from "react";

const PlatformField = ({ name, value, onChange }) => {
  const handleChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <div>
      <label htmlFor={name}>Platform</label>
      <select name={name} value={value || ""} onChange={handleChange}>
        <option value={"transient"}>transient</option>
        <option value={"wic1w"}>wic1w</option>
        <option value={"ssi1w"}>ssi1w</option>
        <option value={"medicaid1w"}>medicaid1w</option>
        <option value={"medical1w"}>medical1w</option>
        <option value={"calfresh1w"}>calfresh1w</option>
        <option value={"snap1w"}>snap1w</option>
        <option value={"ebt1w"}>ebt1w</option>
        <option value={"california"}>california</option>
        <option value={"main"}>main</option>
        <option value={"main1w"}>main1w</option>
        <option value={"byop1w"}>byop1w</option>
        <option value={"sim1w"}>sim1w</option>
        <option value={"tribal"}>tribal</option>
        <option value={"getlifeline"}>getlifeline</option>
        <option value={"gov1w"}>gov1w</option>
        <option value={"excstep"}>excstep</option>
        <option value={"excstp"}>excstp</option>
        <option value={"hispanic1w"}>hispanic1w</option>
        <option value={"infinitiex"}>infinitiex</option>
      </select>
    </div>
  );
};

export default PlatformField;
