import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UserView = () => {
  const { username } = useParams();
  return (
    <div className="bg-slate-400 flex justify-center pl-20">
      HERRO {username}-san!
    </div>
  );
};

export default UserView;
