export class View {
  /**
   * Populates this View object from a plain JS object
   * Does not deal with nested objects
   * @param obj The plain object to copy the data from
   * @param map A map of properties to copy in the format of source:target
   *  If the target property is null, it will use the same property name as the source
   */
  protected buildViewModelFromObj(obj: any, map: { [prop: string]: any }) {
    Object.keys(map).forEach((prop) => {
      const objProp = obj[map[prop] || prop];
      (this as any)[prop] = objProp ? objProp : null;
    });
  }

  /**
   * Populates a JS object from a this View object
   * Does not deal with nested objects
   * @param map A map of properties to copy in the format of source:target
   *  If the target property is null, it will use the same property name as the source
   */
  protected buildObjFromViewModel(map: any) {
    const obj: any = {};
    Object.keys(map).forEach((prop) => {
      const viewProp = (this as any)[map[prop] || prop];
      obj[prop] = viewProp ? viewProp : null;
    });
  }
}
