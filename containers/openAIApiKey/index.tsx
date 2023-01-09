import { ChangeEvent, useState } from "react";
import HelpIcon from "../../components/helpIcon";
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
      <div className="flex">
        <Label className="flex-grow">Open AI Api Key</Label>
        <HelpIcon className="flex-shrink-0">
          <h2 className="mb-4 text-xl">Open AI Api Key</h2>
          <p className="mb-2">
            Martwyn uses Open API's GPT-3 to get answers and accessing this
            service requires an API Key. You can get an API Key from{" "}
            <a href="https://beta.openai.com/account/api-keys">
              the API keys page
            </a>{" "}
            of your OpenAI account (so you will need an account to get this
            key).
          </p>
          <p className="mb-2">
            Once you've generated a key, paste it into the input here. It'll
            look something like{" "}
            <em className="font-mono text-icon">
              sk-1234567890abcdefghijklmnopqrstuvwxyz
            </em>
            .
          </p>
        </HelpIcon>
      </div>

      <Input
        type="password"
        name="openAiApiKey"
        value={openAiApiKey}
        onChange={onChange}
        min-length={48}
      />
    </>
  );
};

export default OpenAIApiKey;
