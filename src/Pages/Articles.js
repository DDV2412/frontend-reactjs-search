import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RiSearch2Line } from "react-icons/ri";
import { Select } from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  articles as articleAction,
  clearErrors,
} from "../Redux/Actions/article";

const Articles = () => {
  const [switchTab, setSwitchTab] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const singleSearch = useRef(null);
  const advancedSearch = useRef(null);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(25);
  const [filterByJournal, setFilterByJournal] = useState("");
  const [filterByTopic, setFilterByTopic] = useState("");
  const [field, setField] = useState("");
  const [sortBy, setSortBy] = useState("sortByRelevance");
  const [deFaultSearch, setDefaultSearch] = useState("");
  const [operation, setOperation] = useState("");
  const [range, setRange] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  let { error, articles, aggregations } = useSelector(
    (state) => state.articles
  );

  const setRangeYear = (e) => {
    e.preventDefault();
    setRange(minYear + "-" + maxYear);
  };

  const singleSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(
      articleAction(
        page,
        size,
        filterByJournal,
        filterByTopic,
        search,
        range,
        sortBy
      )
    );
  };

  const advancedSubmit = (e) => {
    e.preventDefault();
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

  const resetFilter = () => {
    setFilterByJournal("");
    setFilterByTopic("");
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors);
    }

    dispatch(
      articleAction(
        page,
        size,
        filterByJournal,
        filterByTopic,
        search,
        range,
        sortBy
      )
    );
  }, [
    dispatch,
    error,
    page,
    size,
    filterByJournal,
    filterByTopic,
    search,
    range,
    sortBy,
  ]);

  return (
    <>
      <Navbar />
      <header className="pt-16 min-h-[50vh]">
        <section className="container min-h-[50vh] px-4 mx-auto flex flex-col justify-center items-center">
          <form
            onSubmit={singleSearchSubmit}
            ref={singleSearch}
            className="relative min-w-full"
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
                value={deFaultSearch}
                onChange={(e) => setDefaultSearch(e.target.value)}
                placeholder="Search article by title, DOI or other"
              />
              <Select
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="flex-none"
              >
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
              <Select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="flex-none"
              >
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
              <Select
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="flex-none"
              >
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
      <main className="container max-h-max px-4 pb-10 mx-auto flex flex-col md:flex-row gap-6 justify-between items-start">
        <div className="flex-none max-w-[20rem]">
          <div className="flex justify-between items-center gap-6">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 w-min"
            >
              <option value="sortByRelevance" selected>
                Relevance
              </option>
              <option value="sortByDateDESC">Newest First</option>
              <option value="sortByDateASC">Oldest First</option>
              <option value="sortByCited">Most Cited</option>
              <option value="sortByTitleASC">Document Title A-Z</option>
              <option value="sortByTitleDESC">Document Title Z-A</option>
            </Select>
            <Select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="flex-none w-max relative right-0"
            >
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Select>
          </div>
          <Button
            className="bg-indigo-700 py-3 px-4 mt-3 w-full text-white"
            onClick={resetFilter}
          >
            Reset Filter
          </Button>
          {aggregations && (
            <>
              <div className="py-4">
                <p className="font-semibold text-xl mb-6">Year</p>
                <form onSubmit={setRangeYear}>
                  <div className="flex justify-between items-center gap-x-8">
                    <Input
                      type="text"
                      value={minYear}
                      onChange={(e) => setMinYear(e.target.value)}
                      className="w-full"
                    />
                    <Input
                      type="text"
                      value={maxYear}
                      onChange={(e) => setMaxYear(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button
                    className="bg-indigo-700 py-3 px-4 mt-3 w-full text-white"
                    type="submit"
                  >
                    Set Year
                  </Button>
                </form>
              </div>
              <div className="py-4">
                <p className="font-semibold text-xl mb-6">Journal</p>
                <div className="max-h-96 overflow-y-scroll">
                  {aggregations["journal"]["buckets"].map((data) => (
                    <div
                      key={data["key"]}
                      className="flex items-center gap-x-4 gap-y-6"
                    >
                      <input
                        key={data["key"]}
                        type={"checkbox"}
                        value={filterByJournal}
                        checked={filterByJournal === data["key"] ? true : false}
                        onChange={(e) => setFilterByJournal(data["key"])}
                      />
                      <label className="text-sm">{data["key"]}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-4">
                <p className="font-semibold text-xl mb-6">Topic</p>
                <div className="max-h-96 overflow-y-scroll">
                  {aggregations["topic"]["buckets"].map((data) => (
                    <div
                      key={data["key"]}
                      className="flex items-center gap-x-4 gap-y-6 py-1"
                    >
                      <input
                        key={data["key"]}
                        type={"checkbox"}
                        checked={filterByTopic === data["key"] ? true : false}
                        value={filterByTopic}
                        onChange={(e) => setFilterByTopic(data["key"])}
                      />
                      <label className="text-sm">{data["key"]}</label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {articles.length > 0 &&
            articles.map((article, i) => (
              <div
                key={i}
                className="border-2 border-slate-300 p-6 rounded-md shadow-sm cursor-pointer"
              >
                <h1 className="text-md font-medium">
                  {article["_source"]["title"]}
                </h1>
                {article["_source"]["authors"].map((author, i) => (
                  <span className="text-sm" key={i}>
                    {author.firstname + " " + author.lastname + ", "}
                  </span>
                ))}
              </div>
            ))}
          <div className="flex min-w-full justify-between items-center">
            <Button onClick={(e) => setPage(page - 1)}>Prev</Button>
            <Button onClick={(e) => setPage(page + 1)}>Next</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles;
