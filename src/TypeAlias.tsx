type Combinable = number | string;

const TypeAlias = () => {
  function combine(input1: Combinable, input2: Combinable) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  /**리턴이 없는 함수는 void 타입을 지정해주어야한다 */
  function justConsole(num: number): void {
    console.log("Result " + num);
  }
  justConsole(1);
  return (
    <div className="border-2 border-emerald-300">
      <div className="">TypeAlias</div>
      <div>{`${typeof combine(1, 1)} ${combine(1, 1)}`}</div>
      <div>{`${typeof combine(1, "1")} ${combine(1, "1")}`}</div>
    </div>
  );
};
export default TypeAlias;
