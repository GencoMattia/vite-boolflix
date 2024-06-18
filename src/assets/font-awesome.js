import { library } from "../../node_modules/@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/vue-fontawesome";
import { fas } from "../../node_modules/@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

export { FontAwesomeIcon };