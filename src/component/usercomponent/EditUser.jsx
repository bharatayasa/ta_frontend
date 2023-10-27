import React from "react";
import { updateuser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";

function EditUser({ user }) {
  const navigate = useNavigate();

  async function onEditUserHandler(user) {
    await updateuser(user);
    navigate("/");
    // window.location.reload();
  }

  return (
    <div>
      <EditButton {...user} updateuser={onEditUserHandler} />
    </div>
  );
}

export default EditUser;
