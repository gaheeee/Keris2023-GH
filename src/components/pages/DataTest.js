import Heading from "../Heading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DataTest() {
    let [mydata, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://50d47fc2-13b1-4717-a6aa-5bd9e15af203.mock.pstmn.io/ele7")

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
            <Heading to="/">데이터 가져오기</Heading>
            {mydata.map((data) => (
                <p key={data.id}>
                    {data.id} : {data.text}
                </p>
            ))}
        </div>
    );
}