import { useNavigate } from "react-router-dom";
import { useCreateBoardMutation } from "../../redux/features/boardService";
import { useEffect } from "react";

const GetStarted = () => {

  const [createBoard, { data: newBoard }] = useCreateBoardMutation();
  const navigation = useNavigate();
  console.log(newBoard)
  useEffect(() => {
    if (newBoard) {
      navigation(`/boards/${newBoard._id}`);}
  }, [newBoard]);

  return (
    <div className="flex justify-center md:items-start gap-5 min-h-[70vh] flex-col mx-2 md:mx-10">
      <h2 className="md:text-center text-5xl">{"getting started"}</h2>
      <p className="max-w-lg">
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic voluptate omnis minu quas soluta facilis porro nihil accusantium obcaecati."
        }
      </p>
      <button
        onClick={() => createBoard()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        + {"new"}
      </button>
    </div>
  );
};

export default GetStarted;
