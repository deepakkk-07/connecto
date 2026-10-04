import { useEffect, useState } from "react";
import { SearchIcon, UserPlusIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

export default function AddContact() {
  const [query, setQuery] = useState("");
  const { searchUsers, searchResults, isSearching, addContact } =
    useChatStore();

  // debounce so we don't hit the DB on every keystroke
  useEffect(() => {
    const t = setTimeout(() => searchUsers(query), 400);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div className="p-3">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search people by name..."
          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg py-2 pl-9 pr-3 text-slate-200"
        />
      </div>

      {isSearching && (
        <p className="text-sm text-slate-400 mt-2">Searching...</p>
      )}

      <div className="mt-2 space-y-2">
        {searchResults.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-3 bg-cyan-500/10 p-3 rounded-lg"
          >
            <img
              src={user.profilePic || "/avatar.png"}
              className="size-10 rounded-full object-cover"
            />
            <span className="flex-1 text-slate-200 truncate">
              {user.fullName}
            </span>
            <button
              onClick={() => addContact(user)}
              className="text-cyan-400 hover:text-cyan-300"
            >
              <UserPlusIcon className="size-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
