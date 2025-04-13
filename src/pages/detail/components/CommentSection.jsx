import { useState } from "react";
import "../../home/components/src/style.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    const newComment = { id: Date.now(), text: input };
    setComments([...comments, newComment]);
    setInput("");
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = () => {
    setComments(
      comments.map((c) => (c.id === editId ? { ...c, text: editText } : c))
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-2">Komentar</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" py-2 text-sm header-background border-gray-600 focus:outline-none focus:ring focus:ring-gray-900 w-full"
          placeholder="Tulis komentar..."
        />
        <button
          onClick={handleAdd}
          className="bg-[#3D4142] hover:bg-gray-600 text-white px-4 rounded-md"
        >
          Tambah
        </button>
      </div>

      {comments.map((c) => (
        <div key={c.id} className="header-background rounded-md mb-4">
          {editId === c.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="py-1 header-background border-gray-600 focus:outline-none focus:ring focus:ring-gray-900 rounded-md w-full mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Simpan
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Batal
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-2">{c.text}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(c.id, c.text)}
                  className="bg-yellow-400 text-black px-3 py-1 rounded-md text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Hapus
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
