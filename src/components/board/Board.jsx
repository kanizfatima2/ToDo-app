import { useParams } from "react-router-dom";
import {
  useSingleBoardQuery,
  useUpdateBoardMutation,
} from "../../redux/features/boardService";

const Board = () => {
  const { id } = useParams();
  // console.log(id);
  const { data } = useSingleBoardQuery(id);
  // console.log(data?.title);
  const [updateBoard] = useUpdateBoardMutation();

  let timer;
  const waitTime = 1000;
  
  const updateTitle = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      updateBoard({
        id,
        data: {
          title: e.target.value,
        },
      });
    }, waitTime);
  };
  const updateDescription = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      updateBoard({
        id,
        data: {
          description: e.target.value,
        },
      });
    }, waitTime);
  };

  return (
    <div className="p-2 flex-col rounded max-w-4xl flex  mx-auto my-5 min-h-screen">
      <h1
        className="text-4xl flex gap-2 items-center text-gray-700 font-bold"
        style={{ position: "relative" }}
      >
        <button>{data?.icon}</button>
        <div
          style={{
            display: "none",
            position: "absolute",
            top: "100%",
            zIndex: 9999,
          }}
        >
          <div>
            <em-emoji-picker />
          </div>
        </div>
      </h1>
      <div style={{ display: "none", top: "100%", zIndex: 9999 }}>
        <div>
          <em-emoji-picker />
        </div>
      </div>
      <h2 className="text-4xl mb-5">
        <input
          type="text"
          className="debounce_input outline-none"
          defaultValue={data?.title}
          onChange={updateTitle}
        />
      </h2>
      <p>
        <textarea
          className="debounce_input_textarea outline-none	resize-none h-[50px] overflow-hidden w-full border-0;
      "
          defaultValue={data?.description}
          onChange={updateDescription}
        />
      </p>
      <button className="text-start flex items-center gap-2 p-1 text-red-500 rounded-lg  group w-full focus:outline-none active:bg-white">
        Add section
      </button>
      <span className="h-[.1px] w-full bg-gray-600 mb-3" />
      <div className="d-flex" />
    </div>
  );
};

export default Board;
