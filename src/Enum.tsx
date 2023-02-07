enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  GUEST = 100,
}
const Enum = () => {
  console.log("enum", Role.ADMIN);

  return (
    <div className="border-2 border-red-300">
      enum은 열거형 자료타입으로써 아무것도 지정하지않을시 0부터 시작하여 1씩
      증가하며 직접 지정하여 쓸 수도 있다.
      <br />
      0일경우 ADMIN권한만주고 100일 경우 GUSET권한만 가지는등의 로직에서
      유용하게 사용할수 있을것같다.
      <br />
      <div>
        <ul className="flex flex-col justify-center items-center">
          <li>{Role.ADMIN}=ADMIN</li>
          <li>{Role.READ_ONLY}=READ_ONLY</li>
          <li>{Role.AUTHOR}=AUTHOR</li>
          <li>{Role.GUEST}=GUEST</li>
        </ul>
      </div>
    </div>
  );
};
export default Enum;
