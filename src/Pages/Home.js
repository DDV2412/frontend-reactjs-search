import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RiSearch2Line } from "react-icons/ri";
import { Select } from "../components/Select";

const Home = () => {
  const [switchTab, setSwitchTab] = useState(true);
  const [search, setSearch] = useState("");

  const singleSearch = useRef(null);
  const advancedSearch = useRef(null);

  const singleSearchSubmit = (e) => {
    e.preventDefault();

    console.log(search);
  };

  const advancedSubmit = (e) => {
    e.preventDefault();

    console.log(search);
  };

  const switchButton = () => {
    setSwitchTab(!switchTab);

    if (switchTab === true) {
      singleSearch.current.classList.add("hidden");
      advancedSearch.current.classList.remove("hidden");
    } else {
      advancedSearch.current.classList.add("hidden");
      singleSearch.current.classList.remove("hidden");
    }
  };

  const resetButton = () => {};

  return (
    <>
      <Navbar />
      <header className="pt-16 min-h-[90vh]">
        <section className="container min-h-[90vh] px-4 mx-auto flex flex-col justify-center items-center">
          <form
            ref={singleSearch}
            className="relative min-w-full"
            onSubmit={singleSearchSubmit}
          >
            <Input
              type="text"
              name="search"
              value={search}
              className="min-w-full"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search article by title or DOI"
            />
            <Button
              type="submit"
              className=" p-4  absolute text-slate-400 font-medium right-1 top-1.5"
            >
              <RiSearch2Line />
            </Button>
          </form>
          <form ref={advancedSearch} className="min-w-full hidden">
            <div className="flex gap-4 relative mt-2">
              <Input
                type="text"
                name="search"
                className="flex-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search article by title, DOI or other"
              />
              <Select className="flex-none">
                <option value="_source">Full Search</option>
                <option value="topic">Topic</option>
                <option value="title">Document Title</option>
                <option value="abstract">Abstract</option>
                <option value="resources">Volume or Issue</option>
                <option value="pages">Document Page</option>
                <option value="doi">DOI</option>
                <option value="keywords">Author Keyword</option>
                <option value="journal.name">Publication Title</option>
                <option value="journal.publisher">Publisher</option>
                <option value="journal.issn">ISSN</option>
                <option value="journal.e_issn">E_ISSN</option>
                <option value="authors.firstname">Author Firstname</option>
                <option value="authors.lastname">Author Lastname</option>
              </Select>
            </div>
            <div className="flex gap-4 relative mt-6">
              <Select className="flex-none">
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="NOT">NOT</option>
              </Select>
              <Input
                type="text"
                name="search"
                className="flex-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search article by title, DOI or other"
              />
              <Select className="flex-none">
                <option value="_source">Full Search</option>
                <option value="topic">Topic</option>
                <option value="title">Document Title</option>
                <option value="abstract">Abstract</option>
                <option value="resources">Volume or Issue</option>
                <option value="pages">Document Page</option>
                <option value="doi">DOI</option>
                <option value="keywords">Author Keyword</option>
                <option value="journal.name">Publication Title</option>
                <option value="journal.publisher">Publisher</option>
                <option value="journal.issn">ISSN</option>
                <option value="journal.e_issn">E_ISSN</option>
                <option value="authors.firstname">Author Firstname</option>
                <option value="authors.lastname">Author Lastname</option>
              </Select>
            </div>
          </form>
          <div className="flex justify-center items-center gap-6">
            <Button
              type="button"
              onClick={switchTab ? switchButton : resetButton}
              className={`px-6 py-4 text-white font-medium mt-6 ${
                switchTab ? "bg-rose-700" : "bg-indigo-700"
              }`}
            >
              {switchTab ? "Advanced Search" : "Reset"}
            </Button>
            <Button
              type="submit"
              onClick={advancedSubmit}
              className={`px-6 py-4 text-white font-medium mt-6  bg-rose-700 ${
                switchTab ? "hidden" : "block"
              }`}
            >
              Search
            </Button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Home;
