import { generateUser } from "../store/data/static-data";
export default function user(state = generateUser(), action) {
  return state;
}
