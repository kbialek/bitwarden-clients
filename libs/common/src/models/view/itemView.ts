import { LinkedMetadata } from "../../misc/linkedFieldOption.decorator";

import { View } from "./view";

export abstract class ItemView extends View {
  linkedFieldOptions: Map<number, LinkedMetadata>;
  abstract get subTitle(): string;
}
