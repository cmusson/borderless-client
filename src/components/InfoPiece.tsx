interface IItem {
  info: string;
  detail: string;
  bottom: boolean;
}

const InfoPiece = ({ bottom, info, detail }: IItem) => {
  return (
    <div
      className={`flex flex-row justify-between ${
        bottom ? "" : "border-b-2"
      } py-2`}
    >
      <div className="text-gray-400 text-sm pr-2">{info}</div>
      <div className="text-sm text-end">{detail}</div>
    </div>
  );
};

export default InfoPiece;
