import { ChangeEvent, useState } from "react";
import Input from "../../components/input";
import Label from "../../components/label";
import useUser from "../../hooks/useUser";

const UserName = () => {
  const { user, updateUser } = useUser();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateUser(user.id!, e.target.value);
  };
  return (
    <>
      <Label>Your name</Label>
      <Input
        type="text"
        name="name"
        value={user.name!}
        onChange={onChange}
        minLength={2}
      />
    </>
  );
};

export default UserName;
