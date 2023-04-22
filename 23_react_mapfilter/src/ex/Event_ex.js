import { useState } from "react";

const Event_ex = () => {
  const [info, setInfo] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const register = () => {
    if (inputName.trim().length === 0 && inputEmail.trim().length === 0) return;
    // TODO: email 유효성 검사
    // TODO: 중복 검사

    const newInfo = info.concat({
      id: info.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setInfo(newInfo);
    setName("");
    setEmail("");
  };

  const deleteInfo = (id) => {
    const newInfo = info.filter((obj) => obj.id !== id);
    setInfo(newInfo);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") register();
  };

  return (
    <>
      <input
        type="text"
        value={inputName}
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={inputEmail}
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={register}>등록</button>
      <div>
        {info.map((obj) => (
          <li
            key={obj.id}
            style={{ listStyle: "none", fontSize: "18px", fontWeight: "bold" }}
            onDoubleClick={() => deleteInfo(obj.id)}
          >{`${obj.name}: ${obj.email}`}</li>
        ))}
      </div>
    </>
  );
};

export default Event_ex;
