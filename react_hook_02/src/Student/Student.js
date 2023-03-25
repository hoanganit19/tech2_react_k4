import React, {
  useState,
  useTransition,
  useDeferredValue,
  useMemo,
} from "react";
import data from "./data.json";

const { students } = data;

const Student = () => {
  const [keyword, setKeyword] = useState("");

  //const [isPending, startTransition] = useTransition();

  const keywordDeferred = useDeferredValue(keyword);

  const lists = useMemo(() => {
    return students.map((student, index) => {
      const isSearch =
        keyword.length > 0
          ? student.toLowerCase().includes(keyword.toLowerCase())
          : false;
      return (
        <h3 key={index} style={{ background: isSearch ? "yellow" : "" }}>
          {student}
        </h3>
      );
    });
  }, [keywordDeferred]);

  const handleChange = (e) => {
    // startTransition(() => {

    // });

    setKeyword(e.target.value);
  };

  //console.log(isPending);

  return (
    <div>
      <input type="search" placeholder="Search..." onChange={handleChange} />
      <h2>Student</h2>
      {lists}
    </div>
  );
};

export default Student;
