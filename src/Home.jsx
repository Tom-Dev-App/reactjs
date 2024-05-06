import { useEffect, useState } from "react";
function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const numbers = [1, 2, 3, 4, 5];
  const users = [
    {
      id: "USER-001",
      name: "Thoriq",
      gender: "male",
    },
    {
      id: "USER-002",
      name: "Ika",
      gender: "female",
    },
    {
      id: "USER-003",
      name: "Letty",
      gender: "female",
    },
    {
      id: "USER-004",
      name: "Septi",
      gender: "female",
    },
    {
      id: "USER-005",
      name: "Elsi",
      gender: "female",
    },
    {
      id: "USER-006",
      name: "Alfi",
      gender: "male",
    },
  ];
  useEffect(() => {
    const dataDummy = [
      {
        id: 1,
        name: "Item Default",
      },

      {
        id: 2,
        name: "Item Even",
      },
      {
        id: 3,
        name: "Item Odd",
      },
    ];

    if (count === 0) {
      setData(dataDummy[0]);
    } else if (count % 2 === 0) {
      setData(dataDummy[1]);
    } else {
      setData(dataDummy[2]);
    }
    console.log(data);
  }, [count]);

  return (
    <>
      <div>
        <h1>Udah diklik sebanyak {count} x</h1>
        <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>

      <div>
        <h3>Looping array numbers</h3>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Data Dummy Conditional Rendering pake useState dan useEffect</h4>
        <p>{data?.name}</p>
      </div>
      <h3
        style={{ marginTop: "30px", marginInline: "auto", textAlign: "center" }}
      >
        Maping nama User dengan kondisi (female nama warna merah, male warna
        biru)
      </h3>
      <div
        style={{
          marginBottom: "500px",
        }}
      >
        {users.map((user, index) => (
          <div
            key={user.id ?? index}
            style={{
              border: "1px solid darkblue",
              maxWidth: "300px",
              padding: "16px",
              marginBottom: "10px",
              marginInline: "auto",
              borderRadius: "6px",
            }}
          >
            <h1>ID {user?.id} </h1>
            <h5>Index {index} </h5>
            <p>
              Nama{" "}
              <span
                style={{ color: user?.gender === "female" ? "RED" : "BLUE" }}
              >
                {user?.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
