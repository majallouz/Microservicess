import { Experience } from "./Experience"
import { Education } from "./Education"

export class Candidat {
  id? : string
  name? : string
  phone? : string
  email? : string
  experience : Experience[]
  education : Education[]
}
