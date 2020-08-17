import cis from "./cis.json";
import fst from "./fst.json";
import nr from "./nr.json";
import pst from "./pst.json";
import pe from "./pe.json";
import sm from "./sm.json";

const applied = (department) => {
  switch (department) {
    case "cis":
      return cis;
    case "fst":
      return fst;
    case "nr":
      return nr;
    case "pst":
      return pst;
    case "pe":
      return pe;
    case "sm":
      return sm;
    default:
      return false;
  }
};

export default applied;
