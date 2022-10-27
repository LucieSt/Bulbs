
import { Bulb } from "./Bulb/index.js";

const container = document.getElementById('app');
container.append(Bulb({isOn: false}), Bulb({isOn: false}), Bulb({isOn: false}));

