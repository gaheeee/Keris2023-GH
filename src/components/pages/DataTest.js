import Heading from "../Heading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DataTest() {
    let [mydata, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://7e2da4aa-41d3-4453-8364-c0aa236497e9.mock.pstmn.io/list")
            .then((result) => {
                console.log(result.data);
                setData(result.data);
            })
            .catch((error) => {
                console.log('error: ' + error);
            });
    }, []);

    return (
        <div>
            <Heading to = "/">데이터 가져오기</Heading>
            {mydata.map((data) => (
                <p key={data.id}>
                    id : {data.id} <br/>
                    name : {data.name} <br/>
                    dge : {data.age}
                </p>

            ))}
        </div>
    );
}