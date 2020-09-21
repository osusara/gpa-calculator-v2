import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const TableTopic = ({ year, semester }) => {
  return (
    <h5 className="p-2 mb-2 bg-dark text-white card-title text-center">
      Year {year} Semester {semester}
    </h5>
  );
};

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Code</th>
        <th>Title</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    </thead>
  );
};

export const CompulsoryRows = ({
  results,
  setResults,
  items: { subjects },
}) => {
  return subjects.map((item) =>
    item.compulsory ? (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td className="subject-title">{item.subject}</td>
        <td>{item.credits}</td>
        <td className="subject-grade">
          <Form.Control
            className="form-control-sm grade-input"
            type="text"
            name={item.id}
            value={results[item.id] ? results[item.id].result : ""}
            onChange={(e) =>
              setResults({
                ...results,
                [e.target.name]: {
                  result: e.target.value,
                  credits: item.credits,
                },
              })
            }
          />
        </td>
      </tr>
    ) : null
  );
};

export const ElectiveRow = ({
  electives,
  setElectives,
  items: { subjects, electiveSubjectsIndex },
  number,
}) => {
  const [selected, setSelected] = useState({
    id: "",
    subject: "",
    credits: 0,
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    const listData = [];
    // eslint-disable-next-line array-callback-return
    subjects.map((item) => {
      if (!item.compulsory) {
        let set = false;

        for (let i = 1; i <= electiveSubjectsIndex[1]; i++) {
          if (electives[i]) {
            if (item.id === electives[i].id) {
              set = true;
            }
          }
        }

        if (!set) {
          listData.push(item);
        }
      }
    });

    setList(listData);

    if (electives && electives[number]) {
      if (subjects.filter((item) => item.id === electives[number].id)[0]) {
        setSelected({
          id: electives[number].id,
          subject: subjects.filter(
            (item) => item.id === electives[number].id
          )[0].subject,
          credits: electives[number].credits,
        });
      }
    }
  }, [electiveSubjectsIndex, electives, number, subjects]);

  const onSelect = (e) => {
    const data = list.filter((item) => item.id === e.target.value);

    if (data[0]) {
      setSelected({
        id: data[0].id,
        subject: data[0].subject,
        credits: data[0].credits,
      });

      setElectives({
        ...electives,
        [number]: {
          id: data[0].id,
          result: "",
          credits: data[0].credits,
        },
      });
    } else {
      setSelected({
        id: "",
        subject: `Select The Elective Subject ${number}`,
        credits: 0,
      });

      setElectives({
        ...electives,
        [number]: null,
      });
    }
  };

  return (
    <tr>
      <td>{selected.id}</td>
      <td className="subject-title">
        <Form.Control
          as="select"
          className="form-control-sm"
          value={selected.id}
          onChange={(e) => onSelect(e)}
        >
          <option value="IS312XX" hidden>
            Select The Elective Subject {number}
          </option>
          {selected &&
          electives[number] &&
          electives[number].id === selected.id ? (
            <option value={selected.id}>{selected.subject}</option>
          ) : null}
          {list.map((item) => (
            <option key={item.id} value={item.id}>
              {item.subject}
            </option>
          ))}
          <option value="IS312XX">NOT DECIDED YET!</option>
        </Form.Control>
      </td>
      <td>{selected.credits}</td>
      <td className="subject-grade">
        {selected.credits > 0 ? (
          <Form.Control
            className="form-control-sm grade-input"
            type="text"
            name={selected.id}
            value={electives[number] ? electives[number].result : ""}
            onChange={(e) =>
              setElectives({
                ...electives,
                [number]: {
                  id: selected.id,
                  result: e.target.value,
                  credits: selected.credits,
                },
              })
            }
          />
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

// export const CompulsoryRow = ({ results, setResults, item }) => {
//   return (
//     <tr>
//       <td>{item.id}</td>
//       <td className="subject-title">{item.subject}</td>
//       <td>{item.credits}</td>
//       <td className="subject-grade">
//         <Form.Control
//           className="form-control-sm grade-input"
//           type="text"
//           name={item.id}
//           value={results[item.id] ? results[item.id].result : ""}
//           onChange={(e) =>
//             setResults({
//               ...results,
//               [e.target.name]: {
//                 result: e.target.value,
//                 credits: item.credits,
//               },
//             })
//           }
//         />
//       </td>
//     </tr>
//   );
// };
