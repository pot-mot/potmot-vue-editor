import {Option} from "../../declare/InsertUtil";

export const zenuml: Option = {
    key: "zenuml",
    label: "zenUML",
    value: `zenuml
    try {
      Consumer->API: Book something
      API->BookingService: Start booking process
    } catch {
      API->Consumer: show failure
    } finally {
      API->BookingService: rollback status
    }`
}