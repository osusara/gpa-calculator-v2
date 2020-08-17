import applied from "./applied";
import agri from "./agri";
import geo from "./geo";
import management from "./management";
import medical from "./medical";
import social from "./social";
import tech from "./tech";

export const getData = (faculty, department) => {
  let payload = null;
  
  switch (faculty) {
    case "applied":
      payload = applied(department);
      break;
    case "agri":
      payload = agri.getData(department);
      break;
    case "geo":
      payload = geo.getData(department);
      break;
    case "management":
      payload = management.getData(department);
      break;
    case "medical":
      payload = medical.getData(department);
      break;
    case "social":
      payload = social.getData(department);
      break;
    case "tech":
      payload = tech.getData(department);
      break;
    default:
      payload = false;
  }

  return payload;
}