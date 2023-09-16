import { FaBars, FaPlusCircle, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { useEffect, useState } from "react";
import defaultUserImg from "../assets/avatar.jpg";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import {
  useCreateBoardMutation,
  useDeleteBoardMutation,
  useGetBoardsQuery,
} from "../redux/features/boardService";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createBoard, { data: newBoard }] = useCreateBoardMutation();
  const navigation = useNavigate();
  const { data } = useGetBoardsQuery();
  const fetchData = useGetBoardsQuery();

  // console.log(data);
  // console.log( "new Board" ,newBoard);

  const [deleteBoard] = useDeleteBoardMutation();

  const handleDelete = (id) => {
    // console.log(id);
    deleteBoard(id);
    fetchData.refetch();
  };

  useEffect(() => {
    if (newBoard) {
      navigation(`/boards/${newBoard._id}`);
    }
  }, [newBoard]);

  return (
    <div className="relative">
      <button
        onClick={() => setSidebarOpen(true)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden "
      >
        <span className="sr-only">{"open sidebar"}</span>

        <FaBars />
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen || "-translate-x-full"
        } sm:translate-x-0`}
      >
        {/* sidebar  */}
        <button
          onClick={() => setSidebarOpen(false)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-red-800 bg-red-200 m-1 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden absolute right-0"
        >
          <span className="sr-only">{"open sidebar"}</span>

          <FaTimes />
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <Link
            to="/"
            className="flex items-center p-2 font-bold text-gray-900 rounded-lg hover:bg-gray-100  group"
          >
            <img
              className="w-5 h-5 rounded transition duration-75"
              src={defaultUserImg}
              alt="profile"
              referrerPolicy="no-referrer"
            />
            <span className="ml-3">{"unknown"}</span>
          </Link>
          <ul className="space-y-2 font-medium ml-2">
            <li>
              <button
                onClick={() => createBoard()}
                className="flex items-center gap-2 p-1 text-gray-500 rounded-lg hover:bg-gray-100 group w-full focus:outline-none active:bg-white"
              >
                <FaPlusCircle /> {"new page"}
              </button>
            </li>
            <li>
              <button
                // onClick={() => dispatch(userLogout())}
                className="flex items-center gap-2 p-1 bg-red-100 text-red-500 rounded-lg hover:bg-red-50 group w-full focus:outline-none active:bg-white"
              >
                <HiOutlineLogout className="ml-1" /> {"logout"}
              </button>
            </li>
          </ul>
          <ul className="space-y-2 font-medium ml-2">
            <li>
              <small className="text-gray-400">favorite</small>
            </li>
            <li>
              <small className="text-gray-400">private</small>
            </li>

            {data?.map((item, index) => (
              <>
                <li className="group" key={index}>
                  <Link
                    className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group"
                    to={`/boards/${item?._id}`}
                  >
                    {item?.icon}
                    <span className="ml-1">{item?.title}</span>
                    <div className="hidden group-hover:flex ml-2">
                      <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1">
                        <FaEdit></FaEdit>
                      </span>
                      <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1">
                        <FaPlus></FaPlus>
                      </span>
                      <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1 text-red-400">
                        <button onClick={() => handleDelete(item.id)}>
                          <FaTrash></FaTrash>
                        </button>
                      </span>
                    </div>
                  </Link>
                </li>
              </>
            ))}
          </ul>
          {/* <BoardList /> */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
