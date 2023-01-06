import { ChangeEvent } from "react";
import HelpIcon from "../../components/helpIcon";
import Label from "../../components/label";
import Textarea from "../../components/textarea";
import Tooltip from "../../components/tooltip";
import usePersonality, { personalityOptions } from "../../hooks/usePersonality";

const Personality = () => {
  const { personality, updatePersonalityText, setPersonalityFromKey } =
    usePersonality();
  const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updatePersonalityText(event.target.value);
  };
  return (
    <>
      <div className="flex">
        <Label className="flex-grow">Custom Martwyn personality</Label>
        <HelpIcon className="flex-shrink-0">
          <h2 className="mb-4 text-xl">Custom Martwyn personality</h2>
          <p className="mb-2">
            Each question that Martwyn answers has an associated personality
            with it. This is what helps make Martwyn enjoyable to use - without
            personality the chat wouldn't be anywhere near as useful or
            entertaining!
          </p>
          <p className="mb-2">
            But, sometimes, you might want to talk to someone else entirely. In
            these cases you can override Martwyn's personality with someone else
            entirely. To do this, provide an alternative description of Martwyn
            and we'll use that instead when getting a response.
          </p>
          <p className="mb-2">
            Here's an example to give you an idea:{" "}
            <em className="font-mono text-icon">
              Martwyn is a recluse who dislikes people. He hates answering
              questions. Martwyn will answer any question as an insult, swearing
              and verbally belittling the questioner.
            </em>
          </p>
        </HelpIcon>
      </div>
      <Textarea
        rows={4}
        name="personality"
        value={personality.text}
        onChange={onTextareaChange}
        placeholder="No custom personality entered - default Martwyn will be used"
      />
      <Label>Or choose from a predefined personality</Label>
      <div className="flex mt-2">
        <div className="flex w-full">
          {Object.values(personalityOptions).map((option) => (
            <div
              className="flex items-center justify-center w-16 h-16 mr-4 rounded-full cursor-pointer hover:bg-icon-hover"
              onClick={() => setPersonalityFromKey(option.key)}
            >
              <Tooltip text={option.tooltip} direction="right">
                <span className="text-5xl">{option.emoji}</span>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Personality;
