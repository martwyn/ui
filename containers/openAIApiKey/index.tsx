import { ChangeEvent, useState } from "react";
import Input from "../../components/input";
import Label from "../../components/label";
import useOpenAIApiKey from "../../hooks/useOpenAIApiKey";

const OpenAIApiKey = () => {
  const { openAiApiKey, updateOpenAiApiKey } = useOpenAIApiKey();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateOpenAiApiKey(e.target.value);
  };
  return (
    <>
      <Label>Open AI Api Key</Label>
      <Input
        type="password"
        name="name"
        value={openAiApiKey}
        onChange={onChange}
      />
    </>
  );
};

export default OpenAIApiKey;
