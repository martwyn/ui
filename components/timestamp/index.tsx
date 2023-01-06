import format from "date-fns/format";

interface Props {
  datetime: Date;
}

const Timestamp = ({ datetime }: Props) => {
  return (
    <p className="my-4 text-sm text-center text-gray-400 uppercase">
      {format(datetime, "Lo LLL, h:mmaaa")}
    </p>
  );
};

export default Timestamp;
