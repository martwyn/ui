import { FormEvent, FormEventHandler, useState } from "react";
import Textarea from "../../components/textarea";
import Tooltip from "../../components/tooltip";
import Modal from "../../components/modal";
import Label from "../../components/label";
import Button from "../../components/button";
import Input from "../../components/input";
import usePersonality from "../../hooks/usePersonality";

interface ModalProps {
  onClose: () => void;
}

const PersonalityModal = ({ onClose }: ModalProps) => {
  const { addCustomPersonality } = usePersonality();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement) as any;
    addCustomPersonality(data.get("emoji"), data.get("text"));
    onClose();
  };
  return (
    <Modal onClose={onClose} className="w-96">
      <h2 className="mb-4 text-xl">New Martwyn personality</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <Label>Icon</Label>
          <Input name="emoji" placeholder="❓" minLength={1} />
        </div>
        <div className="mb-4">
          <Label>Personality description</Label>
          <Textarea
            rows={4}
            minLength={10}
            name="text"
            placeholder="Enter Martwyn's personality here"
          />
        </div>
        <div className="text-right">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
};

const AddPersonality = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center w-16 h-16 mr-4 rounded-full cursor-pointer hover:bg-icon-hover"
        onClick={() => setModalVisible(true)}
      >
        <Tooltip text="Add new" direction="right">
          <span className="text-5xl">➕</span>
        </Tooltip>
      </div>
      {modalVisible && (
        <PersonalityModal onClose={() => setModalVisible(false)} />
      )}
    </>
  );
};
export default AddPersonality;
