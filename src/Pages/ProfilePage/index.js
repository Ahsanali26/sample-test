import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

const ProfilePage = () => {
  const { id } = useParams();
  const filteredData = data.find((x) => x.id == id);

  return (
    <div className="profile-page">
      {filteredData.pipeline.map((item) => {
        return (
          <>
            <div className="table-container">
              <span className="table-heading">{item.pipeline_name}</span>
              <table class="rtable">
                <thead>
                  <tr>
                    <th>Group</th>
                    <th>Param</th>
                    <th>Table</th>
                    <th>Value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {item?.params.map((e) => {
                    return (
                      <tr>
                        <td>{e.group}</td>
                        <td>{e.param}</td>
                        <td>{e.table}</td>
                        <td>{e.value}</td>
                        <td>{e.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProfilePage;
